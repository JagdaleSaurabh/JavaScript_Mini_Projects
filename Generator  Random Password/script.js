const passwordBox = document.getElementById("Password");
const length = 6;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
// const symbol = "@#$%^&*()[]|<>-=/{}~+_";
const allcharts = uppercase + lowercase + number;

function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];

  password += lowercase[Math.floor(Math.random() * lowercase.length)];

  password += number[Math.floor(Math.random() * number.length)];
  //   password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allcharts[Math.floor(Math.random() * allcharts.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
