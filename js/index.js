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
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 Wikipedia is freely available in 290 languag-es',
    image: '/images/speaker1.png',
    classname: 'card1',
  },

  {
    name: 'Kilnon Joe',
    position: 'Chief Director of the Wikimedia Foundation',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: '/images/speaker_01 1 (1).png',
    classname: 'card2',
  },

  {
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: '/images/speaker_01 1 (2).png',
    classname: 'card3',
  },

  {
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: '/images/speaker_01 1 (3).png',
    classname: 'card4',
  },

  {
    name: 'Ryan Merkley',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment  Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world ',
    image: '/images/speaker_01 1.png',
    classname: 'card5',
  },

  {
    name: 'Lila tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    image: '/images/speaker_01 1 (4).png',
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
        seeMoreBtn.innerHTML = '<a href="#">LESS</a><i class="fa fa-chevron-up"></i>';
      } else {
        card.style.display = 'none';
        seeMoreBtn.innerHTML = '<a href="#">MORE</a><i class="fa fa-chevron-down"></i>';
      }
    });
}
  
  seeMoreBtn.addEventListener('click', toggleHiddenCards);