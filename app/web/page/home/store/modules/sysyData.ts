import { observable, computed, action,autorun } from 'mobx';
class InfoStore {
    @observable info;
    @action setInfo(data: object) {
        this.info = data || {}
    }

}
const infoStore = new InfoStore();
if (!EASY_ENV_IS_NODE) {
    infoStore.setInfo(window.__INITIAL_STATE__)
}
autorun(()=>{
},{
    onError:(error)=> {
    console.log('info>>>',error)
}} 
)
export default infoStore;