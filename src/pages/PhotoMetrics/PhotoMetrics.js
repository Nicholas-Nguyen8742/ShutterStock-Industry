import './PhotoMetrics.scss';
import React from 'react';
import personImage from '../../assets/images/stock-photo-portrait-of-happy-young-asian-teenager-smiling-in-front-of-camera-2109768044.jpg';

function PhotoMetrics() {
    return (
        <main className='photometrics'>
            <div className="photometrics__buttons-container">
                <div>
                    <button type="button" class="btn btn-default btn-sm photometrics__likes">
                        <span class="glyphicon glyphicon-heart-empty"></span> 900,301 likes
                    </button>
                </div>
                <div className="photometrics__buttons">
                    <button type="button" className="btn btn-default btn-sm photometrics__try">
                        <span className="glyphicon glyphicon-download-alt"></span> Try
                    </button>
                    <button type="button" className="btn btn-default btn-sm photometrics__share">
                        <span className="glyphicon glyphicon-share"></span> Share
                    </button>
                    <button className='photometrics__redownload'>Redownload</button>
                </div>
            </div>
            <div className="photometrics__background">
                <img 
                    src={personImage}
                    className="photometrics__image"
                    alt=" "
                />
            </div>
            <div className="photometrics__caption-container">
                <span>
                    Royalty-free stock photo ID: 2109768044
                    <span class="glyphicon glyphicon-book photometrics__book"></span>
                </span>
                <button type="button" class="btn btn-default btn-sm photometrics__downloads">
                    <span class="glyphicon glyphicon-cloud-download"></span> 756,021 downloads 
                </button>
            </div>
            <div className="photometrics__text-container">
                <div className="photometrics__details">
                    <span className="photometrics__id">Item ID: 2109768044</span>
                    <span className="photometrics__address">New York, Brooklyn bridge at nigth, USA</span>
                </div>
                <div className="photometrics__details">
                    <span className="photometrics__title">Formats</span>
                    <span className="photometrics__measurement">8685 x 5717 pixels . 29 x 19.1 in . DPI 300 . JPG</span>
                </div>
                <div className="photometrics__contributor photometrics__details">
                    <span className="photometrics__title">Contributor</span>
                        <div>
                            <img
                                className="photometrics__profile" 
                                src={personImage}
                                alt=" "
                            />
                            <span>Jacky</span>
                        </div>
                </div>
            </div>
        </main>
    );
}

export default PhotoMetrics;