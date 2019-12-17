import { Tab } from '../component/tab';
import { List } from '../views/list';

 const routeConfig: any = {
  '/':{component:Tab, query: {name: 'home'}},
  '/list':{component:List, query: {name: 'home2'}}
}
export default routeConfig