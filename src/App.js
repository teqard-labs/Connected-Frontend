
import Hero from './components/hero';
import Faq from './components/faq';
import Contacts from './components/contacts';

import './App.css';

function App() {
  return (
    <div>
      <div className='bg-center bg-no-repeat bg-cover bg-hero'>
        <Hero/>
        <Faq/>
      </div>
      <div className=' bg-no-repeat bg-cover bg-hero-3'>
      <Contacts/>
      </div>
    </div>
  );
}
export default App;