import Intro from './components/Intro.jsx';
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import {NewPortfolioHeader} from "./components/NewPortfolioHeader.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <NewPortfolioHeader />
            <Intro/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    );
}

export default App
