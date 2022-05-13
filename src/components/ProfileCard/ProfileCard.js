import './ProfileCard.scss';
import React from 'react';
import Stephanie from '../../assets/images/Stephanie.svg';

function ProfileCard() {
    return (
        <article className='profilecard'>
            <div className='profilecard-left' >
                <img className='profilecard__avatar' src={Stephanie} alt="Profile pic"></img>
                <p className='profilecard__body'>Hi, Stephanie</p>
            </div>
            <div className='profilecard-right' >
                <p className='profilecard-right__body'>90% of profile strength</p>
                <progress className='profilecard-right__progress' value="90" max="100"></progress>
                <p className='profilecard-right__body'>Increase your discovery &gt; add your <span className=''>social media accounts</span></p>
            </div>
        </article>
    );
}

export default ProfileCard;