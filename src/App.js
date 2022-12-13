import Service from './components/services';
import Hero from './components/hero';
import Faq from './components/faq';
import Contacts from './components/contacts';

import './App.css';

function App() {
  return (
    <div>
      <div className='bg-no-repeat bg-cover bg-hero-2'>
        <Hero/>
        <Service/>
        <Faq/>    
      <Contacts/>
      </div>
    </div>
  );
}
export default App;