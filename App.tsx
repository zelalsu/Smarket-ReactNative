import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
