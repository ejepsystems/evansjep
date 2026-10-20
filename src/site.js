const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); toggle.textContent = open ? 'Close' : 'Menu'; });
document.addEventListener('keydown', (event) => { if(event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true'){toggle.click();toggle.focus();} });
const appearance = document.querySelector('.theme-toggle');
function syncAppearance(){const light=document.documentElement.dataset.theme==='light';appearance.textContent=light?'Dark':'Ivory';appearance.setAttribute('aria-pressed',String(light));appearance.setAttribute('aria-label',light?'Switch to obsidian theme':'Switch to ivory theme');document.querySelector('meta[name="theme-color"]').content=light?'#f2eee5':'#111210';}
syncAppearance();
appearance?.addEventListener('click',()=>{const light=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=light?'light':'dark';try{localStorage.setItem('evans-jep-theme',light?'light':'dark');}catch{}syncAppearance();});
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}}},{threshold:.1});document.querySelectorAll('section').forEach(section=>observer.observe(section));}
