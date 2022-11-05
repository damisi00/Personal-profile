
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/Personal-profile' element={<ProfilePage />} />
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
