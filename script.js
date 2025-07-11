const textarea = document.getElementById("message");
const counter = document.getElementById("charCount");
const maxLimit = 100;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = `${length} / ${maxLimit}`;

  if (length > maxLimit) {
    counter.classList.add("warning");
    counter.textContent += "Too long!";
  } else {
    counter.classList.remove("warning");
  }
});
