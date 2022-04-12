<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <div class="row">
        <div class="col-auto q-pr-xs">
          <q-btn color="grey-5" icon="fas fa-chevron-left"  @click="onPrev" unelevated outline />
        </div>
        <div class="col-auto q-pr-xs">
          <q-btn color="grey-5" icon="fas fa-chevron-right" @click="onNext" unelevated outline />
        </div>
        <div class="col q-pl-md">
          <page-heading :label="`${weekdayFormatter(today, false)}, ${dayFormatter(today, true)} ${monthFormatter(today, false)}`" />
        </div>
        <div class="col-auto">
          <q-btn color="green-7" icon="add" align="between" size="md" unelevated no-caps />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="title-bar row items-center overflow-hidden">
            <transition-group
              class="full-width"
              :enter-active-class="`animated ${transition}`"
              :leave-active-class="`animated ${transition}`"
              appear
            >
              <div :key="parsedStart.date" class="full-width row justify-between items-center text-white overflow-hidden">
                <div v-for="day in days" :key="day.date" class="col">
                  <q-btn flat class="full-width" :class="dayClass(day)" style="line-height: unset; color: black;" @click="selectedDate = day.date; transition = ''">
                    <div class="text-center" style="width: 100%;">{{ monthFormatter(day, true) }}</div>
                    <div class="text-center text-bold" style="width: 100%;  font-size: 16px;">{{ dayFormatter(day, false) }}</div>
                    <div class="text-center" style="width: 100%; font-size: 10px;">{{ weekdayFormatter(day, true) }}</div>
                  </q-btn>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)
import QCalendar from '@quasar/quasar-ui-qcalendar'; // ui is aliased from '@quasar/quasar-ui-qcalendar'

const CURRENT_DAY = new Date();

function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = QCalendar.parseDate(newDay);
  return tm.date;
}

export default {
  name: 'TimesIndex',
  data() {
    return {
      selectedDate: getCurrentDay(CURRENT_DAY.getDate()),
      weekdays: [0, 1, 2, 3, 4, 5, 6],
      locale: 'en-us',
      monthFormatter: this.monthFormatterFunc(),
      dayFormatter: this.dayFormatterFunc(),
      weekdayFormatter: this.weekdayFormatterFunc(),
      transitionPrev: 'slideInRight',
      transitionNext: 'slideInLeft',
      transition: '',
    };
  },
  beforeMounted() {
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
        'selected-date': this.selectedDate === day.date,
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
  height: 70px;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex: 1;
}

.direction-button {
  background-color: $grey-5;
  color: white;
  z-index: 20;
}

.selected-date {
  color: $accent !important;
  background: $grey-3 !important;
}
</style>
