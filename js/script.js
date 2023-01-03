const array = [
  {
    id: '1',
    name: 'Tonic',
    namedesk:'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['CANOPY', 'Back End Dev', 2015],
    image: 'First image.jpg',
    imageDesktop: 'img/nature.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://ashnaali3255.github.io/Portfolio-1/',
    source_link: 'https://github.com/Ashnaali3255/Portfolio-1',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    namedesk:'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/portofolio-img-2.svg',
    imageDesktop: 'img/stories-desk.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
  {
    id: '3',
    name: 'Tonic',
    namedesk:'Facebook 360',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/portofolio-img-3.svg',
    imageDesktop: 'img/desk-one.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    namedesk:'Uber Navigation',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['UBER', 'Lead Developer', 2018],
    image: 'img/portofolio-img-4.svg',
    imageDesktop: 'img/uber-desk.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
];
const main = document.querySelector('.my-menu');
const dynamicWork = document.querySelector('.works');
const modalView = document.querySelector('.bg-modal');
function openMain() {
  main.style.visibility = 'visible';
}
function closeMain() {
  main.style.visibility = 'hidden';
}
function closeModal() {
  modalView.style.visibility = 'hidden';
}
function openModal(id) {
  modalView.style.visibility = 'visible';
  for (let i = 0; i < array.length; i += 1) {
    if (id === array[i].id) {
      modalView.innerHTML = `
      <div class="model_content" id="modelcontent">
      <div class="model_header">
          <h2 class="project_title">${array[i].name}</h2>
          <span onclick="closeModel()" class="crossBtn">&times;</span>
      </div>
      <ul class="info_list">
          <li class="item1">${array[i].featured[0]}</li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[1]}</span></li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[2]}</span></li>
      </ul>
      <img class="img_project" src=${array[i].image} alt="project">
      <img class="img_desktop" src=${array[i].imageDesktop} alt="project desktop screenshot">
      <p class="project_description">${array[i].longDescription}</p>
      <ul class="tech_list">
          <li>${array[i].technologies[0]}</li>
          <li class="margin_li">${array[i].technologies[1]}</li>
          <li class="margin_li">${array[i].technologies[2]}</li>
      </ul>
      <img src="./images/border_line.png" alt="border line" class="button_line">
      <div class="buttons">
          <a class="model_btn live" href=${array[i].live_version}>See live<img class="_icon" src="./images/Icon.svg" alt="live icon"></a>
          <a class="model_btn source" href=${array[i].source_link}>See project<img class="_icon" src="./images/Vector.svg" alt="github icon"></a>
      </div>
  </div>`;
    }
  }
}
openMain();
closeMain();
openModal();
closeModal();
for (let i = 0; i < array.length; i += 1) {
  dynamicWork.innerHTML += `<div class="project">
    <img class="picture" src="${array[i].image}" alt="project1">
    <h2 class="post">Tonic</h2>
    <ul class="toni-flex">
      <li class="link">CANOPY</li>
      <li><img src="./Counter.jpg" alt="counter">Back End Dev</li>
      <li><img src="./Counter.jpg" alt="counter">2022</li>
    </ul>
    <p class="para">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <ul class="list-flex">
      <li class="language">html</li>
      <li class="language">css</li>
      <li class="language">javascript</li>
    </ul>
    <button><strong>See Project</strong></button>
  </div>
  </div>
</div>
</div>
  `;
}