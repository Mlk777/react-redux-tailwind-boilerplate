import React from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Components
import Intro from './components/Intro';

const App = () => (
  <Provider store={store}>
    <>
      <Intro />
    </>
  </Provider>
);

export default App;
