import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import History from './pages/History';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Main' element={<Main />} />
        <Route path='/History' element={<History />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
