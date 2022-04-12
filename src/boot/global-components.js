import QCalendar from '@quasar/quasar-ui-qcalendar';
import '@quasar/quasar-ui-qcalendar/dist/index.css';
import PageHeading from '@components/Global/PageHeading';
import DashboardBreadcrumbs from '@components/Dashboard/DashboardBreadcrumbs';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.use(QCalendar);
  Vue.component('page-heading', PageHeading);
  Vue.component('dashboard-breadcrumbs', DashboardBreadcrumbs);
};
