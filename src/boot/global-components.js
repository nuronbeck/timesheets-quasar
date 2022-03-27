import PageHeading from '@components/Global/PageHeading';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.component('page-heading', PageHeading);
};
