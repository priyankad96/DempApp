import React, {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';

{/********SIMPLE REDUX****/}
/*import { Provider } from 'react-redux';
import {store} from "./src/app/store";
import Todo from './src/app/Todo';

export const App =() =>(
    <Provider store={store}>
      <Todo/>
    </Provider>
);*/
  {/******************/}

{/*********TOD_REDUX*********/}

import {Provider} from 'react-redux';
import {store} from "./src/TodoRedux/store";
import {Main} from "./src/TodoRedux/Main";
// import Todo from './src/TodoRedux/Todo';
export const App =() =>(
    <Provider store={store}>
      <Main/>
    </Provider>
);












/*export default class App extends Component<Props> {
  render() {
    return (
    <Todo/>
    );
  }
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
