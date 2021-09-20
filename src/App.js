import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Hero from './componants/HeroSection/Hero';
import Person from './componants/Person/Person';
import Service from './componants/ServiceSection/Service';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header></Header>
          <Hero></Hero>
          <Service></Service>
        </div>
        <div>
          <Person></Person>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
