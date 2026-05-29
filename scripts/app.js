'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/logo/logo1.png" id="logo" ></a>
  <div id="myNav" class="fullScreen-navigation">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="navigation-content" id="smallnav">
          <a class="active home" href="index.html">HOME</a>
          <a href="team.html">OUR TEAM</a>
		  <a href="blogs.html">BLOGS</a>
		  <a href="contactUs.html">CONTACT US</a>
		  <a href="contactUs.html" class="nav-cta-mobile">Get started</a>
        </div>
  </div>

	  <span class="navbar-toggler-icon navbar-toggler" onclick="openNav()"></span>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item">
		  <a class="nav-link active home"  href="index.html"><span>HOME</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="team.html"><span>OUR TEAM</span></a>
		</li>
		  <li class="nav-item">
			<a class="nav-link" href="blogs.html"><span>BLOGS</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="contactUs.html"><span>CONTACT US</span></a>
		</li>

	  </ul>
	<div class="header-actions">
		<a href="contactUs.html" class="nav-cta">Get started</a>
	</div>				
	 </div>	 
	</nav>`);

let footer = $(`
<div class="waves">
<svg viewBox="0 0 120 21">
<defs> 
   <filter id="goo">
	 <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
	 <feColorMatrix in="blur" mode="matrix" values="
		  1 0 0 0 0  
		  0 1 0 0 0  
		  0 0 1 0 0  
		  0 0 0 13 -9" result="goo" />
	 <xfeBlend in="SourceGraphic" in2="goo" />
   </filter>
	<path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
 </defs> 

	<use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
  <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>


 <g class="gooeff" filter="url(#goo)">
 <circle class="drop drop1" cx="20" cy="2" r="8.8"  />
 <circle class="drop drop2" cx="25" cy="2.5" r="7.5"  />
 <circle class="drop drop3" cx="16" cy="2.8" r="9.2"  />
 <circle class="drop drop4" cx="18" cy="2" r="8.8"  />
 <circle class="drop drop5" cx="22" cy="2.5" r="7.5"  />
 <circle class="drop drop6" cx="26" cy="2.8" r="9.2"  />
 <circle class="drop drop1" cx="5" cy="4.4" r="8.8"  />
 <circle class="drop drop2" cx="5" cy="4.1" r="7.5"  />
 <circle class="drop drop3" cx="8" cy="3.8" r="9.2"  />
 <circle class="drop drop4" cx="3" cy="4.4" r="8.8"  />
 <circle class="drop drop5" cx="7" cy="4.1" r="7.5"  />
 <circle class="drop drop6" cx="10" cy="4.3" r="9.2"  />
 
 <circle class="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
 <circle class="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
 <circle class="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
   <circle class="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
 <circle class="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
 <circle class="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
 <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
</g>  

</svg>
  </div>
<footer id="footer">
<div class="container">
  <div class="row">
	<div class="col-lg-6 col-md-4 footer-logo"> 
		<img data-src="assets/Images/logo/logoF.png" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" style="height:300px; width:300px">
	</div>
	<div class="col-lg-6 col-md-8 mb-5" id="footer-c">		
	  <br>
	  <div class="social-content">
		<div class="social-copy">
			<h3 class="footer-h social-title">Connect With Us</h3>
			<div class="border"></div>
			<p class="footer-p">Follow our social media for updates, stories, and community highlights.</p>
		</div>
		<div class="social-media" role="list" aria-label="Social media links">
		  <a class="fa fa-facebook" href="https://www.facebook.com/people/Mindspark/61563983436358/" target="_blank" rel="noopener" aria-label="Facebook"></a>
		  <a class="fa fa-instagram" href="https://www.instagram.com/_mind_spark__/" target="_blank" rel="noopener" aria-label="Instagram"></a>
		  <a class="fa fa-linkedin" href="#" aria-label="LinkedIn"></a>
		</div>
	  </div>
	</div>
  </div>
	<div class="footer-wordmark-wrap">
		<h1 class="footer-wordmark">Mindspark</h1>
	</div>
</div>		
</footer>
<a onclick="topBtnClick()" class="gotopbtn clr-wt" id="topBtn"> <i class="fa fa-chevron-up clr-wt"></i> </a>
`);

let goToTopbutton = $(`#topBtn`);

function scrollFunction() {
	let navBar = document.getElementById('navbar'),
		logo = document.getElementById('logo');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		navBar.style.padding = '2px 16px';
		logo.width = '160px';
	}
	let goTopBtn = document.getElementById('topBtn');
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		goTopBtn.style.opacity = 1;
		goTopBtn.style.visibility = 'visible';
	} else {
		goTopBtn.style.opacity = 0;
		goTopBtn.style.visibility = 'hidden';
	}
}

function activeTab() {
	let navBar = $('#navbarNav');
	let navItems = navBar[0].children[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		let childHref = navItems[i].children[0].pathname.toLowerCase();
		if ((childHref === pageName || childHref.includes(pageName)) && window.location.pathname !== '/') {
			navItems[i].children[0].classList.add('active');
			navItems[0].children[0].classList.remove('home');
		} else navItems[i].children[0].classList.remove('active');
	}
}

function activeSmallTab() {
	let navBar = $('#smallnav');
	let navItems = navBar[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		if (navItems[i].pathname) {
			let childHref = navItems[i].pathname.toLowerCase();
			if ((childHref === pageName || childHref.includes(pageName)) && window.location.pathname !== '/') {
				navItems[i].classList.add('active');
				navItems[0].classList.remove('home');
			} else navItems[i].classList.remove('active');
		}
	}
}

function changeTheme(value) {
	let docElement = document.documentElement;
	let checkElement = $('#theme')[0];

	docElement.classList.add('transition');
	window.setTimeout(() => {
		docElement.classList.remove('transition');
	}, 1000);
	if (value === 'dark' || (checkElement && checkElement.checked == true)) {
		if (checkElement) {
			checkElement.checked = true;
		}
		docElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('mode', 'dark');
	} else {
		if (checkElement) {
			checkElement.checked = false;
		}
		docElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('mode', 'light');
	}
}

// Window Loads
$(function () {
	let bodyElement = $(`body`);
	$('.loader-box').fadeOut(500, function () {
		$('.loader-box').remove();
	});
	bodyElement.prepend(header);
	bodyElement.append(footer);
	bodyElement.append(goToTopbutton);

	// Sunrise animation: reveal footer wordmark when footer scrolls into view
	var wordmarkWrap = document.querySelector('.footer-wordmark-wrap');
	if (wordmarkWrap && 'IntersectionObserver' in window) {
		var wordmarkObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
					wordmarkObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1 });
		wordmarkObserver.observe(wordmarkWrap);
	} else if (wordmarkWrap) {
		wordmarkWrap.classList.add('in-view');
	}

	activeTab();
	activeSmallTab();
	if (sessionStorage['mode']) {
		changeTheme(sessionStorage['mode']);
	}
});

window.onscroll = function () {
	scrollFunction();
};

//Single Declartion of changed theme button

function openNav() {
	document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
	document.getElementById('myNav').style.display = 'none';
}

function topBtnClick() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function init() {
	let imgDefer = document.getElementsByTagName('img');
	for (let i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}

window.onload = init;
