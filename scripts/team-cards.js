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
		name: 'Er. Sagar Mallik',
		position: 'The Board',
		role: 'CEO',
		description: 'PhD (Plug-in Hybrid Electric Vehicle) at National Institute of Technology Agartala',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/er-sagar-mallik-564564213/'
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
		name: 'Anirban Sutradhar',
		position: 'Technical Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
				
			}
		]
	},
	{
		name: 'Er. Sagar Mallik',
		position: 'Faculties Team',
		role: 'Electrical Engineering',
		description: 'PhD (Plug-in Hybrid Electric Vehicle) at NIT Agartala',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/er-sagar-mallik-564564213/'
			}
		]
	},
	{
		name: 'Priyas Banik',
		position: 'Faculties Team',
		role: 'Mathematics',
		description: 'B.Tech 2nd Year',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#'
			}
		]
	},
	{
		name: 'Amit Datta',
		position: 'Faculties Team',
		role: 'Chemistry',
		description: 'BSc & MSc (Chemistry)',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#'
			}
		]
	},
	{
		name: 'Punam Das',
		position: 'Faculties Team',
		role: 'Electrical Engineering (B.tech and M.Tech)',
		description: 'Ph.D Scholar at NIT Agartala',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: 'https://www.linkedin.com/in/punam-das-06bb58354/'
			}
		]
	},
	{
		name: 'Pritam Banik',
		position: 'Faculties Team',
		role: 'Computer Network, Software Engineer, Internet of Things',
		description: 'B.Tech in Computer Science',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#'
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
		Faculties_Team: 'facalities',
		Creatives_Team: 'facalities',
		Management_Team: 'facalities'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles, role, description } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);
	const tagsHtml = generateTagPills(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
		<span slot="header">${name}</span>
		<span slot="role">${role || position}</span>
		<span slot="description">${description || ''}</span>
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
