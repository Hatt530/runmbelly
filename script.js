document.getElementById('emailForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  const mailtoLink = `mailto:nobilistechcompany@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

  window.location.href = mailtoLink;
});
