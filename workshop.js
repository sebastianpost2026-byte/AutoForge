(function(){
  const panel=document.getElementById('panel');
  const btn=[...document.querySelectorAll('.side button')].find(b=>b.textContent.includes('Taller'));
  if(!panel||!btn)return;
  btn.onclick=()=>{
    document.querySelectorAll('.side button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');
    panel.innerHTML=`<div class="box"><h3>⚙️ TALLER · DISEÑO PARAMÉTRICO</h3><small style="color:#8092a8">Modifica proporciones visuales del vehículo.</small></div>
    <div class="box"><h3>LONGITUD</h3><input id="afL" type="range" min="3.5" max="8" step="0.01" value="4.78" style="width:100%"><b id="afLv">4.78 m</b></div>
    <div class="box"><h3>ANCHO</h3><input id="afW" type="range" min="1.5" max="2.6" step="0.01" value="1.82" style="width:100%"><b id="afWv">1.82 m</b></div>
    <div class="box"><h3>ALTURA</h3><input id="afH" type="range" min="1.1" max="2.4" step="0.01" value="1.41" style="width:100%"><b id="afHv">1.41 m</b></div>
    <div class="box"><h3>PRESETS</h3><div class="row"><button id="afReset">Original</button><button id="afLimo">🚘 Limusina 6 m</button></div></div>
    <div class="box"><h3>MEDIDAS DEL PROYECTO</h3><div id="afDims" style="line-height:1.7">Largo: 4.78 m<br>Ancho: 1.82 m<br>Alto: 1.41 m</div></div>
    <div class="box"><h3>🤖 DISEÑO POR TEXTO</h3><textarea id="afCmd" placeholder="Ej.: hazlo 6 metros de largo y 2 metros de ancho"></textarea><button class="go" id="afApply">Aplicar modificación</button></div>
    <div class="box"><small style="color:#8092a8">⚠️ Estas medidas son de diseño visual. Para fabricar una carrocería real deben validarse con CAD, medición física e ingeniería.</small></div>`;
    const L=document.getElementById('afL'),W=document.getElementById('afW'),H=document.getElementById('afH');
    const lv=document.getElementById('afLv'),wv=document.getElementById('afWv'),hv=document.getElementById('afHv'),dims=document.getElementById('afDims');
    function apply(){const l=+L.value,w=+W.value,h=+H.value;lv.textContent=l.toFixed(2)+' m';wv.textContent=w.toFixed(2)+' m';hv.textContent=h.toFixed(2)+' m';dims.innerHTML=`Largo: ${l.toFixed(2)} m<br>Ancho: ${w.toFixed(2)} m<br>Alto: ${h.toFixed(2)} m`;window.dispatchEvent(new CustomEvent('af:scale',{detail:{l,w,h}}))}
    [L,W,H].forEach(x=>x.oninput=apply);
    document.getElementById('afReset').onclick=()=>{L.value=4.78;W.value=1.82;H.value=1.41;apply()};
    document.getElementById('afLimo').onclick=()=>{L.value=6;W.value=1.82;H.value=1.41;apply()};
    document.getElementById('afApply').onclick=()=>{const t=document.getElementById('afCmd').value.toLowerCase();const lm=t.match(/(\d+(?:\.\d+)?)\s*(?:m|metros?)\s*(?:de\s*)?(?:largo|longitud)/);const wm=t.match(/(\d+(?:\.\d+)?)\s*(?:m|metros?)\s*(?:de\s*)?(?:ancho)/);const hm=t.match(/(\d+(?:\.\d+)?)\s*(?:m|metros?)\s*(?:de\s*)?(?:alto|altura)/);if(lm)L.value=lm[1];if(wm)W.value=wm[1];if(hm)H.value=hm[1];if(/limusina|limousine/.test(t)&&!lm)L.value=6;apply()};
  };
})();