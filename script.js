let userInput = document.getElementById("input-box");
console.log('hey');

userInput.max = new Date().toISOString().split("T")[0];
let btn = document.getElementById("btn");

let result = document.getElementById("result")

btn.addEventListener("click", () => {
  let birthDate = new Date(userInput.value);

  let date1 = birthDate.getDate();
  let month1 = birthDate.getMonth() + 1;
  let year1 = birthDate.getFullYear();

  let today = new Date();

  let date2 = today.getDate();
  let month2 = today.getMonth() + 1;
  let year2 = today.getFullYear();

  let d, m, y;
  y = year2 - year1;

  if (month2 >= month1) {
    m = month2 - month1;
  } else {
    y--;
    m = 12 + month2 - month1;
  }

  if (date2 >= date1) {
    d = date2 - date1;
  } else {
    m--;
    d = daysInMonth(year1, month1) + date2 - date1;
  }
  if(m<0){
    m=11;
    y--;
  }
  console.log(d,m,y);

  result.innerHTML = `You are <span>${y}</span> years, <span>${m}</span> months and <span>${d}</span> days old`
  
});

function daysInMonth(year,month){
    return new Date(year,month,0).getDate()

}