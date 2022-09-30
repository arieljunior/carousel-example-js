const spinner = document.querySelector("#spinner");
const carrouselInfnet = document.querySelector("#infnet");
const titleModal = document.querySelector("#title-modal");
const bodyModal = document.querySelector("#body-modal");

setTimeout(() => {
	spinner.style.display = "none";
}, 2000);

class Card {
	caminhoImage;
	titulo;
	descricao;

	constructor(src, title, descricao) {
		this.caminhoImage = src;
		this.titulo = title;
		this.descricao = descricao;
	}
}

const listCards = [
	new Card(
		"https://yt3.ggpht.com/ytc/AMLnZu-KLo0hVjONify0ZAEqW8ELEK18kKVxfAHoDYx5Uw=s900-c-k-c0x00ffffff-no-rj",
		"logo infnet",
		"descricao 1"
	),
	new Card(
		"https://curso.infnet.com.br/wp-content/uploads/sites/52/2019/03/infnet001-1.jpg",
		"corredor infnet",
		"descricao 2"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 3"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 4"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 5"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 6"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 7"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 1"
	),
	new Card(
		"https://media.glassdoor.com/l/89/7e/ba/23/sala-de-aula-da-institui%C3%A3-%C3%A3-o.jpg",
		"sala infnet",
		"descricao 1"
	),
];

listCards.forEach((card, index) => {
	const div = document.createElement("div");
	div.innerHTML = `
        <img src="${card.caminhoImage}" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="handleClickImage(${index})"/>
        <h3>${card.titulo}</h3>
    `;
	carrouselInfnet.appendChild(div);
});

function handleClickImage(index) {
	const card = listCards[index];
    titleModal.innerHTML = "";
	bodyModal.innerHTML = `
        <div class="img-loader"></div>
        <div class="text-loader"></div>
    `;
	setTimeout(() => {
		titleModal.innerHTML = card.titulo;
		bodyModal.innerHTML = `
            <img src="${card.caminhoImage}" />
            <p>${card.descricao}</p>
        `;
	}, 1500);
}

$(".carrousel-infnet").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});
