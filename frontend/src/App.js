import './App.css';
import RouteName from './component/RouteName';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <div>
      <RouteName />
      <ToastContainer className='mt-5' />
    </div>
  );
}

export default App;
