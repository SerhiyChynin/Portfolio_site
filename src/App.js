import './App.css';
import './assets/js/script';
import  Header  from './components/Header/Header';
import { Services } from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <Work />
      <WorkProcess/>
    </div>
  );
}

export default App;
