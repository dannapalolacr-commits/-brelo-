const noBtn = document.querySelector('.no-btn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('main-card');

// Lógica para que el botón NO escape
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Lógica para el mensaje de éxito con el mensaje del mango
yesBtn.addEventListener('click', () => {
    mainCard.innerHTML = `
        <h1>¡SABÍA QUE DIRÍAS QUE SÍ! ❤️</h1>
        <img src="https://i.pinimg.com/originals/87/05/4f/87054f1e85fe6fc78af06837a548f7fa.gif" class="cat-img">
        <p style="margin-top: 20px; font-weight: bold; color: #ff5252;">¡Te amo flaquito!</p>
        
        <p style="margin-top: 15px; font-size: 0.9rem; color: #757575; font-style: italic;">
            Si estás viendo esto significa que volviste a abrir mi página, mándame un emoji de mango para saber si lo viste jaja 🥭
        </p>
    `;
});
