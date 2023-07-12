import './App.css';
import './assets/js/script';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import  Header  from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import { Services } from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
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
      <About />
      <Testimonials />
      <Contact/>
    </div>
  );
}

export default App;
