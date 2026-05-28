"use strict";

// import necessary SVG Files

import { openSourceSvg } from './svg.js';
import { researchWorkSvg } from './svg.js';
import { publicSpeakingSvg } from './svg.js';
import { interpersonalSvg } from './svg.js';

const breakPosition = {
	'0': 'top',
	'1': 'bottom'
};

const trendCardsDetails = [
	{
		backgroundCover: 'assets/Images/index/ml.jpg',
		displayName: 'Foundation Classes'
	},
	{
		backgroundCover: 'assets/Images/index/cloud1.jpg',
		displayName: 'Expert Mentors'
	},
	{
		backgroundCover: 'assets/Images/index/program.jpg',
		displayName: 'Skill Workshops'
	},
	{
		backgroundCover: 'assets/Images/index/IOT1.jpg',
		displayName: 'Smart Classrooms'
	},
	{
		backgroundCover: 'assets/Images/index/cs3.jpg',
		displayName: 'Mock Test Series'
	},
	{
		backgroundCover: 'assets/Images/index/robot1.jpg',
		displayName: 'Success Stories'
	}
];

const initiativesDetails = [
	{
		mainHeading: 'Teaching',
		subHeading: 'Support',
		description: `We provide structured classroom teaching with concept-based lessons, chapter-wise practice, and regular revision to build strong academic fundamentals.`,
		classFix: '',
		svg: openSourceSvg
	},
	{
		mainHeading: 'Workshops',
		subHeading: 'Seminars',
		description: `Interactive workshops and seminars help students strengthen communication, problem-solving, and exam strategy through practical learning activities.`,
		classFix: '',
		svg: researchWorkSvg
	},
	{
		mainHeading: 'One-to-One',
		subHeading: 'Sessions',
		description: `Personalized one-to-one mentoring helps students clear doubts faster, improve weak topics, and stay on track with focused guidance and feedback.`,
		classFix: 'fix-touch',
		svg: publicSpeakingSvg
	},
	{
		mainHeading: 'Free materials',
		subHeading: 'Study',
		description: `Students receive curated notes, assignments, practice sheets, and mock papers designed to improve subject mastery and exam readiness.`,
		classFix: 'fix-touch',
		svg: interpersonalSvg
	}
];

const generateTrendsCard = (cardDetails, position) => {
	const { backgroundCover, displayName } = cardDetails;

	const trendCard = `<div class="ih-item circle effect">
					<a>
						<div class="img">
							<img src=${backgroundCover} alt=${displayName} aria-label=${displayName} />
						</div>
						<div class="info">
							<div class="info-back">
								<h3>${displayName}</h3>
							</div>
						</div>
					</a>
                </div>`;

	let injectionSection = document.getElementById(`trends-${position}`);

	injectionSection.innerHTML += trendCard;
};

const injectTrendsCards = () => {
	trendCardsDetails.forEach((trendCard, index) => {
		const breakPoint = Math.floor(index / 3);
		generateTrendsCard(trendCard, breakPosition[breakPoint]);
	});
};


const generateInitiavesCard = (initiativeDetail, position) => {
	const { mainHeading, subHeading, description, classFix, svg } = initiativeDetail;
	const initiativeCard = `<div class="flip-card ${classFix}">
						<div class="flip-card-content">
							<div class="flip-card-front">
								<h5 class="flip-card-head">
								${mainHeading}<span>${subHeading}
								</span>
								</h5>
								<div class="flip-card-img">
									${svg}
								</div>
							</div>
							<div class="flip-card-back">
								<p class="flip-card-detail">
									${description}
								</p>
							</div>
						</div>
					</div>`;
	
	const injectionPoint = document.getElementById(`initiatives-${position}`);
	injectionPoint.innerHTML += initiativeCard;
}

const injectInitiavesCards = () => {
	initiativesDetails.forEach((initiativeDetail, index) => {
		if (index < 2)
			generateInitiavesCard(initiativeDetail, 'upper');
		else
			generateInitiavesCard(initiativeDetail, 'lower');
	});
}

injectTrendsCards;

