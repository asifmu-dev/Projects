const message = document.getElementById("message");
const onlineMessage = "You are online now";
const offlineMessage = "Oops! Internet is disconnected";

const updateMessage = () => {
  const isOnline = navigator.onLine;
  const backgroundColor = isOnline ? "#e7f6d5" : "#ffdde0";
  const textColor = isOnline ? "#689f38" : "#d32f2f";
  const iconClass = isOnline
    ? "uil-wifi icon-circle online"
    : "uil-wifi-slash icon-circle offline";
  const messageText = isOnline ? onlineMessage : offlineMessage;

  message.style.backgroundColor = backgroundColor;
  message.style.color = textColor;
  message.innerHTML = `<i class="uil ${iconClass}"></i> ${messageText}`;
};

updateMessage();
setInterval(updateMessage, 1000);

