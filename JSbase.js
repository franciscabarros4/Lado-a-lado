function showSection(sectionId) {
    let pages = document.querySelectorAll(".page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    document.getElementById(sectionId).classList.add("active");

    const header = document.querySelector('.header');

    if (sectionId === "home") {
        header.classList.add("home-active");
    } else {
        header.classList.remove("home-active");
    }
}

function openMember(member) {

    const modal = document.getElementById("member-modal");

    const img = document.getElementById("member-img");

    const name = document.getElementById("member-name");

    const description = document.getElementById("member-description");

    if(member === "barbara") {

        img.src = "imagens/barbaracao.jpeg";
        name.innerText = "Bárbara Mendes";
        description.innerText = "Olá, sou a Bárbara! Tenho 21 anos e na foto estou muito bem acompanhada pela Mel, a minha cadela. Confesso que entrei neste trabalho sem saber muito bem o que ia encontrar e com um conhecimento muito limitado sobre o que é, de facto, um cão de assistência. No entanto, mergulhar neste trabalho mudou tudo. Ao longo do processo, não só aumentou o meu amor e apreço pelos animais, como também passei a admirar profundamente todas as pessoas e profissionais envolvidos nesta área. É incrível perceber o impacto real e transformador que estes cães têm na vida de quem mais precisa. Hoje vejo que por trás de cada cão de assistência há muito mais do que um cão, há um amigo para a vida!";

    }

    else if(member === "francisca") {

        img.src = "imagens/kikafaisca.jpeg";
        name.innerText = "Francisca Barros";
        description.innerText = "Alô! Eu sou a Kika / Cisca / Shica, tenho 23 anos, e este é o meu gatinho: o Faísca! Até à realização deste trabalho, tinha um conhecimento limitado acerca da existência de cães de assistência. Já reconhecia a importância de um cão guiar uma pessoa invisual, mas não compreendia que um animal pode também ajudar pessoas com outro tipo de limitações físicas e/ou psicológicas. O desenvolvimento deste projeto sensibilizou-me para o vínculo afetivo que é estabelecido entre um cão e o seu tutor e mostrou-me a responsabilidade que um animal tem quando está em 'modo trabalho'. Concluí que, para a realização de simples tarefas do dia a dia, um cão de assistência pode ser um meio fundamental para a melhoria da qualidade de vida das pessoas.";

    }

    else if(member === "lilian") {

        img.src = "imagens/cao1.jpg";
        name.innerText = "Lilian Correia";
        description.innerText = "Descrição da Lilian.";

    }

    else if(member === "simao") {

        img.src = "imagens/Cão Simão.jpeg";
        name.innerText = "Simão Assunção";
        description.innerText = "Olá, chamo-me Simão, tenho 20 anos. Apesar de ter algum conhecimento em relação aos cães de assistência e àquilo que significam para quem deles depende para viver de forma digna, este trabalho trouxe-me um lado diferente: a humanização. Ver, na prática a forma como estes cães estão treinados para auxiliarem o seu tutor, trouxe-me um lado mais prático da questão. Para além de tudo o que fazem no seu trabalho, estes cães são também os fiéis amigos das pessoas de quem tratam. O que mais guardo é a ligação de lealdade que estabelecem. O cão de assistência não é um cão de companhia, é uma peça importante para que, quem precisa, possa ter uma vida digna. Ahh… na foto está a minha melhor amiga, a minha Estrela!";

    }

    modal.style.display = "flex";

    modal.className = "member-modal " + member;
}

function closeMember() {

    document.getElementById("member-modal").style.display = "none";
}

// RESPONSIVIDADE 
function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.checked = false;
    }
}

function navigateTo(sectionId) {
    showSection(sectionId);
    closeMenu();
}
