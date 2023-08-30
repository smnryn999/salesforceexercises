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
              "In Apex, what is the primary purpose of a future method?", "Which statement accurately describes the purpose of a test class in Apex?", "What is the order of access modifiers from most permissive to least permissive?",
              'Which of the following query returns all Accounts containing the word "University" in their name?',
              "In a company called Página Blanca Sales Inc., they use Salesforce to manage their sales processes. This year, they organize separate campaigns for each region. The sales team wants to automatically assign campaigns to specific sales representatives based on the campaigns' geographical region. <br><br> Which Salesforce feature can they use to accomplish this?",
              "Which cron expression represents a correctly implemented Schedulable class that runs every day at 2:00 PM?",
              "<code>public class UpdateContactsBatch implements Database.Batchable&lt;sObject&gt; { <br><br> &nbsp; public Database.QueryLocator start(Database.BatchableContext bc) {<br> &nbsp; &nbsp; String query = 'SELECT Id, Status__c FROM Contact WHERE Status__c != \'Active\''; <br> &nbsp; &nbsp; return Database.getQueryLocator(query);<br> &nbsp; } <br><br> &nbsp; public void execute(Database.BatchableContext bc, List&lt;Contact&gt; scope) { <br> &nbsp; &nbsp; for (Contact con : scope) {<br> &nbsp; &nbsp; &nbsp; con.Status__c = 'Active';<br> &nbsp; &nbsp; }<br> &nbsp; &nbsp; Database.update(scope, false);<br> &nbsp; }<br><br> &nbsp; public void finish(Database.BatchableContext bc) {<br> &nbsp; }<br>}</code> <br><br> Which of the following is false about the code snippet above?",
              "Which of the following code snippets correctly defines a column in a lightning-datatable component in a Lightning Web Component (LWC)?", '<code>({ <br> &nbsp; myAction : function(cmp, event, helper) { <br> &nbsp; &nbsp; // add code for the action <br> &nbsp; }, <br> &nbsp; anotherAction : function(cmp, event, helper) { <br> &nbsp; &nbsp; // add code for the action <br> &nbsp;} <br>})</code> <br><br>In Aura Components, what is the purpose of the "controller" object exemplified above in the component bundle?',
              "How can we switch to master branch in Git local repository?"];

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
                 ["Test classes are used to create new Salesforce records.","Test classes are designed to deploy code changes to production.","Test classes verify that Apex code behaves as expected and adheres to best practices.","Test classes are used to schedule Apex jobs for automatic execution."],
                 ["private - protected - public - global","global - public - private - protected","global - public - protected - private","public - global - protected - private"],
                 ["<code>[SELECT Id FROM Account WHERE Name = 'University'];</code>","<code>[SELECT Id FROM Account WHERE Name = '%University%'];</code>","<code>[SELECT Id FROM Account WHERE Name = '*University*'];</code>","<code>[SELECT Id FROM Accounts HAVING Name = 'University'];</code>"], ["Apex","Lightning Components","Visualforce","Assignment Rules"],
                 ["* * ? 14 0 0","* * * 2pm 0 0","0 0 14 * * ?","0 0 2pm ? * *"], ["It is a Batchable class with start(), execute() and finish() methods.","It can retrieve Contact records up to 50 million.","It updates custom Status__c field.","If an error occurs for a record, all transactions are rolled back."],
                 ["<code>[{ label: 'Name', fieldName: 'Name', type: 'text' }]</code>","<code>[{ fieldLabel: 'Name', fieldName: 'Name', type: 'text' }]</code>","<code>[{ name: 'Name', label: 'Name', type: 'text' }]</code>","<code>[{ headerText: 'Name', fieldName: 'Name', type: 'text' }]</code>"],
                 ["To define the component's visual layout and structure.","To handle client-side logic and user interactions.","To specify the component's styling and CSS rules.","To manage server-side data retrieval and manipulation."], ["git master","git branch master","git checkout master","git switch master"]];
const answers = [B,A,A,A,D,C,C,B,A,C,D,A,B,C];

document.querySelector("#numberOfQuestion").innerHTML = test.length;

question.innerHTML = test[n];

for(opt of optionContents){
   opt.innerHTML = options1[m][i];
   i++;
}

// SELECTING OPTIONS
for(opt of options){
   opt.onclick =function () {
     // AGAIN SUBMIT
     if(A.style.backgroundColor == "green" || B.style.backgroundColor == "green" || C.style.backgroundColor == "green" || D.style.backgroundColor == "green"){
       alert("You have already marked the answer");
     }
     else{
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
     var soql = ["SELECT", "FROM", "WHERE", "LIMIT", "IN", "AND", "HAVING", " new ", "extends", "implements", "return"];
     for(s of soql){
       content = content.replaceAll(s, "<span style='color:indigo'>"+s+"</span>");
     }
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
