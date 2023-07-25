import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
    return (
    <>
    <Header/>
    <main className='main'>
        <Home/>
        <About/>
        <Resume/>
        </main>
        </>
        );
    };

export default App;
