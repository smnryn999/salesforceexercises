var flag = true;
var showButtons = document.querySelectorAll(".showSolution");
  
     // HIDE AND SHOW BUTTONS  
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

   // SEQUENCE NUMBER
   for(let i=0; i<showButtons.length; i++){
      document.querySelectorAll(".counter")[i].innerHTML = i+1;
   }
   
   // COLORINGS
   var pres = document.querySelectorAll("pre");
   for(var i=0; i<pres.length; i++){
      var content = pres[i].innerHTML;
     // content = content.replaceAll("new", "<var>new</var>");
     // content = content.replaceAll("extends", "<var>extends</var>");
      content = content.replaceAll("class", "<span class='key'>class</span>");
      content = content.replaceAll("System.debug", "<span class='key'>System.debug</span>");
     
     // content = content.replaceAll("for", "<span class='loop'>for</span>");
     // content = content.replaceAll("String", "<span class='datatype'>String</span>");
     // content = content.replaceAll(/boolean/gi, "<span class='datatype'>Boolean</span>");
      
      content = content.replaceAll(/[0-9]/g, function (x) {return `<span class='number'>${x}</span>`;});
      
      content = content.replaceAll(/List<string>/gi, "<span class='datatype'>List&#60;String&#62;</span>");
      content = content.replaceAll(/Set<string>/gi, "<span class='datatype'>Set&#60;String&#62;</span>");     
      
      var datatypes = ["String", "Date", "Integer", "Boolean", "Decimal", "Datetime", "Double", "override", "virtual"]; 
      for(d of datatypes){
         // var re = new RegExp(d,"ig");
         content = content.replaceAll(d, "<span class='datatype'>"+d+"</span>");
      } 
      
      var punctuation = ["(", ")", "{", "}", "[", "]", ","];
      for(p of punctuation){
         content = content.replaceAll(p, `<span class="punctuation">${p}</span>`);
      }

     var keywords = ["new","extends","implements"];
      for(p of keywords){
         content = content.replaceAll(p, `<var>${p}</var>`);
      }
      
      document.querySelectorAll("pre")[i].innerHTML = content;
   }
