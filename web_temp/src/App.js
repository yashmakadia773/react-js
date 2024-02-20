
import About from './componant/About';
import './componant/App.css'
import Banner from './componant/Banner';
import Contact from './componant/Contact';
import Footer from './componant/Footer';
import Navber from './componant/Navebar';
import Service from './componant/Service';
import { Data } from './componant/Data';


// import Input from "./componant/input";


function App() {
  return (

    <>
      <Navber />
      <Banner />
      <About />
      <Service data={Data} />
      <Contact />
      <Footer />
    </>
  );
}



export default App;