import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/registrationPage';
import ProfilePage from './pages/profilePage';
import SettingsPage from './pages/settingsPage';
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";
import PostCreationPage from "./pages/PostCreationPage";

import UserContext from './components/context';

const Router = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    localStorage.removeItem('User');
  }
  return (
    <BrowserRouter>
      <Routes>
        {
          user ?
            <>
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<ProfilePage />} />
            </>
            :
            <Route path="*" element={<RegistrationPage />} />
        }
        {/* <Route path="/" element={<FeedPage />} />
        <Route path="/postcreation" element={<PostCreationPage />} />
        <Route path="/posts/:postId" element={<PostPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;