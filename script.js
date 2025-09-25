document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const text = "Halo, saya Angga👋";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();
