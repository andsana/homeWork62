import Toolbar from './components/Toolbar/Toolbar';
import Cakes from './components/Cakes/Cakes';
import {CakesData} from './components/constant/constant';
import About from './components/About/About';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <Cakes cakes={CakesData}/>
      <About/>
    </>
  );
}

export default App;
