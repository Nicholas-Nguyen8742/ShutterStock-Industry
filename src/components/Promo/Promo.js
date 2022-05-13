import './Promo.scss';
import React from 'react';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';

function Promo() {
    return (
        <article className='promo'>
            <p className='promo__tagline'>Promote your portfolio and earn up to $200 for every new customer you refer. </p>
            <div className='promo__socials'> 
                <img className='promo__logo' src={facebook} alt="facebook logo" />
                <img className='promo__logo' src={twitter} alt="twitter logo" />
            </div>
            <button className='promo__cta'>Copy Referral Link</button>
        </article>
    );
}

export default Promo;