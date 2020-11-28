  const chalk = require('chalk');
  var readlineSync = require('readline-sync');
  var userName = readlineSync.question("What is your name? ");
  console.log("Hello, Welcome to repl "+userName);

  console.log("Quiz Time! Be ready folks");
  console.log("LEVEL-01");
  console.log("Here we go!");
  var score = 0;
  // function
  function quiz(question, answer){
    var userAnswer = readlineSync.question(question+"\nYour Answer: ");
    if(userAnswer.toUpperCase() === answer){
      console.log("You are right !");
      score++;
      console.log("Current Score: "+score);
    }
    else{
      console.log("You missed it!");
      console.log("Current Score: "+score);
    }
  }
`//array objects`
  var ques = [{question:"what is the capital city of karnataka? \nA.Banglore \nB.Hyderabad \nC.Chennai ", answer:"A" },{question:"what is the capital city of telangana? \nA.Mumbai \nB.Hyderabad \nC.Pune ", answer:"B"},{question:"what is the capital city of kerela? \nA.Banglore \nB.Trivandrum \nC.Chennai ", answer:"B"},{question:"what is the capital city of tamilnadu? \nA.Banglore \nB.Hyderabad \nC.Chennai ", answer:"C"},{question:"what is the capital city of andhra pradesh? \nA.Delhi \nB.Hyderabad \nC.Amaravati ", answer:"C"},{question:"who is the captain of CSK? \nA.Dhoni \nB.Virat \nC.Rohit ", answer:"A"}, {question:"who is the captain of MI? \nA.Pollard \nB.Rohit \nC.Sachin ", answer:"B"}, {question:"who is the captain of DC? \nA.Sreyas \nB.Virat \nC.Rohit ", answer:"A"}, {question:"who is the captain of RCB? \nA.Dhoni \nB.Virat \nC.Rohit ", answer:"B"}, {question:"who is the captain of SRH? \nA.Williamson \nB.Virat \nC.Warner ", answer:"C"}, {question:"who is the prime minister of INDIA? \nA.Ramnadh \nB.Mamatha \nC.Modi ", answer:"C"}, {question:"who is the president of INDIA?\nA.Sachin \nB.Ramnadh \nC.Modi  ", answer:"B"}];
  
  //loops
  for(var i=0;i<5;i++){
    var presentQues = ques[i];
    console.log(quiz(presentQues.question, presentQues.answer));
  }
  console.log("Level 1 is done");
  console.log("Your score is: "+score);
  var k=0;
  if(score<3){
  console.log("You are not eligible for level 2, Better luck next time... Have a great day!!!");}
  else{
    console.log("Congrats on passing level 1, Welcome to level 2 "+userName);
    k=1;
    console.log("Score after level 1: "+score+" points");
    for(var i=5;i<10;i++){
    var presentQues = ques[i];
    console.log(quiz(presentQues.question, presentQues.answer));
  }
  }
  if(k===1){
  if(score<6)
  console.log("You are not eligible for level 3, Better luck next time... Have a great day!!!");
  else{
    console.log("Congrats on passing level 2, Welcome to final level of quiz "+userName);
    console.log("Score after level 2: "+score+" points");
    for(var i=10;i<ques.length;i++){
    var presentQues = ques[i];
    console.log(quiz(presentQues.question, presentQues.answer));
  }
  }
  }
  if(score>=8){
    console.log("You have beaten the high scorer in the leader board, Congratulations!");
    console.log("Please send a screenshot in order to update your name in the leaderboard, Thank you!")
    console.log("Leader Board \n1.Sai-9 points \n2.Kumar-9 points \n3.Surya- 8 points ");
  }
  else{
    console.log("Leader Board \n1.Sai-9 points \n2.Kumar-9 points \n3.Surya- 8 points ");
  }