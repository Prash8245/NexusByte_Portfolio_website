import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Projects from './Components/Project';
import Section1 from './Components/Section1';
import Skill from './Components/Skill';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <About />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
