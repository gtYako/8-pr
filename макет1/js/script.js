let loginModal = document.querySelector("#loginModal");
let commentModal = document.querySelector("#commentModal");
let openLoginModal = document.querySelector("#login");
let openCommentModal = document.querySelector("#commentbtn");
let closeModal = document.querySelector("#closeModal");
let closeComment = document.querySelector("#closeComment");

openLoginModal.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

openCommentModal.addEventListener("click", () => {
  commentModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

closeComment.addEventListener("click", () => {
  commentModal.style.display = "none";
});