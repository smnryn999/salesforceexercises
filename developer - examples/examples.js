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

   var pres = document.querySelectorAll("pre");
   for(var i=0; i<pres.length; i++){
      var content = pres[i].innerHTML;
      content = content.replaceAll("new", "<var>new</var>");
      content = content.replaceAll("System.debug", "<span class='key'>System.debug</span>");
      content = content.replaceAll("String", "<span class='datatype'>String</span>");
      document.querySelectorAll("pre")[i].innerHTML = content;
   }
