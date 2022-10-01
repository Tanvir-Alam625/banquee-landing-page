import './App.css';
import AppSection from './components/AppSection/AppSection';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import SendMoney from './components/SendMoney/SendMoney';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AppSection />
      <SendMoney /> 
      <Features />
    </div>
  );
}

export default App;
