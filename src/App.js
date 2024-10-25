import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/masters-dissertation" element={<MastersDissertation />} />
            <Route path="/undergrad-dissertation" element={<UndergradDissertation />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
