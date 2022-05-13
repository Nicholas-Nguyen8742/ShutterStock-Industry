import './HomePage.scss';
import React from 'react';
import UserStats from '../../components/UserStats/UserStats';
import CreativeAd from '../../assets/images/CreativeAd.svg';

function HomePage() {
    return (
        <main className='UserPage'>
            <div className='UserPage-Left'> 
                <button className='upload'>Upload content</button>
                <UserStats />
                <img className="advertisment" src={CreativeAd} alt="Advertisement for Adobe Studios" />
            </div>
        </main>
    );
}

export default HomePage;