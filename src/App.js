import img1 from './media/Artboard1.jpg'
import img2 from './media/Artboard2.jpg'
import img3 from './media/Artboard3.jpg'
import img4 from './media/Artboard4.jpg'
import Hero from './components/hero';
import './App.css';

function App() {
  return (
    <div>
      <div className='w-full h-full dark:bg-[#01004C]'  style={{ backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat" }}>
      <Hero/>
      </div>
      <div className='w-full h-full dark:bg-[#01004C]'  style={{ backgroundImage:`url(${img2})`,backgroundRepeat:"no-repeat" }}>
      
      </div>
      <div className='w-full h-full dark:bg-[#01004C]'  style={{ backgroundImage:`url(${img3})`,backgroundRepeat:"no-repeat" }}>
      
      </div>
      <div className='w-full h-full dark:bg-[#01004C]'  style={{ backgroundImage:`url(${img4})`,backgroundRepeat:"no-repeat" }}>
      
      </div>
    </div>
  );
}
export default App;