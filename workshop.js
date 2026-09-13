(function(){
  const panel=document.getElementById('panel');
  const btn=[...document.querySelectorAll('.side button')].find(b=>b.textContent.includes('Taller'));
  if(!panel||!btn)return;
  btn.onclick=()=>{
    document.querySelectorAll('.side button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');
    panel.innerHTML=`<div class="box"><h3>⚙️ TALLER · CARROCERÍA</h3><small style="color:#8092a8">Alargamiento estructural: frente y parte trasera conservan su forma; la extensión se concentra en la sección central.</small></div>
    <div class="box"><h3>📏 LONGITUD</h3><input id="afL" type="range" min="4.50" max="8.00" step="0.01" value="4.50" style="width:100%"><b id="afLv">4.50 m</b><div id="afMsg" style="margin-top:8px;font-size:12px;color:#66b7ff">Mustang original · 4.50 m</div></div>
    <div class="box"><h3>🚘 PRESETS</h3><div class="row"><button id="afReset">Original</button><button id="afLimo">Limusina 6 m</button></div></div>
    <div class="box"><h3>📐 MEDIDAS</h3><div style="line-height:1.8">Largo base: <b>4.50 m</b><br>Ancho base: <b>≈2.02 m</b><br>Alto base: <b>≈1.33 m</b></div></div>
    <div class="box"><h3>🧩 ESTRUCTURA</h3><small style="color:#8092a8">La sección central se amplía alrededor del habitáculo. El cofre, frente, cajuela y partes finales no se estiran como una fotografía.</small></div>`;
    const L=document.getElementById('afL'),lv=document.getElementById('afLv'),msg=document.getElementById('afMsg');
    function apply(){const l=+L.value;lv.textContent=l.toFixed(2)+' m';msg.textContent=l>4.501?'Extensión central: '+(l-4.50).toFixed(2)+' m · frente y trasera preservados':'Mustang original · 4.50 m';if(typeof window.setLength==='function')window.setLength(l)}
    L.oninput=apply;
    document.getElementById('afReset').onclick=()=>{L.value=4.50;apply()};
    document.getElementById('afLimo').onclick=()=>{L.value=6;apply()};
  };
})();