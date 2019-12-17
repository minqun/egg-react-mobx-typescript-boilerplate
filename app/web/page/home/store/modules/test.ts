import { observable, computed, action,autorun } from 'mobx';
import { CSSProperties } from 'react';
class TestStore {
    @observable name = '测试Name';
    @observable list:number[];
    @computed get getNameDetail() {
        return this.name + ':::detaiil'
    }
    @action changeName() {
        this.name = '修改名称成功'
    }
    constructor() {
        this.list= [
            1, 3, 4, 5];
    }
     // 定义状态并使其可观察
  @observable user:object = {};
  @observable size:number = 12;
  @observable themeStyle: CSSProperties ={
    backgroundColor: '#fff',
    fontSize: `${this.size}px`
  }
  @observable number = 0;
  @observable style: CSSProperties ={
    textAlign: 'center',
    marginTop: '40px',
    fontSize: `${this.size}px`
  }

  plus(){
    this.number++;
    this.style = {
      ...this.style,
      fontSize: `${this.size++}px`
    }
  }

  changeTheme(){
    this.themeStyle = {
      ...this.themeStyle,
      fontSize: `${this.size++}px`
    }
  }

}
const testStore = new TestStore();

export default testStore;