import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateEvent } from './Components/CreateEvent';
import { EventDisplay } from './Components/EventDisplay';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/create' element={<CreateEvent/>}/> 
      <Route path='/event' element={<EventDisplay/>}/> 
     </Routes>
    </div>
  );
}

export default App;
