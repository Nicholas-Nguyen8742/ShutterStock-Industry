import './HomePage.scss';
import React from 'react';
import UserStats from '../../components/UserStats/UserStats';
import CreativeCloud from '../../assets/images/CreativeCloud.jpg';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Earnings from '../../components/Earnings/Earnings';
import map from '../../assets/images/map.png';
import bridge from '../../assets/images/BrooklynBridge.png';
import brooklyn from '../../assets/images/Brooklyn.jpg';

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
                <article className='downloads'>
                    <div className='downloads-left'>
                        <h4 className='downloads-left__title'>Latest Downloads</h4>
                        <img className='downloads-left__map' src={map}></img>
                    </div>
                    <div className='downloads-right'>
                        <div className='downloads-right__headers'>
                            <p className='downloads-right__header'></p>
                            <p className='downloads-right__header'>Location</p>
                            <p className='downloads-right__header'>Comments</p>
                            <p className='downloads-right__header'>Earnings</p>
                        </div>
                        <div className='downloads-right__rows'>
                            <img className='downloads-right__img' src={bridge}></img>
                            <p className='downloads-right__row'>Brooklyn, USA</p>
                            <p className='downloads-right__row'>1800</p>
                            <p className='downloads-right__row'>$19.75</p>
                        </div>
                        <div className='downloads-right__rows'>
                            <img className='downloads-right__img' src={brooklyn}></img>
                            <p className='downloads-right__row'>Brooklyn, USA</p>
                            <p className='downloads-right__row'>650</p>
                            <p className='downloads-right__row'>$19.75</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

export default HomePage;