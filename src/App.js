import './App.css';
import Connect from './components/Connect/Connect';
import LetTry from './components/LetTry/LetTry';
import Navbar from './components/Navbar/Navbar';
import Playground from './components/Playground/Playground';
import MyTimeline from './components/Timeline/MyTimeline';
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <LetTry/>
      <MyTimeline/>
      <Playground/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
