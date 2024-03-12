import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
    <Navbar />
    <UserList />
  </Provider>

)
export default App
