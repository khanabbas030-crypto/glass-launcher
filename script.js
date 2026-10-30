const panel = document.getElementById("panel");

document.getElementById("notifyBtn").onclick = () => {
  panel.classList.add("show");
};

document.getElementById("closeBtn").onclick = () => {
  panel.classList.remove("show");
};

document.querySelectorAll(".app").forEach(app => {
  app.onclick = () => {
    alert(app.innerText + " future feature ke liye ready hai!");
  };
});
