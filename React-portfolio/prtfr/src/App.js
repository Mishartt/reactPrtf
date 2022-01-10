import './App.css';
import Header from './Components/Header';
import logo from './assets/img/logo.png'
import face from './assets/img/me.png'
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
          <Header logo={logo}/>
          <HomePage face={face}/>
    </div>
  );
}

export default App;
