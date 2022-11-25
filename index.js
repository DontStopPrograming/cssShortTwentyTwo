let presure = document.querySelectorAll('.next')
let one = document.getElementById('uno')
let two = document.getElementById('two')
let three = document.getElementById('three')

 function change(){
            if(presure == presure.style.onclick){
                one.style.transform = 'translateX(50%) translateY(50%)'
            }
        }
 
 window.addEventListener('onclick', change)

