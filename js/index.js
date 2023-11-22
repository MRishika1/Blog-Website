const myNum = document.querySelectorAll(".counter-numbers");
let speed = 30;

myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let init_count = parseInt(myCount.innerText, 10); // Parse the initial count as an integer

  const updateNumber = () => {
    init_count = init_count + speed;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      // Call updateNumber again if the initial count is less than the target count
      setTimeout(updateNumber, 0);
    }
  };

  updateNumber();
});

// FAQ
let para = document.getElementById("para");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let para5 = document.getElementById("para5");
let para6 = document.getElementById("para6");
let para7 = document.getElementById("para7");
let para8 = document.getElementById("para8");
let para9 = document.getElementById("para9");

function toggleHide() {
  // Update id to match the actual id in your HTML
  let btn = document.getElementById("btn1");
  let btn1 = document.getElementById("btn2");
  let btn2 = document.getElementById("btn3");
  let btn3 = document.getElementById("btn4");
  let btn4 = document.getElementById("btn5");
  let btn5 = document.getElementById("btn6");
  let btn6 = document.getElementById("btn7");
  let btn7 = document.getElementById("btn8");
  let btn8 = document.getElementById("btn9");
  let btn9 = document.getElementById("btn10");
  
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
  
  if (para1.style.display != "none") {
    para1.style.display = "none";
  } else {
    para1.style.display = "block";
  }

  if (para2.style.display != "none") {
    para2.style.display = "none";
  } else {
    para2.style.display = "block";
  }

  if (para3.style.display != "none") {
    para3.style.display = "none";
  } else {
    para3.style.display = "block";
  }

  if (para4.style.display != "none") {
    para4.style.display = "none";
  } else {
    para4.style.display = "block";
  }

  if (para5.style.display != "none") {
    para5.style.display = "none";
  } else {
    para5.style.display = "block";
  }

  if (para6.style.display != "none") {
    para6.style.display = "none";
  } else {
    para6.style.display = "block";
  }

  if (para7.style.display != "none") {
    para7.style.display = "none";
  } else {
    para7.style.display = "block";
  }

  if (para8.style.display != "none") {
    para8.style.display = "none";
  } else {
    para8.style.display = "block";
  }

  if (para9.style.display != "none") {
    para9.style.display = "none";
  } else {
    para9.style.display = "block";
  }
}

