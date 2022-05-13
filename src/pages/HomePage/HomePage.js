import './HomePage.scss';
import React from 'react';
import UserStats from '../../components/UserStats/UserStats';
import CreativeAd from '../../assets/images/CreativeAd.svg';
import Stephanie from '../../assets/images/Stephanie.svg';

function HomePage() {
    return (
        <main className='UserPage'>
            <div className='UserPage-Left'> 
                <button className='upload'>Upload content</button>
                <UserStats />
                <img className="advertisment" src={CreativeAd} alt="Advertisement for Adobe Studios"></img>
            </div>
            <div className='UserPage-Right'>
                <article className='profilecard'>
                    <div  className='profilecard-left' >
                        <img className='profilecard__avatar' src={Stephanie} alt="Profile pic"></img>
                        <p className='profilecard__body'>Hi, Stephanie</p>
                    </div>
                    <div className='profilecard-right' >
                        <p className='profilecard-right__body'>90% of profile strength</p>
                        <progress className='profilecard-right__progress' value="90" max="100"></progress>
                        <p className='profilecard-right__body'>Increase your discovery &gt; add your <span className=''>social media accounts</span></p>
                    </div>
                </article>
                <article className="earnings">
                    <div className="earnings-left">
                        <h4 className="earnings-left__title">Unpaid Earnings*</h4>
                        <h3 className="earnings-left__amount">$2,633.97</h3>
                        <p className="earnings-left__body">*Updated approximately every 15 minutes</p>
                    </div>
                    <div className="earnings-right">
                        <p className="earnings-right__body">Payments are calculated at the end of every month for contributors who meet their minimum payout amount</p>
                        <p className="earnings__link">Learn More</p>
                    </div>

                </article>
                <article>

                </article>
            </div>
        </main>
    );
}

export default HomePage;