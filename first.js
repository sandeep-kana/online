
    // function myFunction(x){
    //     x.classList.toggle("change") ;    
    
    // }

function hello(){
    a = document.querySelector('.slide')
    a.style.display='block'
}
function cros(){
    a = document.querySelector('.slide')
    a.style.display='none'
}


var typed = new Typed('.typed', {
    strings: ['Developer', 'Deigner',"Programer"],
    typeSpeed: 100,
    loop : true,
    startDelay: 1200,
    backSpeed: 60,
    backDelay: 100
  });


  
    
let a = setInterval(b);
let d = 0;
let width = 0;

function b(){
    let c = document.getElementById('a');
    ++d
    ++width
    c.innerHTML=`${d}%`;
    c.style.width=`${width}%`;
    
    if(width === 60){
        clearInterval(a)
        startDelay(9000)
    }
}
