import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import PaymentSuccess from './PaymentSuccess.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
