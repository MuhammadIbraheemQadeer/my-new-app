import { useParams } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { username } = useParams();

  const user = {
    username: 'ibraheem',
    name: 'Muhammad Ibraheem',
    email: 'ibraheem@example.com',
    profilePicture: 'https://lh3.googleusercontent.com/a/ACg8ocKJ_GiGdOJCpexrg4FxF0fhSYfVVrj_zoobywvZqrjyWelafFiL=s288-c-no',
  };

  if (username !== user.username) {
    return <p>User not found!</p>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          className="profile-picture"
          src={user.profilePicture}
          alt={user.name}
        />
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
        <p><span>Email: </span>{user.email}</p>
      </div>
      
    </div>
  );
};

export default UserProfile;
