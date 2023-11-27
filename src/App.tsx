import Toolbar from './components/Toolbar/Toolbar';
import Cakes from './components/Cakes/Cakes';
import {CakesData} from './components/constant/constant';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import {Route, Routes} from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import FastFood from './components/Portfolio/FastFood/src/FastFood';
import Chat from './components/Portfolio/Chat/src/Chat';
import User from './components/Portfolio/User/src/User';

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
        <Route path="/Portfolio" element={(
          <Portfolio/>
        )}/>
        <Route path="/Portfolio/fast-food" element={(
          <FastFood/>
        )}/>
        <Route path="/Portfolio/chat" element={(
          <Chat/>
        )}/>
        <Route path="/Portfolio/user" element={(
          <User/>
        )}/>
      </Routes>
    </>
  );
}

export default App;
