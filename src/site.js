const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const narrow = matchMedia('(max-width: 799px)');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  navigation.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  main.inert = open; footer.inert = open;
  if(open) navigation.querySelector('a').focus();
  else if(restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{
  if(toggle.getAttribute('aria-expanded')!=='true') return;
  if(event.key==='Escape'){setMenu(false,true);return;}
  if(event.key==='Tab'){
    const controls=[toggle,...navigation.querySelectorAll('a,button')];
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
});
narrow.addEventListener('change',()=>{if(!narrow.matches)setMenu(false);});
const appearance=document.querySelector('.theme-toggle');
function syncAppearance(){const light=document.documentElement.dataset.theme==='light';appearance.textContent=light?'Obsidian':'Ivory';appearance.setAttribute('aria-pressed',String(light));appearance.setAttribute('aria-label',light?'Switch to obsidian theme':'Switch to ivory theme');document.querySelector('meta[name="theme-color"]').content=light?'#f2eee5':'#111210';}
syncAppearance();
appearance.addEventListener('click',()=>{const light=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=light?'light':'dark';try{localStorage.setItem('evans-jep-theme',light?'light':'dark');}catch{}syncAppearance();});
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}}},{threshold:.1});document.querySelectorAll('section').forEach(section=>observer.observe(section));}
