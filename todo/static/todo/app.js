document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.text').forEach((task, index) => {
    task.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      {
        delay: index * 80,
        duration: 350,
        easing: 'ease-out',
        fill: 'both',
      }
    );
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', () => {
      const button = form.querySelector('button[type="submit"]');

      if (button) {
        button.disabled = true;
        button.textContent = 'Submitting...';
      }
    });
  });
});
