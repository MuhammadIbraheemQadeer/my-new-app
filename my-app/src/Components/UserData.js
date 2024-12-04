import React from 'react';
import './dashboard.css'

function UserData({userData}){
    return(
<div>
    <div className='parent'>
    <div className='usr'>
        <h2>My Info</h2>
        <img src={userData.profilePic} alt='pro'/>
        <h2> {userData.name}</h2>
        <h4 className='email'> {userData.email}</h4>
        <h4 className='role'> {userData.role}</h4>
        <img src={userData.pro} className='pro' />

    </div>
    </div>
</div>
    )
    }
    export default UserData;



