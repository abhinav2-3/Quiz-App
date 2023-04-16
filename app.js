const questions = [
  {
    que: "Which of the following is the Markup Language",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "In Which year JavaScript was launched",
    a: "1996",
    b: "1994",
    c: "1995",
    d: "None of these",
    correct: "c",
  },
  {
    que: "What does CSS stand for ?",
    a: "Json Object Notion",
    b: "Aalu Kachalu puri sabji",
    c: "Hyper Text Markup Language",
    d: "Cascading Style Sheet",
    correct: "d",
  },
  {
    que: "What does HTML stand for ?",
    a: "Json Object Notion",
    b: "Aalu Kachalu puri sabji",
    c: "Hyper Text Markup Language",
    d: "Cascading Style Sheet",
    correct: "c",
  },
];
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".select");

const loadQuestion = () => {

  if(index === total){
    return endQuiz();
  } 
  reset();
  const data = questions[index];
  queBox.innerHTML = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
  // console.log(data);
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans===data.correct) {
   right++;
  } else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () =>{
  optionInput.forEach((input)=>{
    input.checked = false;
  })
}

const endQuiz = () =>{
  document.getElementById("box").innerHTML = `
  <div style="text-align: center;">
    <h3>Thank you for playing the Quiz</h3>
    <h2>${right}/${total} are correct</h2>
</div>
  `
}
// Initial Call
loadQuestion();
