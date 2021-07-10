
let questions = [
  {
    id: 1,
        question: "Feeling down, depressed, or hopeless",
    answer: "[0,1,2,3]",
    options: [
      "Not at all",
      "Several days",
      "Nearly every day",
      "More than half of the days"
    ]
  },
  {
    id: 2,
      question: "Trouble falling or staying asleep, or sleeping too much",
    answer: "[0,1,2,3]",
      options: [
          "Not at all",
          "Several days",
          "Nearly every day",
          "More than half of the days"
      ]
  },
  {
    id: 3,
      question: "Feeling tired or having little energy",
      answer: "[0,1,2,3]",
    options: [
      "Not at all",
      "Several days",
      "Nearly every day",
      "More than half of the days"
    ]
  },
    {
        id: 4,
        question: "Thoughts or plans about hurting yourself?",
        answer: "[0,1,2,3]",
        options: [
            "Hardly Ever",
            "Much of the time",
            "Most of the time",
            "All of the time"
        ]
    },
    {
        id: 5,
        question: "Poor appetite or overeating",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Several days",
            "Nearly every day",
            "More than half of the days"
        ]
    },
    {
        id: 6,
        question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Several days",
            "Nearly every day",
            "More than half of the days"
        ]
    },
    {
        id: 7,
        question: "Trouble concentrating on things, such as reading the newspaper or watching television",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Only Sometimes",
            "Almost Everytime",
            "Everytime"
        ]
    },
    {
        id: 8,
        question: "Moving or speaking so slowly that other people could have noticed",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Several days",
            "Nearly every day",
            "More than half of the days"
        ]
    },
    {
        id: 9,
        question: "Thoughts that you would be better off dead, or of hurting yourself",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Several days",
            "Nearly every day",
            "More than half of the days"
        ]
    },
    {
        id: 10,
        question: "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?",
        answer: "[0,1,2,3]",
        options: [
            "Not at all",
            "Several days",
            "Nearly every day",
            "More than half of the days"
        ]
    }
  ];
window.alert(user_answer);
let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

  
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);
  let user_answer = document.querySelector("li.option.active").innerHTML;
  var outputs=questions[question_count].options;
  console.log(outputs.indexOf(user_answer));
  
  // assign marks according to user answer
  points += outputs.indexOf(user_answer);
  sessionStorage.setItem("points", points);
  console.log(points);

  question_count++;
  show(question_count);
  

}

function show(count) {
  
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
  console.log("hi"+questions[question_count].answer);
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };

  }
  
}