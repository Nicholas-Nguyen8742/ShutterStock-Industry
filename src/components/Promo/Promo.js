import './Promo.scss';
import React from 'react';
import fbicon from '../../assets/images/facebook.png';
import tweet from '../../assets/images/twitter.png';

function Promo() {
    return (
        <article className='promo'>
            <p className='promo__tagline'>Promote your portfolio and earn up to $200 for every new customer you refer. </p>
            <div className='promo__socials'> 
                <img className='promo__logos' src={fbicon} alt="facebook logo"></img>
                <img className='promo__logos' src={tweet} alt="twitter logo"></img>
            </div>
            <button className='promo__cta'>Copy Referral Link</button>
        </article>
    );
}

export default Promo;