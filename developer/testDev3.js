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
const test = ["In Apex, what is the purpose of a constructor method in a class?",
              'Which of the following Apex trigger code snippets demonstrates the correct syntax for a trigger on the Account object that sets the account\'s description to "New Account" for new records?',
              "<code>Account acc = new Account(); <br> insert acc; </code> <br> What type of exception does the above code cause?", "Which of the following Visualforce code snippets correctly displays a button that, when clicked, calls a method named myMethod of a class named MyController?",
              " In Apex, what is the primary purpose of a future method?", "Which statement accurately describes the purpose of a test class in Apex?"];

const options1 = [["To define the layout of user interface elements.","To create an instance of an object from a class.","To establish a connection to external APIs.","To handle exceptions and errors in the code."],
                 ["<code>trigger AccountTrigger on Account (before insert) {<br><samp>for(Account acc : Trigger.new) {</samp> <br> <samp><samp> acc.Description = 'New Account';</samp></samp> <br> <samp>}</samp> <br>}</code>",
                  "<code>trigger AccountTrigger on Account (after insert) {<br><samp>for(Account acc : Trigger.new) {</samp> <br> <samp><samp> acc.Description = 'New Account';</samp></samp> <br> <samp>}</samp> <br>}</code>",
                  '<code>trigger AccountTrigger on Account (before insert) {<br><samp>for(Account acc : Trigger.newMap) {</samp> <br> <samp><samp> acc.Description = "New Account";</samp></samp> <br> <samp>}</samp> <br>}</code>',
                  "<code>trigger AccountTrigger (after insert) {<br><samp>for(Account acc : Trigger.new) {</samp> <br> <samp><samp> acc.Description = 'New Account';</samp></samp> <br> <samp>}</samp> <br>}</code>"],
                 ["DmlException","NullPointerException","FinalException","NoAccessException"],
                 ['<code>&lt;apex:page controller="MyController"&gt; <br> <samp> &#60;apex:form&#62; <samp><br> <samp><samp> &#60;apex:commandButton value="Click" action="{!myMethod}"/&#62; </samp></samp> <br> <samp>&#60;/apex:form&#62;</samp> <br> &#60;/apex:page&#62;</code>',
                  '<code>&lt;apex:page&gt; <br> <samp> &#60;apex:form&#62; <samp><br> <samp><samp> &#60;apex:commandButton value="Click" action="{!myMethod}"/&#62; </samp></samp> <br> <samp>&#60;/apex:form&#62;</samp> <br> &#60;/apex:page&#62;</code>',
                  '<code>&lt;apex:page controller="MyController"&gt; <br> <samp> &#60;apex:form&#62; <samp><br> <samp><samp> &#60;apex:button value="Click" action="{!myMethod}"/&#62; </samp></samp> <br> <samp>&#60;/apex:form&#62;</samp> <br> &#60;/apex:page&#62;</code>',
                  '<code>&lt;apex:page action="myMethod"&gt; <br> <samp> &#60;apex:form&#62; <samp><br> <samp><samp> &#60;apex:button value="Click"/&#62; </samp></samp> <br> <samp>&#60;/apex:form&#62;</samp> <br> &#60;/apex:page&#62;</code>'],
                 ["To execute code synchronously and immediately.","To send email notifications to users.","To generate reports and dashboards.","To perform long-running or asynchronous tasks."],
                 ["Test classes are used to create new Salesforce records.","Test classes are designed to deploy code changes to production.","Test classes verify that Apex code behaves as expected and adheres to best practices.","Test classes are used to schedule Apex jobs for automatic execution."]];
const answers = [B,A,A,A,D,C];

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

  // CODE BLOCKS
  var codes = document.querySelectorAll("code");
  for(var i=0; i<codes.length; i++){
     var content = codes[i].innerHTML;
     var datatypes = ["String", " Date ", "Integer", "Boolean", "Decimal", "override", "virtual", "static","void","class", "LightningElement", "lwc", "Text", "trigger"];
     var decorators = ["@AuraEnabled", "@wire", "@api", "@track", "api", "wire", "Trigger.newMap", "Trigger.new", "Trigger.oldMap", "Trigger.old"];
     var punctuation = ["(", ")", "[", "]", "{", "}", ",", '"'];
     for(d of datatypes){
       // var re = new RegExp(d,"ig");
       content = content.replaceAll(d, "<span style='color:#3b7a57'>"+d+"</span>"); // Amazon Green
     } 
     for(d of decorators){
       content = content.replaceAll(d, "<span style='color:#126180'>"+d+"</span>");
     } 
     for(p of punctuation){
       content = content.replaceAll(p, "<span style='color:black'>"+p+"</span>");
     } 
     document.querySelectorAll("code")[i].innerHTML = content;
   }
   
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
