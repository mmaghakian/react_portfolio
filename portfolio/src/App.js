import './App.css';
import Hero from './components/Hero'
import Links from './components/Links'
import Labs from './components/Labs'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Links/>
      <Labs/>
      <Footer/>
    </div>
  );
}

export default App;
