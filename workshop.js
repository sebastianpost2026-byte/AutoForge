(function(){
  const panel=document.getElementById('panel');
  const btn=[...document.querySelectorAll('.side button')].find(b=>b.textContent.includes('Taller'));
  if(!panel||!btn)return;
  btn.onclick=()=>{
    document.querySelectorAll('.side button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');
    panel.innerHTML=`<div class="box"><h3>⚙️ TALLER · CARROCERÍA</h3><small style="color:#8092a8">Modo de diseño seguro. El Mustang conserva su geometría original mientras preparamos la extensión por piezas.</small></div>
    <div class="box"><h3>📏 PROYECTO</h3><label style="font-size:12px;color:#aebed0">Longitud objetivo</label><input id="afL" type="range" min="4.50" max="8.00" step="0.01" value="4.50" style="width:100%"><b id="afLv">4.50 m</b><div id="afMsg" style="margin-top:8px;font-size:12px;color:#66b7ff">La carrocería 3D no se deforma todavía.</div></div>
    <div class="box"><h3>🚘 PRESETS</h3><div class="row"><button id="afReset">Original</button><button id="afLimo">Limusina 6 m</button></div></div>
    <div class="box"><h3>📐 MEDIDAS</h3><div style="line-height:1.8">Largo base: <b>4.50 m</b><br>Ancho base: <b>≈2.02 m</b><br>Alto base: <b>≈1.33 m</b></div></div>
    <div class="box"><h3>🔧 SIGUIENTE ETAPA</h3><small style="color:#8092a8">El alargamiento real se hará moviendo frente y parte trasera, desplazando las ruedas y creando una sección central de carrocería. Así no se estira el auto como una fotografía.</small></div>`;
    const L=document.getElementById('afL'),lv=document.getElementById('afLv'),msg=document.getElementById('afMsg');
    L.oninput=()=>{const l=+L.value;lv.textContent=l.toFixed(2)+' m';msg.textContent=l>4.51?'Objetivo: '+l.toFixed(2)+' m · geometría original protegida':'Geometría original restaurada'};
    document.getElementById('afReset').onclick=()=>{L.value=4.50;L.oninput()};
    document.getElementById('afLimo').onclick=()=>{L.value=6;L.oninput()};
  };
})();