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
const test = ["this keyword, integration and LWC?", "In a company called Página Blanca Sales Inc., Rose, Salesforce Developer, need to update 500 thousands opportunity records. Which code snippet should she use?", "Which of the following is true?", "In a Lightning Web Component (LWC) parent-child relationship, what is the purpose of the @api decorator in the child component?",
             "<code>@RestResource(urlMapping='/Account/*') <br> global with sharing class MyRestResource { <br> &nbsp; @HttpDelete <br> &nbsp; global static void doDelete() { <br> &nbsp; &nbsp; RestRequest req = RestContext.request; <br> &nbsp; &nbsp; RestResponse res = RestContext.response; <br> &nbsp; &nbsp; String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1); <br> &nbsp; &nbsp; Account account = [SELECT Id FROM Account WHERE Id = :accountId]; <br> &nbsp; &nbsp; delete account; <br> &nbsp; }<br>}</code>",
             "In Visualforce, what is the purpose of the &lt;apex:pageMessages&gt; component?", "What is the purpose of the following code snippet? <br> <code>for (Account acc : Trigger.new) {<br> &nbsp; if (acc.Type == 'Customer' && acc.AnnualRevenue < 1000000) {<br> &nbsp; &nbsp; acc.AnnualRevenue = 1000000;<br> &nbsp; }<br>}</code>", 'What is the purpose of using the "with sharing" keyword when defining an Apex class?',
             'What is the purpose of the "lightning-record-edit-form" component in Lightning Web Components (LWC)?', "Which of the following code snippets correctly demonstrates the use of the NavigationMixin to navigate to a record detail page in a Lightning Web Component (LWC)?", "Which of the following Apex code snippets demonstrates correct syntax for declaring and initializing a list of String values in Salesforce Apex?", 
             "When integrating with an external REST API in Salesforce, which HTTP method is typically used for making a request to retrieve data from the external system?", "<code>CustomNotificationType notificationType = [SELECT DeveloperName FROM CustomNotificationType WHERE DeveloperName='Custom_Notification']; <br>Messaging.CustomNotification notification = new Messaging.CustomNotification(); <br> notification.setTitle('Apex Custom Notification'); <br> notification.setBody('The notifications are coming from INSIDE the Apex!'); <br> notification.setNotificationTypeId(notificationType.Id); <br> notification.setTargetId(targetId); <br> notification.send(recipientsIds);</code>"]; 
const options1 = [["","","",""],
                  ["<code>public class OpportunityBatch implements Database.Batchable&lt;sObject&gt; { <br> &nbsp; public Database.QueryLocator start(Database.BatchableContext bc) {<br> &nbsp; &nbsp; // Start method logic <br> &nbsp; } <br> &nbsp; public void execute(Database.BatchableContext bc, List&lt;Opportunity&gt; scope) { <br> &nbsp; &nbsp; // Execute method logic <br> &nbsp; } <br> &nbsp; public void finish(Database.BatchableContext bc) { <br> &nbsp; &nbsp; // Finish method logic <br> &nbsp; }<br>}</code>",
                   "<code>public class OpportunityBatch implements Database.Batchable&lt;sObject&gt; { <br> &nbsp; public void execute(Database.BatchableContext bc, List&lt;Opportunity&gt; scope) { <br> &nbsp; &nbsp; // Execute method logic <br> &nbsp; }<br>}</code>","<code>public class OpportunityQueue implements Queueable { <br> &nbsp; public void execute(QueueableContext qc) { <br> &nbsp; &nbsp; // Execute method logic <br> &nbsp; } <br>}</code>","<code>public class OpportunityClass { <br> &nbsp; public static void updateOpportunities(List&lt;Opportunity&gt; listOpp) { <br> &nbsp; &nbsp; // Execute method logic <br> &nbsp; } <br>}</code>"],
                  ["Abstract classes have a constructor method and can have instances.","Abstract classes have a constructor method but cannot have instances.","Abstract classes have not a constructor method but can have instances.","Abstract classes have not a constructor method and cannot have instances."],
                  ["It specifies that parent component should be hidden from child components.","It restricts data binding between parent and child components.","It defines a public property that can be accessed by the parent component.","It controls the styling of the child component's template."], ["","","",""],
                  ["To display a list of all available Salesforce objects by using the Salesforce styling.","To create a custom navigation menu for end users.","To define the structure of a page layout in Lightning Experience.","To display all messages that were generated for all components on the current page."],
                  ["To delete all Account records with Annual Revenue less than 1 million.","To update the Annual Revenue to 1 million for all Customer-type Account records.","To insert new Account records with an Annual Revenue of 1 million.","To calculate the total Annual Revenue of all Account records."],
                  ["It enforces sharing rules, ensuring that records are only visible to users with the appropriate access.","It restricts the class from being shared with other developers in your organization.","It disables sharing rules, making all records visible to any user.","It allows the class to access external APIs securely when sending data to an third-party system."],
                  ["It enables real-time chat functionality within LWC applications.","It is used to create custom modal dialogs for user input.","It simplifies the editing and saving of record data without writing Apex code.","It allows users to view and edit read-only record details."],
                  ["<code>import { LightningElement } from 'lwc'; <br> import { NavigationMixin } from 'lightning/navigation'; <br> <br> export default class MyComponent extends NavigationMixin(LightningElement) { <br> &nbsp; navigateToRecord() { <br> &nbsp; &nbsp; this[NavigationMixin.Navigate]({ <br> &nbsp; &nbsp; &nbsp; type: 'standard__recordPage', <br> &nbsp; &nbsp; &nbsp; attributes: { <br> &nbsp; &nbsp; &nbsp; &nbsp; recordId: '0012E00000muLyrQAE', <br> &nbsp; &nbsp; &nbsp; &nbsp; actionName: 'view', <br> &nbsp; &nbsp; &nbsp; }, <br> &nbsp; &nbsp; }); <br> &nbsp; } <br>}</code>",
                   "<code>import { LightningElement } from 'lwc'; <br> import { NavigationMixin } from 'lightning/navigation'; <br> <br> export default class MyComponent extends NavigationMixin(LightningElement) { <br> &nbsp; navigateToRecord() { <br> &nbsp; &nbsp; this[NavigationMixin.Navigate]({ <br> &nbsp; &nbsp; &nbsp; type: 'standard__objectPage', <br> &nbsp; &nbsp; &nbsp; attributes: { <br> &nbsp; &nbsp; &nbsp; &nbsp; recordId: '0012E00000muLyrQAE', <br> &nbsp; &nbsp; &nbsp; &nbsp; actionName: 'view', <br> &nbsp; &nbsp; &nbsp; }, <br> &nbsp; &nbsp; &nbsp; &nbsp; objectApiName: 'Account', <br> &nbsp; &nbsp; }); <br> &nbsp; } <br>}</code>",
                   "<code>import { LightningElement } from 'lwc'; <br> import { NavigationMixin } from 'lightning/navigation'; <br> <br> export default class MyComponent extends NavigationMixin(LightningElement) { <br> &nbsp; navigateToRecord() { <br> &nbsp; &nbsp; this[NavigationMixin.Navigate]({ <br> &nbsp; &nbsp; &nbsp; type: 'standard__recordPage', <br> &nbsp; &nbsp; &nbsp; attributes: { <br> &nbsp; &nbsp; &nbsp; &nbsp; recordId: '0012E00000muLyrQAE', <br> &nbsp; &nbsp; &nbsp; &nbsp; actionName: 'edit', <br> &nbsp; &nbsp; &nbsp; }, <br> &nbsp; &nbsp; }); <br> &nbsp; } <br>}</code>",
                   "<code>import { LightningElement } from 'lwc'; <br> import { NavigationMixin } from 'lightning/navigation'; <br> <br> export default class MyComponent extends NavigationMixin(LightningElement) { <br> &nbsp; navigateToRecord() { <br> &nbsp; &nbsp; this[NavigationMixin.Navigate]({ <br> &nbsp; &nbsp; &nbsp; type: 'standard__objectPage', <br> &nbsp; &nbsp; &nbsp; attributes: { <br> &nbsp; &nbsp; &nbsp; &nbsp; objectApiName: 'Contact', <br> &nbsp; &nbsp; &nbsp; &nbsp; actionName: 'new', <br> &nbsp; &nbsp; &nbsp; }, <br> &nbsp; &nbsp; }); <br> &nbsp; } <br>}</code>"],
                  ["<code>List&lt;String&gt; names = ['Alice', 'Bob', 'Charlie'];</code>","<code>List&lt;String&gt; names = new List&lt;String&gt;{'Alice', 'Bob', 'Charlie'};</code>","<code>List&lt;String&gt; names = new List('Alice', 'Bob', 'Charlie');</code>","<code>List&lt;String&gt; names;<br> names.add('Alice');<br> names.add('Bob');<br> names.add('Charlie');</code>"], ["GET","POST","PUT","PATCH"], ["","","",""]];
const answers = [A,A,B,C,C,D,B,A,C,A,B,A,D];

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
     var datatypes = ["String", " Date ", "Integer", "Boolean", "Decimal", "override", "virtual", "static","void","class", "LightningElement", "lwc", "Text", "trigger", "interface", "HttpRequest", "HttpResponse", "Http", "Database.QueryLocator"];
     var decorators = ["@AuraEnabled", "@wire", "@api", "@track", " api", "wire", "Trigger.newMap", "Trigger.new", "Trigger.oldMap", "Trigger.old"];
     var punctuation = ["(", ")", "[", "]", "{", "}", ",", '"'];
     var soql = ["SELECT", "FROM", "WHERE", "LIMIT", "IN", "AND", "HAVING", "System.debug", " new ", "extends", "implements", "return "];
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
     for(s of soql){
       content = content.replaceAll(s, "<span style='color:indigo'>"+s+"</span>");
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
