(function(){
  function normalizar(s){
    if(!s) return '';
    return s.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  }
  function iniciar(){
    var input = document.getElementById('buscador');
    if(!input) return;
    var items = document.querySelectorAll('.card, .sub-card');
    function filtrar(){
      var q = normalizar(input.value);
      for(var i=0;i<items.length;i++){
        var el = items[i];
        var texto = normalizar(el.textContent || el.innerText || '');
        el.style.display = (!q || texto.indexOf(q) !== -1) ? '' : 'none';
      }
    }
    input.addEventListener('input', filtrar);
    input.addEventListener('keyup', filtrar);
    input.addEventListener('change', filtrar);
    input.addEventListener('paste', function(){ setTimeout(filtrar, 10); });
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', iniciar); }
  else { iniciar(); }
})();
function abrirLightbox(s){var l=document.getElementById('lightbox'),i=document.getElementById('lightbox-img');if(l&&i){i.src=s;l.classList.add('active');}}
function cerrarLightbox(){var l=document.getElementById('lightbox');if(l)l.classList.remove('active');}
