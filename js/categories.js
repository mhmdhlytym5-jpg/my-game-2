// categories.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const startBtn = document.getElementById("startBtn");
  const counter = document.getElementById("counter");
  const errorMsg = document.getElementById("errorMsg");
  let selected = [];

  // تحديث واجهة المستخدم
  function updateUI() {
    counter.textContent = `اخترت ${selected.length} من 6`;
    startBtn.classList.toggle("hidden", selected.length !== 6);
    errorMsg.classList.add("hidden");
  }

  // التعامل مع الضغط على البطاقة
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id; // ← نقرأ المعرف

      if (card.classList.contains("card-selected")) {
        card.classList.remove("card-selected");
        selected = selected.filter(c => c !== id);
      } else {
        if (selected.length < 6) {
          card.classList.add("card-selected");
          selected.push(id);
        } else {
          // تجاوز 6 → رسالة خطأ
          errorMsg.classList.remove("hidden");
          errorMsg.classList.add("animate-bounce"); // أنيميشن اهتزاز
          setTimeout(() => errorMsg.classList.remove("animate-bounce"), 600);
          return;
        }
      }
      updateUI();
    });
  });

  // عند الضغط على زر بدء اللعبة
  startBtn.addEventListener("click", () => {
    localStorage.setItem("selectedCategories", JSON.stringify(selected));
    window.location.href = "game.html";
  });

  updateUI();
});
// سلوك القائمة المتنقلة البسيط
    const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn && menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

