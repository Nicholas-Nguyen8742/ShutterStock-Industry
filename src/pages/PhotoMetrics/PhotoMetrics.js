import "./PhotoMetrics.scss";
import React from "react";
import personImage from "../../assets/images/stock-photo-portrait-of-happy-young-asian-teenager-smiling-in-front-of-camera-2109768044.jpg";
import bridgeImage from "../../assets/images/brooklyn_bridge.jpg";
import commentsImage from "../../assets/images/comments.PNG";
import insightsImage from "../../assets/images/insights.PNG";
import licenseImage from "../../assets/images/license.PNG";

function PhotoMetrics() {
	return (
		<main className="photometrics">
			<div className="side__scroll">
				<div className="photometrics__buttons-container">
					<div>
						<button
							type="button"
							className="btn btn-default btn-sm photometrics__likes"
						>
							<span className="glyphicon glyphicon-heart-empty"></span> 900,301
							likes
						</button>
					</div>
					<div className="photometrics__buttons">
						<button
							type="button"
							className="btn btn-default btn-sm photometrics__try"
						>
							<span className="glyphicon glyphicon-download-alt"></span> Try
						</button>
						<button
							type="button"
							className="btn btn-default btn-sm photometrics__share"
						>
							<span className="glyphicon glyphicon-share"></span> Share
						</button>
						<button className="photometrics__redownload">Redownload</button>
					</div>
				</div>
				<div className="photometrics__background">
					<img src={personImage} className="photometrics__image" alt=" " />
				</div>
				<div className="photometrics__caption-container">
					<span>
						Royalty-free stock photo ID: 2109768044
						<span className="glyphicon glyphicon-book photometrics__book"></span>
					</span>
					<button
						type="button"
						className="btn btn-default btn-sm photometrics__downloads"
					>
						<span className="glyphicon glyphicon-cloud-download"></span> 756,021
						downloads
					</button>
				</div>
				<div className="photometrics__text-container">
					<div className="photometrics__details">
						<span className="photometrics__id">Item ID: 2109768044</span>
						<span className="photometrics__address">
							New York, Brooklyn bridge at nigth, USA
						</span>
					</div>
					<div className="photometrics__details">
						<span className="photometrics__title">Formats</span>
						<span className="photometrics__measurement">
							8685 x 5717 pixels . 29 x 19.1 in . DPI 300 . JPG
						</span>
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
			</div>

			<div className="icons">
				<img 
					src={commentsImage}
					className="icons--sizing icons--active"
					alt=" "
				/>
				<img 
					src={insightsImage}
					className="icons--sizing"
					alt=" "
				/>
				<img 
					src={licenseImage}
					className="icons--sizing"
					alt=" "
				/>
			</div>

			<div className="side-bar">
				<div className="side-bar__icons"></div>
				<div className="side-bar__comments-container">
					<div className="side-bar__text">
						<span className="side-bar__name">Maria Becky</span>
						<span className="side-bar__date">January 2, 2021</span>
					</div>
					<span>I love this photo. I used it for my hackathon project.</span>
					<img className="side-bar__image" src={bridgeImage} alt=" "/>
					<div className="side-bar__text">
						<span className="side-bar__name">Taylor</span>
						<span className="side-bar__date">Nov 30, 2021</span>
					</div>
					<span>
						It was raining during our wedding photos so we had to swap out the
						background.
					</span>
					<img className="side-bar__image" src={bridgeImage} alt=" " />
					<div className="side-bar__text">
						<span className="side-bar__name">Jasmin N.</span>
						<span className="side-bar__date">May 10, 2022</span>
					</div>
					<span>
						I'm a social media influencer. The bridge is a rarely empty so I
						just used a stock image for my post.
					</span>
					<img className="side-bar__image" src={bridgeImage} alt=" " />
					<div className="side-bar__text">
						<span className="side-bar__name">Jason</span>
						<span className="side-bar__date">May 12, 2022</span>
					</div>
					<button type="button" class="btn btn-default btn-sm side-bar__play">
						<span className="glyphicon glyphicon-play"></span> Audio Comment
					</button>
					<div className="side-bar__link-container">
						<span className="side-bar__show-transcript">Show transcript</span>
						<span className="side-bar__see-comments">See more comments</span>
					</div>
				</div>
			</div>
		</main>
	);
}

export default PhotoMetrics;
