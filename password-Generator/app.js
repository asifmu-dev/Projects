const button = document.getElementById("button");
const copyButton = document.getElementById("copyButton");

const getPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 20;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
};

button.addEventListener("click", () => {
  location.reload();
});

copyButton.addEventListener("click", () => {
  const passwordInput = document.getElementById("input");
  passwordInput.select();
  document.execCommand("copy");
});

const passwordInput = document.getElementById("input");
passwordInput.value = getPassword();
