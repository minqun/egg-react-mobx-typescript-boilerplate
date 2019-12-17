import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home.js', {
      path: ctx.url,
      title: '--Ant Design Tab--',
      keywords: 'react, server side render, ant design',
      message: { text: 'Ant Design Tab Theme and Code Spliting test3' },
      homeList: [
        {name:"home", path: '/'},
        {name:"list",path: '/list'},
      ]
    });
  }
}