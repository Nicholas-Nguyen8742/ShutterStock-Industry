import './HomePage.scss';
import React from 'react';
import UserStats from '../../components/UserStats/UserStats';
import CreativeCloud from '../../assets/images/CreativeCloud.jpg';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Earnings from '../../components/Earnings/Earnings';

function HomePage() {
    return (
        <main className='UserPage'>
            <div className='UserPage-Left'> 
                <button className='upload'>Upload content</button>
                <UserStats />
                <img className="adobe" src={CreativeCloud} alt="Advertisement for Adobe Studios"></img>
            </div>
            <div className='UserPage-Right'>
                <ProfileCard />
                <Earnings />
                <article>

                </article>
            </div>
        </main>
    );
}

export default HomePage;