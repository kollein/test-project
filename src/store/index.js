import { store } from '@rddev/web-components';
import app from './modules/app';

const modules = {
  app,
};

// register specific modules
Object.keys(modules).forEach((name) => {
  store.registerModule(name, modules[name]);
});

export default store;
