import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import BigContainer from './Components/Main-Container/BigContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <BigContainer/>
      <Footer/>
    </div>
  );
}

export default App;
