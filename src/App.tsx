import Toolbar from './components/Toolbar/Toolbar';
import Cakes from './components/Cakes/Cakes';
import {CakesData} from './components/constant/constant';

function App() {

  return (
    <>
      <Toolbar/>
      <Cakes cakes={CakesData}/>
    </>
  );
}

export default App;
