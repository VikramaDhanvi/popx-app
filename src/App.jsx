import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import CreateAccountForm from './CreateAccountForm';
import AccountSettings from './AccountSettings'; // ✅ Don't forget this!

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/create-account" element={<CreateAccountForm />} />
      <Route path="/account" element={<AccountSettings />} /> {/* ✅ This was erroring */}
    </Routes>
  );
};

export default App;
