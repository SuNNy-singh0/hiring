import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes ,Router} from 'react-router-dom';
import Mainpage from './Mainpage';
import Seller from './Seller';
import Buyyer from './Buyyer';
import SellerDashBoard from './SellerDashBoard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/seller" element={<Seller/>} />
          <Route path="/buyyer" element={<Buyyer/>} />
          <Route path="/Sellerdashboard" element={<SellerDashBoard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
