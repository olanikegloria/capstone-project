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
    position: 'Berkman Professor',
    description: 'Benkler studies commons-based peer production, and published his seminal book',
    image: '../images/speaker.jpg',
    classname: 'card1',
  },

  {
    name: 'Kilnon Joe',
    position: 'Chief Director',
    description: 'As the main venue for new media art production in Korea, Nabi promotes.',
    image: '../images/speaker.jpg',
    classname: 'card2',
  },

  {
    name: 'SohYeong Noh',
    position: 'Director of Art',
    description: 'As the main venue for new media art production in Korea, Nabi promotes.',
    image: '../images/speaker.jpg',
    classname: 'card3',
  },

  {
    name: 'Julia Leda',
    position: 'President',
    description: 'European ingetration, political democracy and participation of youth',
    image: '../images/grad2.jpeg',
    classname: 'card4',
  },

  {
    name: 'Ryan Merkley',
    position: 'CEO of Creativve Commons',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation',
    image: '../images/speaker.jpg',
    classname: 'card5',
  },

  {
    name: 'Lila tretikov',
    position: 'Executive Director',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit',
    image: '../images/speaker.jpg',
    classname: 'card6',
  },

];

// =========== Creating dynamic content for works section ============

const cardContainer = document.createElement('div');
cardContainer.className = 'speakerContainer';

speakers.forEach((itemContent) => {
  const card = document.createElement('div');
  card.classList.add('speakerCard', itemContent.classname);

  const speakerPhoto = document.createElement('div');
  speakerPhoto.className = 'speaker-photo';

  const image = document.createElement('img');
  image.src = itemContent.image;

  speakerPhoto.appendChild(image);

  const speakerDetails = document.createElement('div');
  speakerDetails.className = 'speaker-details';

  const heading = document.createElement('h1');
  heading.innerHTML = itemContent.name;
  heading.className = 'speaker-name';

  const position = document.createElement('p');
  position.innerHTML = itemContent.position;
  position.className = 'speaker-position';

  // const divider = document.createElement('hr');
  // divider.className = 'divider';

  const description = document.createElement('p');
  description.innerHTML = itemContent.description;
  description.className = 'speaker-description';

  speakerDetails.appendChild(heading);
  speakerDetails.appendChild(position);
  // speakerDetails.appendChild(divider);
  speakerDetails.appendChild(description);

  card.appendChild(speakerPhoto);
  card.appendChild(speakerDetails);
  cardContainer.appendChild(card);
});

const targetElement = document.querySelector('#speakers');
targetElement.appendChild(cardContainer);