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
const test1 = ["What type of relationship in Salesforce represents a parent-child relationship, where the child record can't exist without the parent and inherits its sharing and security settings?", "In Salesforce, what are Record Types used for?",
               "Omni-Channel Routing enables companies to:", "We can deliver connected, intelligent, more personalized service from the phone to the field with Field Service. True or false?", "In Salesforce, what is a primary purpose of a page layout?",
               "Which of the following statements about validation rules is true?", "Which statement accurately describes a profile?", "What can formula fields in Salesforce NOT do?","Which field type can contain an image?","Which formula shows how many days are left until the end of the contract in the Contract object?", 
               "Which Salesforce feature is used to visualize and present data in a graphical format, allowing users to gain insights at a glance?", "Which object does Data Import Wizard not support?", "Which is not a report type in Salesforce?",
               "It is mandatory to enter an entry criteria in the approval process. True or false?"];
const options1 = [["Lookup Relationship","Master-Detail Relationship","External Relationship","Hierarchical Relationship"], ["Providing quality data.","Ensuring that relevant data are entered for each record.","Providing different sets of picklist values for a field.","All of above."],
                  ["Push cases to available agents","Connect customers to the right expert for their issue","Route cases from any service channel","All of the above"], ["True","False"],
                  ["To define the data model for custom objects.","To define the relationships between objects.","To control the visibility of fields for different profiles.","To create custom reports and dashboards."],
                  ["Validation rules run before workflow rules.","Validation rules can only be applied to standard objects, not custom objects.","Validation rules can only be triggered when creating records, not when editing.",'Validation rules can be bypassed by users with the "Modify All Data" permission.'],
                  ["A profile is used to define data validation rules.","A profile controls access to standard and custom objects.","A profile determines the layout of a record detail page.","A profile is used to manage email templates."],
                  ["Perform calculations using fields from related records.","Reference fields from parent records in a master-detail relationship.","Update itself automatically based on data in other fields.","Store and display images directly within the formula."], ["Text Area","Currency","Rich Text","Email"],
                  ["EndDate - TODAY()","DAY(EndDate) - DAY(TODAY())","EndDate - DAY(TODAY)","NOW() - EndDate"], ["Workflow Rules","Approval Processes","Reports and Dashboards","Validation Rules"], ["Account","Contact","Opportunity","Lead"], ["Dynamic","Tabular","Summary","Matrix"], ["True","False"]];
const answers1 = [B,D,D,A,C,A,B,D,C,A,C,C,A,B];

document.querySelector("#numberOfQuestion").innerHTML = test1.length;

question.innerHTML = test1[n];

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
      if(answers1[n].style.backgroundColor == "dodgerblue") {
         explanation.innerHTML = "Correct Answer";
         explanation.style.color = "green";
         corrects++;
         }
      else if(answers1[n].style.backgroundColor == "green") {
         null;
      }
      else {
         explanation.innerHTML = "Wrong Answer";
         explanation.style.color = "red";
         wrongs++;
         for(b of bullets){
            if(b.style.backgroundColor == "dodgerblue" && b != answers1[n]) {
               b.style.backgroundColor = "red";
            }
         }
      }
      
      answers1[n].style.color = "white";
      answers1[n].style.backgroundColor = "green";      
   }
}

// PASS BUTTON
pass.onclick = function () {
   if(n==test1.length-1) {
      explanation.innerHTML = `Test Completed. Total questions: ${test1.length}, correct answers: ${corrects}, wrong answers: ${wrongs}`;
      explanation.style.color = "navy";
   }else {
      n++;
      question.innerHTML = test1[n];
   
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
   
   if(index==test1.length) {return;}
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
   question.innerHTML = test1[n];
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
