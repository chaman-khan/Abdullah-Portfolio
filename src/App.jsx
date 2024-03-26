import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactMeScreen from './screens/ContactMeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactMeScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
