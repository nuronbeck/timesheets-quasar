import { initializeApp } from 'firebase/app';
import firebaseConfig from '@constants/firebaseConfig';

initializeApp(firebaseConfig);

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  // something to do
};
