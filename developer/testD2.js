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
             "Which of the following statements about Queueable classes is true?", "Lightning Web Components (LWC) can be exposed in Lightning App Builder. True or false?", "Which of the following best describes Visualforce?",
             "Which of the following cron expression will run a class implemented with the Schedulable interface at 10 am on the third of every month in 2025?", "Which of the following is NOT a valid data type in Salesforce Apex",
             "Which of the following is the correct syntax for creating a new Apex class?", "Which of the following is the correct way to create a new Map in Apex?",
             "<code>public class ContactController { <br><samp>@AuraEnabled(cachable=true)</samp> <br> <samp> public static List<Contact> getContacts(Id accId){</samp> <br> <samp><samp>return [SELECT Name  FROM Contact WHERE AccountId = :accId];</samp></samp> <br> <samp>}</samp><br>}</code> <br> The getContacts() method of the ContactController class above has a parameter and returns the related contacts. We need to pass the current record's Id to the parameter. Which of the following code provides this?",
             "With which HTTP method can a new record be created in REST API?", "With which Git command can we send our files from local repository to remote repository?", "In Salesforce Apex, what is the purpose of the JSON.serialize() method?", "What is the maximum batch size for a single execution of a batch Apex job?"];

const options1 = [['<code>&lt;apex:commandButton action="{!updateRecord}" value="Update"/&gt;</code>','<code>&lt;apex:commandButton method="updateRecord" value="Update"/&gt;</code>','<code>&lt;apex:commandButton onclick="{!updateRecord}" value="Update"/&gt;</code>','<code>&lt;apex:commandButton actionName="updateRecord" value="Update"/&gt;</code>'],
                 ["It represents the old values of records before they were updated.","It refers to the new values of records after they were updated.","It represents the values of records before they were deleted.","It's used to access the values of records in a related object."], ["Overloading","Polymorphism","Inheritance","Abstraction"],
                 ["Integer i = 10;","Int i = 10;","i = Integer(10);","Integer i; i = 10;"],
                 ["<code>List&ltString&gt fruits = new List&ltString&gt(); <br> fruits.add('Apple'); <br> fruits.add('Banana'); <br> fruits.add('Cherry');</code>","<code>List&ltText&gt fruits = new List&ltText&gt(); <br> fruits.add('Apple'); <br> fruits.add('Banana'); <br> fruits.add('Cherry');</code>",'<code>List&ltString&gt fruits = new List&ltString&gt{ "Apple", "Banana", "Cherry" };</code>',"<code>List&ltString&gt fruits = new List&ltString&gt{'Apple', 'Banana', 'Cherry'};</code>"],
                 [4,5,48,72], ["Screen Flows","Asynchronous Apex","Visualforce","Aura Components"], ["We implement the batch class into Database.Stateful.","We schedule the batch class","We implement the batch class into Database.BatchableContext.","We do not need to take any action. This is already provided in a batch class."],
                 ["Queueable classes can be used to implement callouts to external services.","Queueable classes can be executed synchronously.","Queueable classes can only be enqueued from trigger context.","Queueable classes can't be scheduled to run at a specific time."], ["True","False"],
                 ["A server-side scripting language.","A client-side JavaScript framework.","A declarative tool for creating user interfaces.","A markup language for building custom UI components in Salesforce."], ["0 0 10 ? * 3 2025","0 0 10 ? 3 * 2025","0 0 10 3 * ? 2025","0 0 10 * * 3 2025"], ["Decimal","Id","Object","Percent"],
                 ["class MyClass extends Object { }","public class MyClass { }","MyClass extends Object { }","class MyClass { }"], ["Map&lt;String, Integer&gt; myMap = new Map&lt;String, Integer&gt;();","Map&lt;String, Integer&gt; myMap = new Map&lt;String, Integer&gt;{};","Map&lt;String, Integer&gt; myMap = new Map<>();","Map&lt;String, Integer&gt; myMap = new HashMap<>();"],
                 ['<code>import { LightningElement, wire } from "lwc"; <br> import listContact from "@salesforce/apex/ContactController.getContacts"; <br><br> export default class ApexWireMethod extends LightningElement {<br> <samp>@api recordId;</samp> <br><br> <samp>@wire(listContact, { accId: "$recordId"}) contacts;</samp> <br> }</code>',
                  '<code>import { LightningElement, wire } from "lwc"; <br> import listContact from "@salesforce/apex/ContactController.getContacts"; <br><br> export default class ApexWireMethod extends LightningElement {<br> <samp>const recordId;</samp> <br><br> <samp>@wire(listContact, { accId: "$recordId"}) contacts;</samp> <br> }</code>',
                  '<code>import { LightningElement } from "lwc"; <br> import listContact from "@salesforce/apex/ContactController.getContacts"; <br><br> export default class ApexWireMethod extends LightningElement {<br> <samp>@api recordId;</samp> <br><br> <samp>listContact({accId: "recordId"}) contacts;</samp> <br> }</code>',
                  '<code>import { LightningElement, api, wire } from "lwc"; <br> import listContact from "@salesforce/apex/ContactController.getContacts"; <br><br> export default class ApexWireMethod extends LightningElement {<br> <samp>@api recordId;</samp> <br><br> <samp>@wire(listContact, { accId: "$recordId"}) contacts;</samp> <br> }</code>'],
                 ["GET","PUT","POST","PATCH"], ["git send","git push","git clone","git checkout"], ["To deserialize JSON data into Apex objects.","To create a JSON string representation of an Apex object.","To validate the structure of a JSON object.","To parse JSON arrays into Apex lists."], [200, 500, 1000, 2000]];
const answers = [A,B,C,A,D,C,B,A,A,A,D,C,D,B,A,D,C,B,B,D];

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
     var datatypes = ["String", "Integer", "Boolean", "Decimal", "override", "virtual", "static","void","class", "LightningElement", "lwc", "Text"];
     var decorators = ["@AuraEnabled", "@wire", "@api", "@track", "api", "wire"];
     var punctuation = ["(",")","[","]","{","}",";"];
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
