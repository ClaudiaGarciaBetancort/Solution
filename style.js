function toggleActive(checkbox) {
  const container = checkbox.closest('.extension-item');
  if (checkbox.checked) {
    container.style.opacity = '1';
  } else {
    container.style.opacity = '0.5';
  }
}

function removeExtension(button) {
  const item = button.closest('.extension-item');
  item.remove();
}

function filterExtensions(filter) {
  const items = document.querySelectorAll('.extension-item');
  items.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const isActive = checkbox.checked;

    if (filter === 'all') {
      item.style.display = 'flex';
    } else if (filter === 'active' && isActive) {
      item.style.display = 'flex';
    } else if (filter === 'inactive' && !isActive) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = toggleBtn.querySelector('img');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  themeIcon.src = isDark
    ? '/Reto 1/images/icon-moon.svg'
    : '/Reto 1/images/icon-sun.svg';
});