import UserData from './Components/UserData'
import Statistics from './Components/Statistics'
import Messages from './Components/Messages'
import './Components/dashboard.css';


function App() {

  const user1={
    name:"Muhammad Ibraheem",
    email:"24g-bcs552@student.agu.edu.pk",
    role:"Computer Scientist",
    profilePic: "https://lh3.googleusercontent.com/a/ACg8ocKJ_GiGdOJCpexrg4FxF0fhSYfVVrj_zoobywvZqrjyWelafFiL=s288-c-no",
    pro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWyTI301LWNJvvp-RtzdCUZ6PAUOP8OzkCQ&s"
  }

  const stat={
     totalusers: 1234,
     activeusers: 1010,
     newSignUps:1000,
     activepercentage:(1010/1234) * 100
  }

  const mess={
    m1:"Hello, Welcome to your Dashboard! Explore the latest insights.",
    m2:"New updates are available. Check out the new features.",
    m3:"Remember to complete your profile setup to unlock all features."
  }

  return (
    <div className="app-container">
      <div className="user-data">
        <UserData userData={user1} />
      </div>


      <div className="other-components">
        <div className="component-box">
          <Statistics stats={stat} />
        </div>
        <div className="component-box">
          <Messages message={mess} />
        </div>
      </div>
    </div>
  );
}

export default App;
