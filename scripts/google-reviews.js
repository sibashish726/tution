'use strict';

(function () {
	const summaryElement = document.getElementById('googleReviewsSummary');
	const stateElement = document.getElementById('googleReviewsState');
	const listElement = document.getElementById('googleReviewsList');

	if (!summaryElement || !stateElement || !listElement) {
		return;
	}

	const summaryData = {
		overallRating: 4.7,
		totalRatings: 11,
		metrics: []
	};

	const staticReviews = [
		{
			author_name: 'Sneharika Debnath',
			review_count: '4 reviews',
			relative_time_description: 'a year ago',
			rating: 5,
			text:
				'Student-friendly and compassionate teacher with many years of experience. Encouraged students. The teaching style is unique, which has also helped me improve my arithmetic and physics. Sir motivates me to work hard and avoid any other means like cheating to get good grades. Thank you for your support.',
			owner_response: 'Owner response 10 months ago: <3'
		},
		{
			author_name: 'Anirban Sutradhar',
			review_count: '2 reviews',
			relative_time_description: 'a year ago',
			rating: 5,
			text: 'Very good faculties and their teaching process are also very good.',
			owner_response: 'Owner response a year ago: <3'
		},
		{
			author_name: 'Subha Deep',
			review_count: '2 reviews',
			relative_time_description: 'a year ago',
			rating: 5,
			text: 'Great room quality.',
			owner_response: 'Owner response 10 months ago: Yes now updated.'
		},
		{
			author_name: 'Agnik Roy',
			review_count: '5 reviews - 4 photos',
			relative_time_description: 'a year ago',
			rating: 5,
			text: 'Very nice.',
			owner_response: 'Owner response 10 months ago: <3'
		},
		{
			author_name: 'Ishan Das',
			review_count: '',
			relative_time_description: '2 months ago',
			rating: 5,
			text: '',
			owner_response: ''
		},
		{
			author_name: 'Nishankar Debnath',
			review_count: '3 reviews - 3 photos',
			relative_time_description: '9 months ago',
			rating: 5,
			text: '',
			owner_response: 'Owner response 9 months ago: <3'
		},
		{
			author_name: 'Gourab',
			review_count: '1 review - 1 photo',
			relative_time_description: '10 months ago',
			rating: 5,
			text: '',
			owner_response: 'Owner response 10 months ago: <3'
		},
		{
			author_name: 'PRITAM BANIK',
			review_count: '1 review - 8 photos',
			relative_time_description: 'a year ago',
			rating: 5,
			text: '',
			owner_response: 'Owner response 10 months ago: <3'
		},
		{
			author_name: 'Bapan Biswas',
			review_count: '4 photos',
			relative_time_description: 'Edited a year ago',
			rating: 5,
			text: '',
			owner_response: ''
		},
		{
			author_name: 'Akash Das',
			review_count: '',
			relative_time_description: 'a year ago',
			rating: 5,
			text: '',
			owner_response: 'Owner response 10 months ago: <3'
		},
		{
			author_name: 'Subhadeep Saha',
			review_count: '2 reviews',
			relative_time_description: 'a year ago',
			rating: 5,
			text: '',
			owner_response: 'Owner response 10 months ago: <3'
		}
	];

	const setState = message => {
		stateElement.textContent = message;
	};

	const createStars = rating => {
		const wrapper = document.createElement('div');
		wrapper.className = 'google-review-stars';

		const safeRating = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
		for (let i = 0; i < 5; i += 1) {
			const star = document.createElement('span');
			star.textContent = i < safeRating ? '★' : '☆';
			wrapper.appendChild(star);
		}

		return wrapper;
	};

	const renderSummary = () => {
		const summaryCard = document.createElement('article');
		summaryCard.className = 'google-summary-card';

		const heading = document.createElement('h4');
		heading.className = 'google-summary-heading';
		heading.textContent = 'Google Maps Reviews and Ratings';

		const scoreWrap = document.createElement('div');
		scoreWrap.className = 'google-summary-score-wrap';

		const score = document.createElement('p');
		score.className = 'google-summary-score';
		score.textContent = String(summaryData.overallRating).replace('.', ',');

		const scoreMeta = document.createElement('div');
		scoreMeta.className = 'google-summary-score-meta';

		const stars = createStars(summaryData.overallRating);
		stars.classList.add('google-summary-stars');

		const basedOn = document.createElement('p');
		basedOn.className = 'google-summary-based';
		basedOn.textContent = `Based on ${summaryData.totalRatings} ratings`;

		scoreMeta.appendChild(stars);
		scoreMeta.appendChild(basedOn);
		scoreWrap.appendChild(score);
		scoreWrap.appendChild(scoreMeta);

		summaryCard.appendChild(heading);
		summaryCard.appendChild(scoreWrap);

		summaryElement.innerHTML = '';
		summaryElement.appendChild(summaryCard);
	};

	const avatarColors = ['#a78bfa', '#818cf8', '#c084fc', '#60a5fa', '#34d399', '#f472b6'];

	const getInitials = name => {
		const parts = name.trim().split(' ');
		return parts.length >= 2
			? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
			: name.slice(0, 2).toUpperCase();
	};

	const renderReviews = reviews => {
		listElement.innerHTML = '';

		const quoteText = document.getElementById('testiQuoteText');
		const quoteAuthor = document.getElementById('testiQuoteAuthor');
		let activeIdx = 0;
		let autoTimer;

		const ITEM_H = 90;
		const VIEWPORT_H = 270;

		const track = document.createElement('div');
		track.className = 'testi-list-track';

		const setActive = idx => {
			activeIdx = idx;
			const items = track.querySelectorAll('.testi-reviewer-item');
			items.forEach((item, i) => {
				item.classList.remove('active', 'prev', 'next');
				if (i === idx) item.classList.add('active');
				else if (i === idx - 1) item.classList.add('prev');
				else if (i === idx + 1) item.classList.add('next');
			});
			// translate track to center active item in the viewport
			const offset = -(idx * ITEM_H) + (VIEWPORT_H / 2) - (ITEM_H / 2);
			track.style.transform = 'translateY(' + offset + 'px)';

			const rev = reviews[idx];
			if (quoteText) {
				quoteText.classList.add('fade-out');
				setTimeout(function () {
					quoteText.textContent = rev.text || '★★★★★ Rated MindSpark 5 stars.';
					quoteText.classList.remove('fade-out');
				}, 280);
			}
			if (quoteAuthor) quoteAuthor.textContent = rev.author_name + '  ·  ' + rev.relative_time_description;
		};

		const startAuto = () => {
			autoTimer = setInterval(function () {
				setActive((activeIdx + 1) % reviews.length);
			}, 3500);
		};

		reviews.forEach((review, idx) => {
			const item = document.createElement('div');
			item.className = 'testi-reviewer-item';

			const avatarWrap = document.createElement('div');
			avatarWrap.className = 'testi-avatar-wrap';

			const avatar = document.createElement('div');
			avatar.className = 'testi-reviewer-avatar';
			avatar.textContent = getInitials(review.author_name);
			avatar.style.background = avatarColors[idx % avatarColors.length];

			avatarWrap.appendChild(avatar);

			const info = document.createElement('div');
			info.className = 'testi-reviewer-info';

			const name = document.createElement('p');
			name.className = 'testi-reviewer-name';
			name.textContent = review.author_name;

			const meta = document.createElement('p');
			meta.className = 'testi-reviewer-meta';
			const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
			meta.textContent = stars + '  ' + review.relative_time_description;

			info.appendChild(name);
			info.appendChild(meta);
			item.appendChild(avatarWrap);
			item.appendChild(info);

			item.addEventListener('click', function () {
				clearInterval(autoTimer);
				setActive(idx);
				startAuto();
			});

			track.appendChild(item);
		});

		listElement.appendChild(track);
		setActive(0);
		startAuto();
	};

	renderSummary();
	renderReviews(staticReviews);
	setState('');
})();
