const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prevhh') && slider.append(items[items.ngth -1]);
}
document.addEventListener('click',activate,false);
const b = document.body;
b.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
b.classList.add('noscroll');
