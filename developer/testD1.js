var bullets = document.getElementsByClassName("bullet");
var buttons = document.querySelectorAll("button");
var explanation = document.querySelector("#explanation");
var question = document.getElementById("question");
var options = document.getElementsByClassName("option");
var optionContents = document.getElementsByClassName("optionContent");
var index = Number(document.getElementById("index").innerHTML);
var back = document.getElementById("back");
var reset = document.getElementById("reset");
var submit = document.querySelector("#submit");
var pass = document.querySelector("#pass");
const A = bullets[0], B = bullets[1], C = bullets[2], D = bullets[3];
var i=0, n=0, m=0;
var wrongs = 0, corrects = 0;

// QUESTIONS AND OPTIONS CONTENTS
const test = ["Which one is full-code?", "Which keyword is used to declare a constant in Apex?", "What is the output of this code? <br> <code>System.debug(3+5);</code>", "Apex works in server side. True or false?", "What is the output of this code? <br> <code>Integer[] numbers = new Integer[]{3,5,7,10};<br>Integer sum = 0;<br>for(Integer num:numbers){<br><samp>sum += num;</samp><br>}<br>System.debug(sum + num);</code>",
              "What is the output of this code? <br> <code>final integer x = 5; <br> x = 10; <br> System.debug(x);</code>",
              "We want to create a related contact automatically when we create an account. Which event should we use?",
             "We have 10 accounts in the production org. And when we execute the following code, how many accounts do we have in total? <br> <code>Account acc =  new Account(Name = 'New Account'); <br> insert acc; <br> List&lt;Account&gt; listAcc = new List&lt;Account&gt; (); <br> for(integer i=1; i<5; i++){<br><samp>Account acc =  new Account(Name = 'New Account' + i);</samp> <br><samp>listAcc.add(acc);</samp> <br>}</code>",
             "Abstract classes cannot have instances. True or false?", "Which format does SOAP API support?", "Which of the following is true?", "Which file is not required in LWC?", "Which of the following methods converts JSON format to Apex format?",
             "Which of the following methods is not to manipulate the database?", "We can use DML in an Apex method that is annotated with @AuraEnabled(cacheable=true). True or false?", "Which of the following best describes Salesforce Aura Components?",
             "What is Salesforce Visualforce primarily used for?", "What is Apex not used for?", "What is the result of the expression Calculator.calculateTotal(15, 5) according to the following class and method? <br> <code>public class Calculator{<br> <samp>public static decimal calculateTotal(decimal unitPrice, integer quantity){</samp><br> <samp><samp>return unitPrice * quantity;</samp></samp> <br><samp>}</samp><br>}</code>",
             "How do we call the method named calculatePrice below? <br> <pre>public Decimal calculateTotal(Integer quantity, Integer unitPrice) {
    return quantity * unitPrice;
}</pre>"];

const options1 = [["Apex","Flow","Formula Fields","Validation Rules"], ["final","constant","static","const"], [35, "3+5", 8, "Error"], ["True", "False"], [10,25,35,"Error"], [5,10,"x","Error"], ["before insert","after insert","before update","after update"],
                 [10,11,14,15], ["True","False"], ["Text","JSON","XML","CSV"], ["SOAP API supports JSON files","XML is more useful than JSON","REST API is more secure than SOAP API","REST API is faster than SOAP API"],
                 ["HTML","CSS","JavaScript","XML"], ["JSON.stringify()","JSON.destringify()","JSON.serialize()","JSON.deserialize()"], ["@track adapter","@wire adapter","LDS functions","<lighting-record-form> tag"], ["True", "False"],
                 ["A server-side framework for building web applications.","A programming language used to create custom objects in Salesforce.","A user interface framework for developing dynamic web apps for mobile and desktop devices.","A database management tool provided by Salesforce."],
                 ["Creating custom objects in Salesforce.","Building server-side logic for Apex classes.","Designing user interfaces for web applications using a markup language.","Integrating external databases with Salesforce."],
                 ["Creating visually appealing user interfaces for web applications.","Managing and organizing Salesforce records in the database.","Writing server-side logic and business processes.","Connecting Salesforce with external services."], [75, "75.0", "Null", "Error"],
                 ["<code>Calculator.calculateTotal()</code>","It cannot be called","",""]];
const answers = [A, A, C, A, D, D, B, B, A, C, D, B, D, A, B, C, C, A, B, B];

document.querySelector("#numberOfQuestion").innerHTML = test.length;

question.innerHTML = test[n];

for(opt of optionContents){
   opt.innerHTML = options1[m][i];
   i++;
}

// SELECTING OPTIONS
for(opt of options){
   opt.onclick =function () {
      for(b of bullets){
         b.style.backgroundColor = "Azure";
         b.style.color = "black";
         b.parentElement.style.backgroundColor = "azure";
      }
      this.children[0].style.backgroundColor = "DodgerBlue";
      this.children[0].style.color = "white";
      this.style.backgroundColor = "#fafafa";
   }
}

// SUBMIT BUTTON
submit.onclick = function () {
   var bool = A.style.color != "white" && B.style.color != "white" && C.style.color != "white" && D.style.color != "white";
   if(bool) {
      alert("Please select an option or click pass button");
   }
   else {
      if(answers[n].style.backgroundColor == "dodgerblue") {
         explanation.innerHTML = "Correct Answer";
         explanation.style.color = "green";
         corrects++;
         }
      else if(answers[n].style.backgroundColor == "green") {
         null;
      }
      else {
         explanation.innerHTML = "Wrong Answer";
         explanation.style.color = "red";
         wrongs++;
         for(b of bullets){
            if(b.style.backgroundColor == "dodgerblue" && b != answers[n]) {
               b.style.backgroundColor = "red";
            }
         }
      }
      
      answers[n].style.color = "white";
      answers[n].style.backgroundColor = "green";      
   }
}

// PASS BUTTON
pass.onclick = function () {
   if(n==test.length-1) {
      explanation.innerHTML = `Test Completed. Total questions: ${test.length}, correct answers: ${corrects}, wrong answers: ${wrongs}`;
      explanation.style.color = "navy";
   }else {
      n++;
      question.innerHTML = test[n];
   
      i=0;
      m++;
      for(opt of optionContents){
      opt.innerHTML = options1[m][i];
      i++;
      }
      
      if(options1[m].length == 2) {
         options[2].style.display = "none";
         options[3].style.display = "none";
      }
      else if(options1[m].length == 3) {
         options[3].style.display = "none";
      }
      else {
         for(op of options){
            op.style.display = "block";
         }
      }
   }
   
   if(index==test.length) {return;}
   index++;
   document.getElementById("index").innerHTML = index;
   
   for(o of options){
      o.style.backgroundColor = "Azure";
      o.style.color = "black";
      o.children[0].style.backgroundColor = "azure";
      o.children[0].style.color = "black";
      }
   explanation.innerHTML = null;
   
}
// RESET BUTTON
reset.onclick = function () {
   n = 0;
   m = 0;
   i = 0;
   wrongs = 0;
   corrects = 0;
   index = 1;
   document.getElementById("index").innerHTML = index;
   question.innerHTML = test[n];
   for(opt of optionContents){
      opt.innerHTML = options1[m][i];
      i++;
   }
      
   for(o of options){
      o.style.backgroundColor = "Azure";
      o.style.color = "black";
      o.children[0].style.backgroundColor = "azure";
      o.children[0].style.color = "black";
      }
   explanation.innerHTML = null;
   
   if(options1[m].length == 2) {
         options[2].style.display = "none";
         options[3].style.display = "none";
      }
   else if(options1[m].length == 3) {
         options[3].style.display = "none";
      }
   else {
         for(op of options){
            op.style.display = "block";
         }
      }
}

