import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirebaseProvider from './firebaseContext';
import Healthcare from './pages/healthcare';
import Signup from './pages/signup';
import SignupOrganization from './pages/signupOrganization';
import Select from './pages/select';
import ProjectRegistration from './pages/projectRegistration'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/select" element={
          <div><Select/></div>}/>
          <Route path="/healthcare" element={<>
          <div><Healthcare/></div>
          <footer><Footer/></footer></>} />
        <Route path="/login" element={<div><Login/></div>} />
        <Route path="/signup" element={<div><Signup/></div>} />
        <Route path="/signupOrganization" element={<div><SignupOrganization/></div>} />
      </Routes>
      <ToastContainer />
      

      
    </Router>

      
    </div>
    </FirebaseProvider>

    
  );
}

export default App;
