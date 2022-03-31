import PageHeading from '@components/Global/PageHeading';
import DashboardBreadcrumbs from '@components/Dashboard/DashboardBreadcrumbs';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.component('page-heading', PageHeading);
  Vue.component('dashboard-breadcrumbs', DashboardBreadcrumbs);
};
