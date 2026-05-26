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
		displayName: 'Donate to Us'
	},
	{
		backgroundCover: 'assets/Images/index/IoT1.jpg',
		displayName: 'Helping Hands'
	},
	{
		backgroundCover: 'assets/Images/index/program.jpg',
		displayName: 'Happy Volunteers'
	},
	{
		backgroundCover: 'assets/Images/index/cloud1.jpg',
		displayName: 'We care about children'
	},
	{
		backgroundCover: 'assets/Images/index/cs3.jpg',
		displayName: 'Free food for them'
	},
	{
		backgroundCover: 'assets/Images/index/robot1.jpg',
		displayName: 'Happy faces'
	}
];

const initiativesDetails = [
	{
		mainHeading: 'Teaching',
		subHeading: 'Students',
		description: `Our vision is to be the source for childhood learning on the internet available from anywhere and without charge. 
		             .`,
		classFix: '',
		svg: openSourceSvg
	},
	{
		mainHeading: 'Seminars',
		subHeading: 'Work',
		description: `Learning has to be fun! E-Learning for kids integrates gaming and learning to make our courseware more effective"`,
		classFix: '',
		svg: researchWorkSvg
	},
	{
		mainHeading: 'Free Food',
		subHeading: 'Food',
		description: `Nowadays, a vast amount of foods are free-from. Products such as bread, milk and pasta all have free-from varieties.`,
		classFix: 'fix-touch',
		svg: publicSpeakingSvg
	},
	{
		mainHeading: 'Free materials',
		subHeading: 'Study',
		description: `Interpersonal skills are the skills we use every day when we communicate and
					interact with other people, both individually and in groups.`,
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

injectInitiavesCards();
injectTrendsCards();

