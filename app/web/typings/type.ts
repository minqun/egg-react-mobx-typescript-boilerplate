import ConfigStore from '../page/home/store/config';

let testStore = ConfigStore.testStore;
let homeStore = ConfigStore.homeStore;
let infoStore = ConfigStore.infoStore;
export interface TabProps {
  infoStore?;
  title?: string;
  path?: string;
  homeList?: any[];
  keywords?: string;
  description?: string;
  
}

export interface StoreProps {
  testStore?
  homeStore?
  infoStore
}