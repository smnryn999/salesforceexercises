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
const test = ["Which of the following is used to set highlights panel?", "What is the purpose of Escalation Rules?", "Which of the following is not a dashboard component type?",
              '"Opportunity Close Date must not be a date before today\'s date or a date within the next 1 month." <br><br> Which validation rule will ensure this situation?',
              "In the company called SalesWaves Inc., the sales team uses Salesforce to manage their leads, accounts, and opportunities. One day, Sarah, a new sales representative, needs to quickly access a list of her top priority potential customers. <br><br> Which Salesforce tab should Sarah navigate to?",
              "How many fields on the compact layout does the record highlights section in Lightning Experience use?",
              "We want to automate assigning owners to Leads using the Assignment Rule. Which of the following can we assign?", "What is the main function of Sharing Rules?",
              "What file format can be used for data loading using Data Import Wizard?", "Which of the following field types do compact layouts support?",
              "What function is used for creating a link in a formula field?", "What does Salesforce CPQ primarily help businesses with?",
              "The Applicant__c object stores job applicants' data. The Job_Position__c object shows open job positions. An applicant can apply for more than one job position. And there is no restriction on the number of people applying for a job position. <br><br> In this case, what kind of relationship should be established between these two objects?",
              "What values should we use for checked and unchecked values to import data into a checkbox field from a CSV file?", 'In the company called SalesWaves Inc., sales representative Sarah cannot edit the All Open Leads list view using the "Select Fields to Display" option. What permission should the System Administrator grant to achieve this authority?',
              "Which of the following is the field that should be Unique when creating a User?", "In the company called CloudTech Solutions, some automation processes need to be done on Opportunity records, such as automatic field update when a new record is created, sending a notification after a field value has changed, preventing the deletion of records with certain criteria, sending an email to the user after the record is deleted. Laurel, System Administrator, is considering using Flow for these operations. <br><br> What action can't Laurel perform here with Flow?",
              "If we want to send an email with Flow, which element should we use?", 'In a typical Approval Process, what is the purpose of the "final approval action"?', "Reports"];

const options1 = [["Compact Layout","Page Layout","Search Layout","List View Layout"],
                  ["To automate lead assignment based on criteria.","To escalate cases to higher levels of support based on predefined criteria.","To manage user access and permissions within Salesforce.","To create custom fields for tracking case progress."],
                  ["Chart","Gauge","Metric","Tabular"], ["CloseDate > ADDMONTHS(TODAY(),1)","CloseDate < ADDMONTHS(TODAY(),1)","CloseDate > TODAY() + 30","CloseDate < ADDDAYS(TODAY(),30)"], ["Opportunities tab","Accounts tab","Reports tab","Leads tab"],
                  [3,5,7,10], ["A user","A queue","A public group","A and B"], ["To automate lead conversion processes.","To define criteria for record ownership changes.","To extend sharing access to records based on criteria or owner.","To expand profile permissions due to new requirements"],
                  ["CSV","TXT","XML","DOCX"], ["Phone","Text Area","Multi-select Picklist","Rich Text Area"], ["LINK()","HYPERLINK()","FIND()","OPEN()"], ["Customer Relationship Management","Inventory Management","Configure complex product offerings and pricing","Social Media Marketing and Advertising"],
                  ["Lookup Relationship","Master-Detail Relationship","Many-to-Many Relationship","Hierarchical Relationship"], ["1 - 0","Yes - No","True - False","Checked - Unchecked"], ["System Permissions - Create and Customize List Views","System Permissions - Manage Public List Views","App Permissions - View and Edit Converted Leads","App Permissions - Manage Leads"],
                  ["Name","Email","Profile","Username"], ["before creation an opportunity","after creation an opportunity","before deletion an opportunity","after deletion an opportunity"], ["Assignment","Screen","Action","Subflow"],
                  ["To reject the record if it doesn't meet approval criteria.","To define what happens after the record has been approved.","To specify the initial approver for the record.","To automatically submit the record for approval."], ["","","",""]];
const answers = [A,B,D,B,D,C,D,C,A,A,B,C,C,A,B,D,D,C,B,A];

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
