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
import ProjectRegistration from './pages/projectRegistration';
import HomeRegistration from './pages/homeRegistration';
import SelectProject from './pages/selectProject';
// import Project from './pages/project';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './pages/userProfile';
import { auth } from './firebase';
import { useState, useEffect } from 'react';

import HelpPage from './pages/helpPage';  // Ensure the correct path


function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <FirebaseProvider>
      <div className="App">
        <Router>
          <header><Navbar /></header>

          <Routes>

            <Route path="/" element={<>
              <div><Home /></div>
              <footer><Footer /></footer></>} />
            <Route path="/home" element={<>
              <div><Home /></div>
              <footer><Footer /></footer></>} />
            <Route path="/select" element={
              <div><Select /></div>} />
            <Route path="/healthcare" element={<>
              <div><Healthcare /></div>
              <footer><Footer /></footer></>} />
            <Route path="/login" element={<div><Login /></div>} />
            <Route path="/signup" element={<div><Signup /></div>} />
            <Route path="/signupOrganization" element={<div><SignupOrganization /></div>} />
            <Route path="/selectProject" element={<div><SelectProject /></div>} />
            <Route path="/projectRegistration" element={<div><ProjectRegistration /></div>} />
            <Route path="/homeRegistration" element={<div><HomeRegistration /></div>} />
            <Route path="/userProfile" element={<div><UserProfile /></div>} />
            
            <Route path="/helpPage" element={<div><HelpPage/></div>}/>
          </Routes>
          <ToastContainer />



        </Router>


      </div>
    </FirebaseProvider>


  );
}

export default App;
