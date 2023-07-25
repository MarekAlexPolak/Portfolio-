import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';

function App() {
    return (
    <>
    <Header/>
    <main className='main'>
        <div>
          <Navigation currentPage={currentPage} />
        </div>
    </main>
    <Footer/>
        </>
        );
    };

export default App;
