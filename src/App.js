import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plan from './components/Plans/Plan';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Programs from './Programs/Programs';


function App() {
  return (
    <div className="app">
      
      <Hero />

      <Programs />

      <Reasons />

      <Plan />

      <Testimonials />

      <Join />

      <Footer />

    </div>
  );
}

export default App;
