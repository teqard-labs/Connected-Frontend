
import Hero from './components/hero';
import Faq from './components/faq';

import './App.css';

function App() {
  return (
    <div>
      <div className='bg-center bg-no-repeat bg-cover bg-hero'>
        <Hero/>
        <Faq/>
        </div>
    </div>
  );
}
export default App;