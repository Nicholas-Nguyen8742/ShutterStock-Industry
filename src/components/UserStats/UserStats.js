import './UserStats.scss';
import React from 'react';

function UserStats() {
    return (
        <article className='userstats'>
            <ul className='userstats__list'>
                <li className='userstats__item userstats__item-active'>Images</li>
                <li className='userstats__item userstats__item-inactive'>Videos</li>
            </ul>
            <div className='userstats__statslist'>
                <p className='userstats__link'>Not Yet Submitted</p><span className='userstats__stat'>0</span>
                <p className='userstats__link'>Pending Approval</p><span className='userstats__stat'>0</span>
                <p className='userstats__link'>Recently Reviewed</p><span className='userstats__stat'>0</span>
                <p className='userstats__link'>Image Portfolio</p><span className='userstats__stat'>0</span>
            </div>
        </article>
    );
}

export default UserStats;