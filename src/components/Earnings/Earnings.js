import "./Earnings.scss";
import React from 'react';

function Earnings() {
    return (
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
    );
}

export default Earnings;