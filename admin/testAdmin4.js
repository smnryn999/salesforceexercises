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
const test = ["What is the purpose of a search layout?", "How are many-to-many relationships implemented in Salesforce?", "How many fields can be assigned to a compact layout?", "What is the primary purpose of a Salesforce Dashboard?",
              '"The Opportunity Amount field should not be more than the Annual Revenue value of the Account it is related with." <br> Which validation rule can ensure this situation?',
              "Compact layouts can be assigned to profiles or individual users. True or false?", "If a user's profile has full CRUD permissions for an object but cannot edit some fields of the records, what could be the reason?",
              "What defines a one-to-many relationship in Salesforce?", "Only one case assignment rule can be active at a time. True or false?", "Which dashboard component type should we use when we have a single value that we want to show within a range of custom values?",
              "For which of the following objects, we do not need to create a process before creating a record type?", "We need to upload 20 thousand records of the custom Book__c object. Which tool to use for this process is the best practice?",
              "Which feature in Salesforce allows you to group and categorize report data into customizable ranges without creating a formula or a custom field?", "What is the primary purpose of global actions in Salesforce?",
              "Delegated Approver can reassign in an approval process. True or false?"];

const options1 = [["To customize the layout of record detail pages.","To manage user permissions and access.","To define the layout of dashboard components.","To define the fields displayed in search results."],
                 ["By using external objects to link records from different objects.","By creating a custom junction object to connect two objects.","By using triggers to directly link records between objects.","By enabling the 'Many-to-Many' option in the object settings."],
                 [3,5,7,10], ["To automate data entry tasks.","To create and manage user accounts.","To display visual representations of data from reports.","To synchronize data with external systems."],
                 ["Amount > Account.AnnualRevenue","Amount < Account.AnnualRevenue","Opportunity.Amount > AnnualRevenue","Opportunity.Amount < AnnualRevenue"], ["True","False"],
                 ["The fields may be read-only in the page layout.","Edit permission may not be granted in field-level security.","The profile license the user has may have been insufficient.","A and B"],
                 ["Creating a custom junction object to link two objects.","Using external objects to establish a connection between records.","Associating a lookup or master-detail relationship between two objects.","Enabling the 'One-to-Many' option in the object settings."],
                 ["True","False"], ["Gauge","Metric","Table","Chart"], ["Case","Contract","Lead","Solution"], ["Data Loader","Dataloader.io","Data Import Wizard","Data From Spreadsheet"], ["Buckets","Groups","Columns","Summary"],
                 ["To create custom objects in Salesforce.","To define validation rules for record fields.","To perform quick actions from anywhere, such as creating records or sending emails.","To manage user access and permissions in Salesforce."], ["True","False"]];
const answers = [D,B,D,C,A,B,D,C,A,A,B,C,A,C,B];

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
