import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter'
import { PersistGate } from 'redux-persist/integration/react'
import {Container} from 'react-bootstrap'


//redux
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container fluid>
          <AppRouter />
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
