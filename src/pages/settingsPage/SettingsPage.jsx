import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import './settingsPage.scss';
import UserContext from '../../components/context';

const SettingsPage = () => {

  const {user, changeEmail, changeAvatar, changeName, changeDescription, signOut} = useContext(UserContext);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newAvatar, setNewAvatar] = useState(user.avatar || '');
  const [newName, setNewName] = useState(user.name || '');
  const [newDesc, setNewDesc] = useState(user.description || '');

  const emailInputChangeHandler = (e) => {
    setNewEmail(e.target.value)
  };
  
  const avatarInputChangeHandler = (e) => {
    setNewAvatar(e.target.value)
  };

  const nameInputChangeHandler = (e) => {
    setNewName(e.target.value)
  };

  const descInputChangeHandler = (e) => {
    setNewDesc(e.target.value)
  };
  return (
    <div className='settings'>
      <div className="settings__form">
        <div className="back"><Link to="/">Back</Link></div>
        <div className="settings__title">Settings</div>
          <form className="form">
                <label>
                    <div className="form__title">Email address</div>
                    <input 
                        type="text" 
                        name="email"
                        value={newEmail}
                        onChange={emailInputChangeHandler}
                        className="inputs"
                    />
                </label>
                <button  
                  type="submit" 
                  onClick={(e) => {e.preventDefault(); changeEmail(newEmail)}}
                  className="btn">Save</button>
          </form>
          <form className="form">
                <label>
                    <div className="form__title">Avatar</div>
                    <input 
                        type="text" 
                        name="avatar"
                        value={newAvatar}
                        onChange={avatarInputChangeHandler}
                        className="inputs"
                    />
                </label>
                <button 
                  type="submit" 
                  onClick={(e) => {e.preventDefault(); changeAvatar(newAvatar)}}
                  className="btn"
                  >Save</button>
          </form>
          <form className="form">
                <label>
                    <div className="form__title">Name</div>
                    <input 
                        type="text" 
                        name="name"
                        value={newName}
                        onChange={nameInputChangeHandler}
                        className="inputs"
                    />
                </label>
                <button 
                  type="submit" 
                  onClick={(e) => {e.preventDefault(); changeName(newName)}}
                  className="btn"
                >Save</button>
          </form>
          <form className="form">
                <label>
                    <div className="form__title">Description</div>
                    <textarea 
                        name="name"
                        value={newDesc}
                        onChange={descInputChangeHandler}
                        className="inputs"
                    />
                </label>
                <button  
                  type="submit" 
                  onClick={(e) => {e.preventDefault(); changeDescription(newDesc)}}
                  className="btn">Save</button>
                <button onClick={signOut} className="btn out">Sign out</button>
          </form>
      </div>
    </div>
  )
}

export default SettingsPage;