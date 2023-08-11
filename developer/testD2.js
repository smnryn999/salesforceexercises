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
const test = ['Which of the following Visualforce code snippets correctly creates a command button that calls the "updateRecord" method in the controller when clicked?', 'What does the "trigger.new" keyword refer to in Salesforce Apex triggers?',
             "What is the term used to describe the ability of a subclass to inherit attributes and methods from its superclass?", "What is the correct syntax for declaring a variable of type Integer and initializing it to the value 10?",
             'Which of the following Apex code snippets correctly initializes a List of Strings with three elements: "Apple", "Banana", and "Cherry"', "What is the output of this code block? <br> <code>Date firstDate = Date.newInstance(1987, 11, 25); <br> Date secondDate = Date.newInstance(1991, 11, 30); <br> Integer monthsBetween = firstDate.monthsBetween(secondDate); <br> System.debug(monthsBetween);</code>",
             "Which of the following cannot we design an user interface with?", "We want to use a variable value that we assigned in the execute method in a batch class, in the finish method. How do we provide this?",
             "Which of the following statements about Queueable classes is true?", "Lightning Web Components (LWC) can be exposed in Lightning App Builder. True or false?"];

const options1 = [['<code>&lt;apex:commandButton action="{!updateRecord}" value="Update"/&gt;</code>','<code>&lt;apex:commandButton method="updateRecord" value="Update"/&gt;</code>','<code>&lt;apex:commandButton onclick="{!updateRecord}" value="Update"/&gt;</code>','<code>&lt;apex:commandButton actionName="updateRecord" value="Update"/&gt;</code>'],
                 ["It represents the old values of records before they were updated.","It refers to the new values of records after they were updated.","It represents the values of records before they were deleted.","It's used to access the values of records in a related object."], ["Overloading","Polymorphism","Inheritance","Abstraction"],
                 ["Integer i = 10;","Int i = 10;","i = Integer(10);","Integer i; i = 10;"],
                 ["<code>List&lt;String&gt; fruits = new List&lt;String&gt;(); <br> fruits.add('Apple'); <br> fruits.add('Banana'); <br> fruits.add('Cherry');</code>","<code>List&lt;Text&gt; fruits = new List&lt;Text&gt;(); <br> fruits.add('Apple'); <br> fruits.add('Banana'); <br> fruits.add('Cherry');</code>",'<code>List&lt;String&gt; fruits = new List&lt;String&gt;{ "Apple", "Banana", "Cherry" };</code>',"<code>List&lt;String&gt; fruits = new ListList&lt;String&gt;{'Apple', 'Banana', 'Cherry'};</code>"],
                 [4,5,48,72], ["Screen Flows","Asynchronous Apex","Visualforce","Aura Components"], ["We implement the batch class into Database.Stateful.","We schedule the batch class","We implement the batch class into Database.BatchableContext.","We do not need to take any action. This is already provided in a batch class."],
                 ["Queueable classes can be used to implement callouts to external services.","Queueable classes can be executed synchronously.","Queueable classes can only be enqueued from trigger context.","Queueable classes can't be scheduled to run at a specific time."], ["True","False"]];
const answers = [A,B,C,A,D,C,B,A,A,A];

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
