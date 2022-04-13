<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <div class="row">
        <div class="col-2 q-pr-lg">
          <div class="row">
            <div class="col q-pr-xs">
              <q-btn class="full-width" color="grey-6" icon="fas fa-chevron-left"  @click="onPrev" unelevated outline dense />
            </div>
            <div class="col">
              <q-btn class="full-width" color="grey-6" icon="fas fa-chevron-right" @click="onNext" unelevated outline dense />
            </div>
          </div>
        </div>
        <div class="col q-pl-md">
          <page-heading class="text-capitalize" :label="`${weekdayFormatter(today, false)}, ${dayFormatter(today, true)} ${monthFormatter(today, false)}`" />
        </div>
      </div>

      <div class="row q-mb-md">
        <div class="col-2 q-pr-lg">
          <q-btn
            class="new-item-btn full-width"
            color="green-6"
            icon="add"
            align="center"
            size="lg"
            unelevated
            no-caps
            @click="newTimeEntry.isVisible = true"
          />
        </div>

        <div class="col">
          <div class="title-bar row items-center overflow-hidden rounded-borders">
            <transition-group
              class="full-width"
              :enter-active-class="`animated ${transition}`"
              :leave-active-class="`animated ${transition}`"
              appear
            >
              <div :key="parsedStart.date" class="full-width row justify-between items-center text-white overflow-hidden">
                <div v-for="day in days" :key="day.date" class="date-navigator__items col">
                  <q-btn
                    class="date-navigator__item full-width text-black"
                    :class="dayClass(day)"
                    flat
                    dense
                    @click="selectedDate = day.date; transition = ''"
                  >
                    <div class="text-center text-capitalize">{{ weekdayFormatter(day, true) }}</div>
                    <div class="full-width text-center text-capitalize">
                      {{ dayFormatter(day, false) }} {{ monthFormatter(day, true) }}
                    </div>
                  </q-btn>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>

      <div class="row bg-grey-1 rounded-borders">
        <div class="col-12">
          <q-no-ssr>
            <ApolloQuery
              :query="require('@apollo/queries/getTimesheetWeek.gql')"
              :variables="{ date: new Date().toISOString() }"
              fetchPolicy="network-only"
            >

              <template v-slot="{ result: { error, data }, isLoading }">
                <!-- Loading -->
                <q-inner-loading :showing="!!isLoading">
                  <q-spinner-clock size="lg" color="accent" />
                </q-inner-loading>

                <!-- Error -->
                <div v-if="error && !isLoading" class="error apollo">
                  An error occurred
                </div>

                <!-- Result -->
                <div v-if="data && !isLoading" class="result apollo">
                  <div v-if="data.timesheet">
                    <q-item v-for="timeItem in data.timesheet.timeItems" :key="timeItem.id" class="q-my-sm">
                      <q-item-section avatar>
                        {{ timeItem.date }}
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>duration: {{ timeItem.duration }}</q-item-label>
                        <q-item-label caption lines="1">{{ timeItem.project.name }}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <q-icon name="account" color="green" />
                      </q-item-section>
                    </q-item>
                  </div>
                </div>
              </template>
            </ApolloQuery>
          </q-no-ssr>
        </div>
      </div>
    </div>

    <ModalNewTimeEntry :visible="newTimeEntry.isVisible" />
  </div>
</template>

<script>
// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)
import QCalendar from '@quasar/quasar-ui-qcalendar'; // ui is aliased from '@quasar/quasar-ui-qcalendar'
import ModalNewTimeEntry from '@components/Modals/ModalNewTimeEntry';

const CURRENT_DAY = new Date();

function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = QCalendar.parseDate(newDay);
  return tm.date;
}

export default {
  name: 'TimesIndex',
  components: {
    ModalNewTimeEntry,
  },
  data() {
    return {
      selectedDate: getCurrentDay(CURRENT_DAY.getDate()),
      weekdays: [0, 1, 2, 3, 4, 5, 6],
      locale: 'en-us',
      monthFormatter: this.monthFormatterFunc(),
      dayFormatter: this.dayFormatterFunc(),
      weekdayFormatter: this.weekdayFormatterFunc(),
      transitionPrev: 'slideInLeft',
      transitionNext: 'slideInRight',
      transition: '',

      // Apollo variables
      pagination: {
        size: 10,
      },

      filters: {
        status: 'ACTIVE',
        name: '',
      },

      newTimeEntry: {
        isVisible: false,
      },
    };
  },

  computed: {
    weekdaySkips() {
      return QCalendar.getWeekdaySkips(this.weekdays);
    },

    parsedStart() {
      if (this.selectedDate) {
        return QCalendar.getStartOfWeek(QCalendar.parseTimestamp(this.selectedDate), this.weekdays, this.today);
      }
      return undefined;
    },

    parsedEnd() {
      if (this.selectedDate) {
        return QCalendar.getEndOfWeek(QCalendar.parseTimestamp(this.selectedDate), this.weekdays, this.today);
      }
      return undefined;
    },

    today() {
      const newDay = new Date(CURRENT_DAY);
      const tm = QCalendar.parseDate(newDay);
      return tm;
    },

    days() {
      if (this.parsedStart && this.parsedEnd) {
        return QCalendar.createDayList(
          this.parsedStart,
          this.parsedEnd,
          this.today,
          this.weekdaySkips,
        );
      }
      return [];
    },
  },
  methods: {
    onPrev() {
      const ts = QCalendar.addToDate(this.parsedStart, { day: -7 });
      this.selectedDate = ts.date;
      this.transition = this.transitionPrev;
    },

    onNext() {
      const ts = QCalendar.addToDate(this.parsedStart, { day: 7 });
      this.selectedDate = ts.date;
      this.transition = this.transitionNext;
    },

    dayClass(day) {
      return {
        row: true,
        'justify-center': true,
        active: this.selectedDate === day.date,
      };
    },

    monthFormatterFunc() {
      const longOptions = { timeZone: 'UTC', month: 'long' };
      const shortOptions = { timeZone: 'UTC', month: 'short' };

      return QCalendar.createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => (short ? shortOptions : longOptions),
      );
    },

    weekdayFormatterFunc() {
      const longOptions = { timeZone: 'UTC', weekday: 'long' };
      const shortOptions = { timeZone: 'UTC', weekday: 'short' };

      return QCalendar.createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => (short ? shortOptions : longOptions),
      );
    },

    dayFormatterFunc() {
      const longOptions = { timeZone: 'UTC', day: '2-digit' };
      const shortOptions = { timeZone: 'UTC', day: 'numeric' };

      return QCalendar.createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => (short ? shortOptions : longOptions),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  width: 100%;
  max-height: 57px;
  border: 1px solid $grey-5;
}

.direction-button {
  background-color: $grey-5;
  color: white;
  z-index: 20;
}

.new-item-btn {
  height: 57px;
}

.date-navigator {
  &__items {
    &:nth-last-child(1){
      .date-navigator__item {
        border-right-width: 0px;
      }
    }
  }

  &__item {
    font-size: 13px;
    overflow-y: hidden;
    border-right: 1px solid $grey-5;
    border-bottom: 3px solid transparent;

    &.active {
      background: $grey-3;
      border-bottom: 3px solid $green;
    }
  }
}
</style>
