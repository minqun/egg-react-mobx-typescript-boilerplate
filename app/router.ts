
import { Application } from 'egg';
export default (app) => {
  app.get('*', app.controller.home.index);
};
