(function(){
var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
function openD(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
function closeD(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
if(t&&d&&o){
t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?closeD():openD();});
if(c)c.addEventListener('click',closeD);
o.addEventListener('click',closeD);
d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeD);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeD();});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeD();});
}
document.querySelectorAll('.faq-q').forEach(function(b){
b.addEventListener('click',function(){
var item=b.parentNode,a=item.querySelector('.faq-a'),open=item.classList.contains('open');
if(open){item.classList.remove('open');a.style.maxHeight='0px';b.setAttribute('aria-expanded','false');}
else{item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';b.setAttribute('aria-expanded','true');}
});});
})();
