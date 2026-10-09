const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); toggle.textContent = open ? 'Close' : 'Menu'; });
document.addEventListener('keydown', (event) => { if(event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true'){toggle.click();toggle.focus();} });
