import './App.css';
import Post from './Components/PostComponent';
import { ConfigureStore } from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  const store = ConfigureStore();
  return (
    <Provider store = {store}>
    <div className="App">
      <Post />
    </div>
    </Provider>
  );
}

export default App;
