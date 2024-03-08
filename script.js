 const btn1 = document.querySelector('#btnHitungJarak');
 const txt_jarak = document.querySelector('#sJarak');
 const txt_waktu = document.querySelector('#tWaktu');
 const speed = document.querySelector('.speeds');

 btn1.addEventListener('click',function(){
    let jarak = parseFloat(txt_jarak.value)
    let waktu = parseFloat(txt_waktu.value)

    kecepatan  = jarak / waktu
    speed.innerHTML = `${kecepatan.toFixed(2)} km/jam`;

      
 })


 const btn2 = document.querySelector("#btnHitungPercepatan")
 const txt_gaya = document.querySelector('#Gaya')
 const txt_Massa = document.querySelector('#Massa')
 const percepatan = document.querySelector('.f')

 btn2.addEventListener('click',function(){
  let m = parseFloat(txt_Massa.value)
  let a = parseFloat(txt_gaya.value)

  f = m * a
  
  percepatan.innerHTML = `${f.toFixed(2)} m/s`
  superscriptResult.innerHTML = `<sup class="superscript">2</sup>`;
 })


const btn3 = document.querySelector('#btnHitungArus')
const txt_arusListrik = document.querySelector('#arusListrik')
const txt_resistensi = document.querySelector('#resistensi')
const arusListrik = document.querySelector('.Arus')

btn3.addEventListener('click',function(){
  let i =parseFloat(txt_arusListrik.value)
  let r = parseFloat(txt_resistensi.value)

  V = i * r

  arusListrik.innerHTML =  `${V.toFixed(2)} volt `
})