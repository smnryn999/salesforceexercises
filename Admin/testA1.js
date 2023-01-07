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
const test1 = ["Which one is not about security?", "If we make a field required from page layout, it is also accepted required in apex transactions. True or false?", "How many roll-up summary fields can be created at most?", "Privileged access management (PAM) is the set of cybersecurity strategies and technologies that organizations use to control levels of access and permissions for users, accounts, processes, and systems. True or false?", "Which of the following is one of the key principles of Privileged Access Management?", "If a user has edit permission in his/her profile and the OWD setting is public read/write in the Lead object, can he/she change the owner of another user for Lead object?", "As an admin, we only need to share a poll for some users from chatter. How can we handle it?","There is an object with tab settings 'tab hidden' in our profile. Can we read the object if it has 'read' permission from the object permission section?", "In a role hierarchy, what privileges does a top user have over the records of a subordinate exactly?", "We want to make a field read-only for a user. We make that field read-only from both 'Set Field-level Security' section and the page layout. But the user can still edit that field. How do we fix this situation?", "We can add and remove 'Closed' option in Status field for Case object from Support Settings. True or false?", "As an admin, where do you set company working hours?", "Service Setup does not contain",
              "Which is one of the use cases of interactive experiences that we can automate?",
              "Automation that runs when a button is clicked. It can also be run by other automations. <br>This explanation describes which of the following?",
              "What tool do you use to see the scheduled paths that run in the future, such as the path that runs 5 days after an Opportunity closes?",
              "Which formula should we use for validation rule, if we want to be filled a field necessarily when converting a lead?",
              "When a user first requests approval for a record, initial submission actions occur. The default initial submission action locks the record. This action ensures that other users (except for approvers and admins) can’t change the record while it's pending approval. True or false?",
              "What happens if there are two approval steps in an approval process and the first approver rejects the request?",
              "Which of the following fields can be made read-only in a screen flow?"];

const options1 = [["Formula-level","Object-level","Record-level","Field-level"], ["True", "False"], [10,15,20,25], ["True", "False"], ["Least Privilege","Multi-Factor Authentication (MFA)","Audit Privileged Access Users","All of above"], ["Yes, he/she can","No, he/she can't","We cannot say anything"], ["Chatter object already shares polls with all users","We go to public groups and create a group. Then we share the poll","We create a group from group object. Then we share the poll","We cannot share polls from Chatter"], ["Yes","No","It is up to App Manager settings"], ["Read","Read - Edit","Read - Edit - Delete","Read - Edit - Delete - Change Owner"], ["We go to profiles and restrict edit permission for that field","We go to profiles and restrict edit permission for the object","We go to profiles and uncheck 'edit read only fields'","We cannot fix it because Salesforce automatically grants this permission to a user"], ["True","False"], ["Login IP hours","Network Access","Business Hours","Holidays"], ["Service Metrics","Recommended Setup","Service Console","Current Usage"],
                  ["Autolaunched Flows","Approval Processes","Lightning Components","All of above"], ["Screen Flows","Autolaunched Flows","Record-Triggered Flows","Schedule-Triggered Flows"],
                 ["Flow Trigger Explorer","Orchestration Runs List","Time-Based Workflow page","Flow Builder"],
                 ["isConverted = true && ISBLANK(field)","ISBLANK(field)","isConverted = field","isConverted = true || ISBLANK(field)"], ["True","False"],
                 ["The request is submitted to the second approver for the approval","The final rejection actions are executed, setting the position’s approval status to Rejected","More than one approval steps can not be existed in Salesforce","None of above"],
                 ["Text","Email","URL","B and C"]];
const answers1 = [A, B, D, A, D, B, C, B, D, C, A, C, C, D, B, C, A, A, B, D];

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

// BACK BUTTON
/* 
back.onclick = function () {
   if(n!=0) {
      n--;
      question.innerText = test1[n];
   
      i=0;
      m--;
      for(opt of optionContents){
         opt.innerHTML = options1[m][i];
         i++;
      }
   }
   if(index==1) {return;}
   index--;
   document.getElementById("index").innerHTML = index;
   
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
 */
