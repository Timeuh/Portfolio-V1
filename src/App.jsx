import Intro from './components/Intro.jsx';
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

function App() {

    return (
        <div>
            <Navbar/>
            <Intro/>
            <About/>
            <Skills/>
        </div>
    );
}

export default App
