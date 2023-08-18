
import './App.css';
import Home from './components/Home'
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      {/* here Home is passed as a children to the DataProvider component if the props as <DataProvider value=23 /> was passed then it would be called as props */}
      <Home /> 
    </DataProvider>
  );
}

export default App;
