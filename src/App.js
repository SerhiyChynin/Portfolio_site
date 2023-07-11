import './App.css';
import './assets/js/script';
import About from './components/About/About';
import  Header  from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import { Services } from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
      <Work />
      <WorkProcess />
      <Newsletter />
      <About/>
    </div>
  );
}

export default App;
