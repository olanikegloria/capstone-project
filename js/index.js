const menubtn = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu ul li');
const openMenu = () => sideMenu.classList.add('open-side-menu');
const closeMenu = () => sideMenu.classList.remove('open-side-menu');
menuItems.forEach((el) => {
  el.addEventListener('click', () => closeMenu());
});
menubtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());

const speakers = [
  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card1',
  },

  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card2',
  },

  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card3',
  },

  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card4',
  },

  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card5',
  },

  {
    name: 'yonkai Benkelry',
    position: 'director',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: '/images/speaker_01 1.svg',
    classname: 'card6',
  },

];
const featuredContainer = document.querySelector('.featured-container');
speakers.forEach((content) => {
  const speakerContainer = document.createElement('div');
  speakerContainer.classList.add('speaker-container', content.classname);
  speakerContainer.innerHTML = `<div class="speaker-img"><img src="${content.image}"></div>
                <div class="speakers-text">
                  <h2 class="speaker-name">${content.name}</h2>
                  <p class="post">${content.position}</p>
                  <p class="description">${content.description}</p>
                </div>`
  featuredContainer.appendChild(speakerContainer);
});

const seeMoreBtn = document.querySelector('.see-more');

function toggleHiddenCards() {
  const hiddenCards = document.querySelectorAll('.speaker-container:not(.card1):not(.card2)');

  hiddenCards.forEach((card) => {
    if (card.style.display === 'none') {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

seeMoreBtn.addEventListener('click', toggleHiddenCards);
