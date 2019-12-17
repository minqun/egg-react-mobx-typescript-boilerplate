import { observable, computed, action } from 'mobx';
class HomeStore {

    @observable list;
    @computed get getLength() {
        return this.list.length
    }
    @action changeList() {
        this.list.push(6);
    }
    constructor() {
        this.list = [
            1, 3, 4, 5
        ]
    }

}
const homeStore = new HomeStore();
export default homeStore;