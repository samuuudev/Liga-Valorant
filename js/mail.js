document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('button');

  function showToast(message, type = "success") {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast-custom ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Remover el toast después de 3 segundos
    setTimeout(() => {
      container.removeChild(toast);
    }, 3000);
  }

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_683i1np';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar inscripción';
        showToast('¡Email enviado correctamente!', 'success');
      })
      .catch((err) => {
        btn.value = 'Enviar inscripción';
        showToast('Error al enviar el email', 'error');
        console.error(err);
      });
  });
});
