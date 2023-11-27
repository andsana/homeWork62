import Toolbar from './components/Toolbar/Toolbar';
import Cakes from './components/Cakes/Cakes';
import {CakesData} from './components/constant/constant';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
        <Routes>
          <Route path="/" element={(
            <Cakes cakes={CakesData}/>
          )}/>
          <Route path="/About-us" element={(
            <About/>
          )}/>
          <Route path="/Contacts" element={(
            <Contacts/>
          )}/>
          <Route path="/Contacts" element={(
            <Contacts/>
          )}/>
        </Routes>
    </>

  );
}

export default App;
