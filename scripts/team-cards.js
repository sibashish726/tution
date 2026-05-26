'use strict';

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook'
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
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
		name: 'SHIVAM KUMAR',
		position: 'Creatives Team',
		image: 'default_member.png',
		profiles: [
			{
				linkedIn: '#',
				github: '#',
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
				github: '#',
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
				github: '#',
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
				github: '#',
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
				github: '#',
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
				github: '#',
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
				github: '#',
			}
		]	
	}
];

const generateProfileLinks = profileObject => {
	let result = [];
	for (let profile in profileObject) {
		const classtoAdd = mapProfileLinksToFavClasses(profile);
		const listItem = `
              <a href="${profileObject[profile]}" target="__blank">
                <i class="${classtoAdd}"></i>
              </a>`;
		result.push(listItem);
	}
	return result.join(' ');
};

const mapPositionToHtmlId = position => {
	const mappingSet = {
		The_Board: 'board',
		Technical_Team: 'technical',
		Creatives_Team: 'creatives',
		Management_Team: 'management'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
    <h1 slot="header">${name}</h1>
    <p slot="content">
        ${getProfilesLinksDynamic}
        <br><br>
        <span>${position}</span>
    </p>
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
