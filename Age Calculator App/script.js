let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();

  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth();

  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  //1-1-23
  if (m2 >= m1) {
    //4>=8

    m3 = m2 - m1;
  } else {
    //28/09/23
    y3--;
    m3 = 12 + (m2 - m1); //4-8=12+-4
    //  console.log(m1, m2, m3);//8 4 8
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    //30/9/23
    m3--;

    d3 = getDaysInMonth(y1, m1) + d2 - d1; //31+28-30 =31+-2=29
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerHTML = `You are <span>${y3}</span> years,<span>${m3}</span> month and <span>${d3}</span> days old`;
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
