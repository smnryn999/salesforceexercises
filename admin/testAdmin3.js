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
const test = ["What is Salesforce?", "What is CRM (Customer Relationship Management)?", "What is a cloud-based system?", "To be able to use Salesforce, we need to install it on our device. True or false?",
              "Why are objects used in Salesforce?", "Which of the following is a standard object in Salesforce?",
              "In Salesforce, what type of relationship allows a record from one object to be linked to multiple records in another object, but it is not mandatory those records in the second object to be related to any record in the first object?",
              "What is a Compact Layout used for in Salesforce?", "What is the primary purpose of the Lead object?",
              "If we cannot delete a field, what could be the reason?", "If we want to make a field required universally and only for some profiles, how do we do it?", "Which field type cannot be used as External ID?",
              "Which of the following is not a function of roll-up summary field?", "In Salesforce, what is the primary purpose of Roles?", "In Salesforce, what is the main purpose of Dashboards?",
              "What does Salesforce Web-to-Case allow you to do?", "What is the primary purpose of an approval process in Salesforce?", "What is an Autolaunched Flow?", "What happens when a lead is converted?", "What is the primary focus of Salesforce Commerce Cloud?"];

const options1 = [["A popular social media platform.","A cloud-based customer relationship management (CRM) software.","A mobile operating system.","A programming language for web development."],
                 ["A system for tracking customer interactions and managing relationships.","A tool for managing employee performance.","A cloud-based data storage solution.","A type of email marketing software."],
                 ["A computer system that relies on local hardware for processing.","A system that stores data on physical storage devices within an organization's premises.","A technology that uses virtualized resources accessible via the internet.","A network of interconnected physical servers managed by a company."],
                 ["True","False"], ["To store and manage data for specific business entities.","To define user roles and permissions.","To create visual interfaces for user interactions.","To automate business processes using workflows."],
                 ["Accountant","Productivity","Workflow","Campaign"], ["Master-Detail Relationship","Many-to-Many Relationship","Lookup Relationship","Hierarchical Relationship"],
                 ["It defines the fields displayed in list views.","It defines the fields that display at the top of a record's detail page.","It defines the fields required for a record's creation.","It defines the fields used in report filtering."],
                 ["To track sales opportunities.","To automate marketing campaigns.","To store information about prospective customers.","To manage customer support cases."],
                 ["It may have been used in a formula field.","It may be a master-detail relationship field in an object whose data is used by a roll-up summary field.","It may be a standard field.","All of above."],
                 ["We mark required checkbox in the field settings.","We make the field required on the page layout.","We make the field required using a validation rule.","None of above. Because, this cannot be performed."],
                 ["Text","Number","Email","URL"], ["AVG()","MIN()","SUM()","COUNT()"], ["To determine which users can access the Salesforce AppExchange.","To define the level of access a user has to records and data.","To assign tasks and events to specific users.","To create custom objects and fields in the database."],
                 ["To import and export data between Salesforce and external systems.","To create custom objects and fields for specific reporting needs.","To visualize and display key business metrics and data from Salesforce reports.","To automate the process of lead generation and qualification."],
                 ["Create new cases in Salesforce org when customers submit inquiries through a web form.","Automatically convert leads into contacts when they submit a web form.","Send automated marketing emails to leads who visit your website.","Generate custom reports based on website traffic."],
                 ["To automatically generate leads from website inquiries.","To enable users to create custom reports and dashboards.","To manage user roles and access levels within the organization.","To streamline and automate the approval of records, such as opportunities."],
                 ["A flow that runs in the background and doesn’t require user interaction.","A flow that we can create an interface and interact with the user.","A flow that automatically send emails to leads and contacts.","A flow that manage user permissions and access controls."],
                 ["The lead is deleted from the system.","The lead is converted into a report for further analysis.","The lead is automatically converted into an opportunity.","The lead is converted into a contact, account, and optionally, an opportunity."],
                 ["Managing customer support tickets.","Providing a platform for online shopping and e-commerce.","Automating lead generation.","Creating custom reports for sales analytics."]];
const answers = [B,A,C,B,A,D,C,B,C,D,C,D,A,B,C,A,D,A,D,B];

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
