const nav = document.querySelector('.nav-links');
const toggle = document.querySelector('.nav-toggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if ((currentPage === '' && href === 'index.html') || href === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;
    await navigator.clipboard.writeText(target.textContent.trim());
    const old = button.textContent;
    button.textContent = '已複製';
    setTimeout(() => { button.textContent = old; }, 1200);
  });
});

fetch('/data/project.json')
  .then((response) => response.json())
  .then((data) => {
    document.querySelectorAll('[data-project-name]').forEach((el) => { el.textContent = data.projectName; });
    document.querySelectorAll('[data-group]').forEach((el) => { el.textContent = data.group; });
    document.querySelectorAll('[data-members]').forEach((el) => { el.textContent = data.members.join('、'); });
    document.querySelectorAll('[data-ai-log-url]').forEach((el) => { el.href = data.aiLogUrl; });
    document.querySelectorAll('[data-github-url]').forEach((el) => { el.href = data.githubUrl; });
    document.querySelectorAll('[data-vercel-url]').forEach((el) => { el.href = data.vercelUrl; });
  })
  .catch(() => {});
