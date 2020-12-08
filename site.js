
let questions = [
  {
    id: 1,
    question: "a + b = √7 এবং a – b = √3 হলে, ab = ?",
    answer: "1",
    options: [
      "1",
      "2",
      "1/2",
      "5"
    ]
  },
  {
    id: 2,
    question: "2x + 2/x = 4 হলে, 8x^3 + 8/x^3 এর মান কত ?",
    answer: "16",
    options: [
      "16",
      "24",
      "32",
      "84"
    ]
  },
  {
    id: 3,
    question: "120° কোণের সম্পূরক কোণ কত ডিগ্রী?",
    answer: "60",
    options: [
      "30",
      "60",
      "660",
      "240"
    ]
  },
  {
    id: 4,
    question: "সমবাহু ত্রিভুজের একটি বাহুকে উভয় দিকে বর্ধিত করলে উৎপন্ন বহিঃস্থ কোণদ্বয়ের সমষ্টি কত?",
    answer: "240",
    options: [
      "120",
      "240",
      "60",
      "180"
    ]
  },
  {
    id: 5,
    question: "cosecθ = √2 হলে, θ = কত?",
    answer: "45",
    options: [
      "90",
      "60",
      "45",
      "180"
    ]
  },
  {
    id: 6,
    question: "sin(180°-θ) = কত?",
    answer: "sinθ",
    options: [
      "cosθ",
      "sinθ",
      "-sinθ",
      "-cosθ"
    ]
  },
  {
    id: 7,
    question: "a/b = b/c = 2/3 হলে a:c এর মান কত?",
    answer: "4:9",
    options: [
      "2:3",
      "4:3",
      "4:9",
      "1:2"
    ]
  },
  {
    id: 8,
    question: "a,b,c ক্রমিক সমানুপাতী হলে নিচের কোনটি সঠিক?",
    answer: " b^2 = ac",
    options: [
      "b^2 = ac",
      "a^2 = bc",
      "c^2 = ab",
      "None of these above"
    ]
  },
  {
    id: 9,
    question: "দুটি সংখ্যার যোগফল তাদের বিয়োগফলের তিন গুণ হলে সংখ্যা দুটির অনুপাত কত?",
    answer: "2:1",
    options: [
      "1:2",
      "2:1",
      "3:1",
      "1:4"
    ]
  },
  {
    id: 10,
    question: "4,6,10 এর চতুর্থ সমানুপাতী কত?",
    answer: "15",
    options: [
      "15",
      "20",
      "18",
      "17"
    ]
  }
];

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
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
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
