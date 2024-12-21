import logo from './logo.svg';
import './App.css';
import Routing from './Controllers/Routing/Routing';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Controllers/ReduxDemo/Store'

function App() {
  return (
    <PersistGate loading={<h1>Loading data offline...</h1>} persistor={persistor}>
      <Provider store={store}>
        <div className="App">
          <Routing />
        </div>
      </Provider>
    </PersistGate>
  );
}


export default App;
