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
const test = ["Which of the following is true for Apex?", "<code>String str = 'hello world'; <br> String str2 = str.capitalize(); <br> System.debug(str2);</code> <br> What is the output of the code snippet above?",
              "Which of the following is a fundamental principle of Object-Oriented Programming (OOP) in Apex?",
              "<code>Contact con =  new Contact(LastName = 'New Contact'); <br><br> List&lt;Contact&gt; listCon = new List&lt;Contact&gt;(); <br> for(integer i=0; i<20; i++){<br><samp>Contact con =  new Contact(LastName = 'New Contact' + i);</samp> <br><samp>listCon.add(con);</samp> <br>}<br> insert listCon;</code> <br> We have already 100 contact records in the production org. How many Leads will there be in the database after the above code snippet runs?",
              'Which of the following query returns all Food__c records with values ​​of "Orange" and "Morello" in a multi-select picklist field named Fruits__c?',
              "A space agency uses Salesforce to manage their spacecraft and missions. Each spacecraft has various parameters and functions. To model the behavior and attributes of these spacecraft, which concept should the space agency implement?",
              "<code>List&ltUser&gt users = [SELECT Id, FIELDS(ALL) FROM User LIMIT 200]; <br> System.debug(users); </code> <br> What is the output of the code snippet above?", "What is the primary purpose of using Asynchronous Apex?",
              "Which of the following Salesforce Apex code snippets represents a correctly implemented Schedulable class?", "Which of the following is true for Visualforce?", "Which Visualforce markup snippet correctly displays a hyperlink that redirects to salesforce.com?"];

const options1 = [["Apex is a strongly typed, object-oriented programming language.","Apex uses syntax that looks like Java.","Apex enables developers to add business logic to most system events.","All of above."],
                  ["hello world","Hello world","Hello World","HELLO WORLD"], ["SQL Query Optimization","Abstraction","HTML Coding","File Input/Output"], [100, 101, 120, 121,],
                  ["<code>[SELECT Id FROM Food__c WHERE Fruits__c = 'Orange,Morello']</code>","<code>[SELECT Id FROM Food__c WHERE Fruits__c IN 'Orange,Morello']</code>","<code>[SELECT Id FROM Food__c WHERE Fruits__c = 'Orange;Morello']</code>","<code>[SELECT Id FROM Food__c WHERE Fruits__c = 'Orange' AND Fruits__c = 'Morello']</code>"],
                  ["Classes and objects","Automation triggers","Standard Controllers","Markup Templates"],
                  ["Displays users with all field values.","Displays users with all standard field values.","Displays users with all custom field values.","Gives a duplicate field error."],
                  ["To execute code at a specific date and time in the future.","To run code immediately upon user request.","To simplify database queries.","To create and implement custom user interfaces."],
                  ["<code>public class MyScheduler implements Schedulable { <br> <samp>public void execute(SchedulableContext context) {</samp> <br> <samp><samp>// Your code here </samp></samp> <br> <samp>}</samp> <br>}</code>","<code>public class MyScheduler { <br> <samp>public void execute() {</samp> <br> <samp><samp>// Your code here </samp></samp> <br> <samp>}</samp> <br>}</code>","<code>public class MyScheduler implements Schedulable { <br> <samp>public void execute() {</samp> <br> <samp><samp>// Your code here </samp></samp> <br> <samp>}</samp> <br>}</code>","<code>public interface MyScheduler extends Schedulable { <br> <samp>public void execute(SchedulableContext context) {</samp> <br> <samp><samp>// Your code here </samp></samp> <br> <samp>}</samp> <br>}</code>"],
                  ["Visualforce uses a tag-based markup language that’s similar to HTML.","Visualforce Pages can be referenced and invoked via a unique URL.","Visualforce pages can be created and modified using Salesforce APIs.","All of above."],
                  ['<code> &lt;apex:outputLink value="https://www.salesforce.com"&gt;www.salesforce.com&lt;/apex:outputLink&gt;</code>','<code>&lt;a name="theLink" href="https://www.salesforce.com"&gt;www.salesforce.com&lt;/a&gt;</code>','<code>&lt;apex:commandLink value="https://www.salesforce.com"&gt;www.salesforce.com&lt;/apex:commandLink&gt;</code>',"A and B"]];
const answers = [D,B,B,C,C,A,D,A,A,D,D];

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
     var datatypes = ["String", " Date ", "Integer", "Boolean", "Decimal", "override", "virtual", "static","void","class", "LightningElement", "lwc", "Text", "trigger", "interface"];
     var decorators = ["@AuraEnabled", "@wire", "@api", "@track", " api", "wire", "Trigger.newMap", "Trigger.new", "Trigger.oldMap", "Trigger.old"];
     var punctuation = ["(", ")", "[", "]", "{", "}", ",", '"'];
     var soql = ["SELECT", "FROM", "WHERE", "LIMIT", "IN", "AND", "HAVING", "System.debug", " new ", "extends", "implements"];
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
