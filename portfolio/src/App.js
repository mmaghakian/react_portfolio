import './App.css';
import {Header} from './components/Header'
import Hero from './components/Hero'
import Links from './components/Links'
import Labs from './components/Labs'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Links/>
      <Labs/>
      <Footer/>
    </div>
  );
}

export default App;
