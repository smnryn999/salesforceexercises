var flag = true;
var showButtons = document.querySelectorAll(".showSolution");
      
     for(let i=0; i<showButtons.length; i++){
         showButtons[i].onclick = function (){
            if(flag) {
               this.nextElementSibling.style.display = "block";
               this.innerHTML = "Hide Solution";
               flag = !flag;
            }
            else {
               this.nextElementSibling.style.display = "none";
               this.innerHTML = "Show Solution";
               flag = !flag;
            }   
         }
      }

   for(let i=0; i<showButtons.length; i++){
      document.querySelectorAll(".counter")[i].innerHTML = i+1;
   }
