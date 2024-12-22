// let color;
let p = document.querySelector('p');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

const changeColor = ()=>{
  const idx = "0123456789ABCDEF";
  let color="";
  for(let i=0; i<6; i++ ){
  color += idx[Math.floor((Math.random())*16)];
  }
  // p.textContent = 'stop the change by clicking stop'
  p.style.backgroundColor = `#${color}`
}
 
let timeInvervalfunc;

start.addEventListener('click',()=>{
 if(timeInvervalfunc==null) {
  // p.textContent = 'See the color change by pressing start'
  timeInvervalfunc = setInterval(changeColor,500);
  }
})

stop.addEventListener('click',()=>{
  clearInterval(timeInvervalfunc);
  timeInvervalfunc = null;
  // p.textContent = 'See the color change by pressing start'
 
})



