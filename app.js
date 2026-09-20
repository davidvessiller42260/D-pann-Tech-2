let DATA=null;

const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

async function load(){
  try{
    const r=await fetch('data.json?v='+Date.now(),{cache:'no-store'});
    if(!r.ok)throw new Error('data.json inaccessible');
    DATA=await r.json();
    render();
  }catch(e){
    console.error(e);
    $('heroText').textContent='Le contenu du site est temporairement indisponible.';
  }
}

function render(){
  const s=DATA.settings||{};
  $('brandName').textContent=s.shop_name||'DÉPANN’TECH';
  $('footerName').textContent=s.shop_name||'DÉPANN’TECH';
  $('heroTitle').textContent=s.hero_title||'Dépannage informatique & solutions numériques';
  $('heroText').textContent=s.hero_text||'';
  $('heroPhone').textContent=s.phone||'';
  $('heroHours').textContent=s.hours||'';
  $('footerText').textContent=s.footer_text||'';
  $('footerContact').innerHTML=esc(s.phone||'')+'<br>'+esc(s.email||'')+'<br>'+esc(s.address||'');
  $('callBtn').href='tel:'+String(s.phone||'').replace(/[^\d+]/g,'');
  if(s.logo)$('logoWrap').innerHTML='<img src="'+esc(s.logo)+'" alt="" style="width:100%;height:100%;object-fit:contain">';
  if(s.hero_image)$('heroPhoto').innerHTML='<img src="'+esc(s.hero_image)+'" alt="DÉPANN’TECH">';
  $('stats').innerHTML=(DATA.stats||[]).map(x=>'<div class="stat"><strong>'+esc(x.value)+'</strong><span>'+esc(x.label)+'</span></div>').join('');
  $('trust').innerHTML=(DATA.pages?.reassurance||'').split(/\r?\n/).filter(Boolean).slice(0,4).map(x=>'<span>✓ '+esc(x)+'</span>').join('');
  $('servicesList').innerHTML=(DATA.services||[]).map(x=>'<article class="card"><h3>'+esc(x.name)+'</h3><p>'+esc(x.description)+'</p><span class="price">'+esc(x.price)+'</span></article>').join('');
  const visible=(DATA.products||[]).filter(x=>x.visible!==false);
  $('productsEmpty').style.display=visible.length?'none':'block';
  $('productsList').innerHTML=visible.map(x=>'<article class="product"><div class="product-img">'+(x.image?'<img src="'+esc(x.image)+'" alt="'+esc(x.name)+'">':'Photo produit')+'</div><div class="product-body"><h3>'+esc(x.name)+'</h3><p>'+esc(x.description)+'</p><b>'+esc(x.price)+'</b><p>Stock : '+esc(x.stock??0)+'</p></div></article>').join('');
  $('about').textContent=DATA.pages?.about||'';
  $('reassurance').innerHTML=(DATA.pages?.reassurance||'').split(/\r?\n/).filter(Boolean).map(x=>'<div>✓ '+esc(x)+'</div>').join('');
  $('formNext').value=location.href.split('#')[0]+'?devis=merci';
  const email=s.email||'';
  if(email) $('quoteForm').action='https://formsubmit.co/'+encodeURIComponent(email);
}

function openModal(){ $('quoteModal').classList.add('open');$('quoteModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeModal(){ $('quoteModal').classList.remove('open');$('quoteModal').setAttribute('aria-hidden','true');document.body.style.overflow='';}

document.querySelectorAll('[data-quote]').forEach(b=>b.addEventListener('click',openModal));
$('[data-close]').addEventListener('click',closeModal);
$('quoteModal').addEventListener('click',e=>{if(e.target.id==='quoteModal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

load();
