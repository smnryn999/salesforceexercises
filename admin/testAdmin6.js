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
const test = ["What is the purpose of a Scheduled Flow in Salesforce?", 'In Salesforce Reports, what does the "Group Rows" feature help you achieve?', "What happens to the detail records when the master record in a master-detail relationship is deleted?",
              '"Automatically updates a field on a master record with aggregated values from related detail records." <br><br> What refers to the sentence above?', "In Salesforce automation, what is the purpose of a Decision element in a Flow?",
              "What is the recommended method for bulk data migration into Salesforce?", "What is a Path used in Salesforce for?", "Which summarize feature should we use if we want to display the value in the middle of all row values ​​in a column containing numerical values ​​in reports?"];

const options1 = [["Real-time data processing","Triggering automation based on user actions","Scheduling and automating repetitive tasks","Managing user permissions and security"], ["Filter data based on specific criteria","Summarize data by categorizing records","Customize the report layout and design","Export data to an external system from a report"],
                  ["Detail records are automatically deleted","Detail records remain unaffected","Detail records become read-only","Detail records are moved to the Recycle Bin"], ["Formula Fields","Validation Rules"," Lookup Filters","Roll-up Summary Fields"], ["Initiating the Flow","Executing a specific action","Evaluating some conditions","Determine starting criteria"],
                  ["Manually inputting data through the user interface","Using Data Loader or another bulk data loading tool","Writing custom Apex code for each data record","Importing data directly from external databases"], ["Defining the layout of record detail pages","Guiding users through a predefined process for a record","Setting up access permissions for different user profiles","Creating custom reports and dashboards on App Builder"],
                  ["Avg","Middle","Median","Min"]];
const answers = [C,B,A,D,C,B,B,C];

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
