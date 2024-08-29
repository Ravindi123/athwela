import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirebaseProvider from './firebaseContext';
import Healthcare from './pages/healthcare';

function App() {
  return (
    <FirebaseProvider>
    <div className="App">
      <Router>
      <header><Navbar/></header>

    
      <Routes>
        <Route path="/" element={<>
          <div><Home/></div>
          <footer><Footer/></footer></>} />
          <Route path="/home" element={<>
          <div><Home/></div>
          <footer><Footer/></footer></>} />
          <Route path="/healthcare" element={<>
          <div><Healthcare/></div>
          <footer><Footer/></footer></>} />
        <Route path="/login" element={<div><Login/></div>} />
      </Routes>
    </Router>

      
    </div>
    </FirebaseProvider>

    
  );
}

export default App;
