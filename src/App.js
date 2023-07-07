import './App.css';
import './assets/js/script';
import  Header  from './components/Header/Header';
import { Services } from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
    </div>
  );
}

export default App;
