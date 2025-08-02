window.addEventListener("scroll", reveal);
function reveal() {
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 150;
    if (top < visible) el.classList.add("active");
  });
}

// الوضع الداكن / الفاتح
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// القائمة المنسدلة في الجوال
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}
