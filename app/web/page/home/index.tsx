
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider, useStaticRendering } from 'mobx-react';

import { Observer, observer, inject } from 'mobx-react';
import ConfigStore from './store/config';
import { BrowserRouter, Route,  } from 'react-router-dom'
import Layout from '../../framework/layout';
import routeConfig from "./routers/index";

import { TabProps } from '../../typings/type';
import { observable } from 'mobx';
class App extends Component<TabProps, any> {
  render() {
    const stores = ConfigStore;
    const props = this.props;
  return( <Provider {...stores}>
    <Layout {...this.props}>
    
      </Layout>
    </Provider>
    );
    
  }
}

function rootView() {
  if (EASY_ENV_IS_NODE) {
    useStaticRendering(true);
    return App;
  }
  const stores = window.stores = window.stores || ConfigStore
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');

  class DevApp extends Component<any> {
    render () {
      let path = state.path;
      let ViewComponent = routeConfig[path].component;
      let ViewQuery = routeConfig[path].query;
      return (<Provider {...stores}>
        <AppContainer> 
        <BrowserRouter >
        <Route  path={path} component={()=>(<ViewComponent {...ViewQuery}/>)}  />
          </BrowserRouter>
      </AppContainer>
      </Provider>)
    }
  }
  class ProdApp extends Component<any> {
    render () {
      let path = state.path;
      let ViewComponent = routeConfig[path].component;
      let ViewQuery = routeConfig[path].query;
      return (<Provider {...stores}>
         <BrowserRouter >
            <Route  path={path} component={()=>(<ViewComponent {...ViewQuery}/>)}  />
          </BrowserRouter>
        </Provider>)
    }
  }
  const AppBox =  EASY_ENV_IS_DEV ? <DevApp /> : <ProdApp/>
    if (module.hot) {
      ReactDOM.render(
        AppBox
      , root);
      module.hot.accept();
    } else {
      ReactDOM.hydrate(
        AppBox
      , root);
    }
  }

export default rootView();
