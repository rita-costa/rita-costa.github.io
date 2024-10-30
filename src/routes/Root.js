import '../App.css';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="App">
        <Header />
        <Outlet />
    </div>
  );
}

export default Root;