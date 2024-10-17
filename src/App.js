import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/Store/AppStore';
import RoutingModule from './RoutingModule';


function App() {
  return (
    <Provider store={appStore}>
      <RoutingModule />
    </Provider>
  );
}

export default App;
