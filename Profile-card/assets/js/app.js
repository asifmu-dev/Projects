let isLiked = false;
let likeCountValue = 60000;

const heartIcon = document.getElementById("heart-icon");
const likeCount = document.getElementById("like-count");

heartIcon.addEventListener("click", () => {
  isLiked = !isLiked;

  if (isLiked) {
    heartIcon.classList.add("fa-solid");
    likeCountValue += 1;
  } else {
    heartIcon.classList.remove("fa-solid");
    likeCountValue -= 1;
  }

  likeCount.textContent = likeCountValue.toLocaleString();
});
