'use strict';

const favClassesDataSet = {
	linkedIn: 'fa fa-linkedin',
	twitter: 'fa fa-twitter',
	github: 'fa fa-github',
	facebook: 'fa fa-facebook',
	website: 'fa fa-globe'
};

const mapProfileLinksToFavClasses = profileName => {
	return favClassesDataSet[profileName];
};

const teamDetails = [
	{
		name: 'SHIVAM KUMAR',
		position: 'The Board',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
				twitter: '#!'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'The Board',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
				twitter: '#!'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'The Board',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
				twitter: '#!'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'The Board',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
				twitter: '#!'
			}
		]
	},
	{
		name: 'Sibashish Biswas',
		position: 'Technical Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/sibashish-biswas/',
				github: 'https://github.com/sibashish99',
				website: 'https://sibashish99.github.io/'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Creatives Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Creatives Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Creatives Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Management Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Management Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Management Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	},
	{
		name: 'SHIVAM KUMAR',
		position: 'Management Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#'
			}
		]
	}
];

const generateProfileLinks = profileObject => {
	let result = [];
	for (let profile in profileObject) {
		const classtoAdd = mapProfileLinksToFavClasses(profile);
		const listItem = `
							<a href="${profileObject[profile]}" target="_blank">
                <i class="${classtoAdd}"></i>
              </a>`;
		result.push(listItem);
	}
	return result.join(' ');
};

const toTagLabel = socialKey => {
	const mappingSet = {
		linkedIn: 'Network',
		twitter: 'Engaging',
		github: 'Technical',
		facebook: 'Community',
		website: 'Portfolio'
	};

	return mappingSet[socialKey] || 'Team';
};

const generateTagPills = profileObject => {
	return Object.keys(profileObject)
		.slice(0, 2)
		.map(profileName => `<span class="team-tag">${toTagLabel(profileName)}</span>`)
		.join(' ');
};

const mapPositionToHtmlId = position => {
	const mappingSet = {
		The_Board: 'board',
		Technical_Team: 'technical',
		Creatives_Team: 'facalities',
		Management_Team: 'facalities'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);
	const tagsHtml = generateTagPills(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
		<span slot="header">${name}</span>
		<span slot="role">${position}</span>
		<span slot="tags">${tagsHtml}</span>
		<span slot="content">${getProfilesLinksDynamic}</span>
  </card>`;

	const mappingID = position.replace(' ', '_');

	const injectingPoint = document.getElementById(mapPositionToHtmlId(mappingID));
	injectingPoint.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamDetails.forEach(teamMember => {
		generateCards(teamMember);
	});
};

injectCardsToPage();
