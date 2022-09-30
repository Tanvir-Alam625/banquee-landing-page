import './App.css';
import AppSection from './components/AppSection/AppSection';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import SendMoney from './components/SendMoney/SendMoney';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AppSection />
      <SendMoney /> 
    </div>
  );
}

export default App;
