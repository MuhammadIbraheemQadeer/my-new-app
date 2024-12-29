import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {

  const user = {
    username: 'ibraheem',
    name: 'Muhammad Ibraheem',
    email: 'ibraheem@example.com',
    phone: '+92 3xx xxxxxxx',
    profilePicture: 'https://lh3.googleusercontent.com/a/ACg8ocKJ_GiGdOJCpexrg4FxF0fhSYfVVrj_zoobywvZqrjyWelafFiL=s288-c-no',
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          className="profile-picture"
          src={user.profilePicture}
          alt={user.name}
        />
        <h1>{user.name}</h1>
        <p><span>Username:</span> {user.username}</p>
        <p><span>Email: </span>{user.email}</p>
        <p><span>Phone: </span> {user.phone}</p>
      </div>
      
    </div>
  );
};

export default UserProfile;
