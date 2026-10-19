import { Route, Routes } from 'react-router';
import CaptureScreen from './screens/CaptureScreen';
import StartScreen from './screens/StartScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/capture" element={<CaptureScreen />} />
    </Routes>
  );
}

export default App;