const shareButton = document.querySelector(".share-button");
const toggleSocials = () => {
  const socialWrapper = document.querySelector(".social-wrapper");
  const ShareButtonimg = document.querySelector("img");

  socialWrapper.classList.toggle("active");
  if (ShareButtonimg.src.includes("close")) {
    ShareButtonimg.src = "share.png";
  } else {
    ShareButtonimg.src = "close.png";
  }
};

shareButton.addEventListener("click", toggleSocials);
