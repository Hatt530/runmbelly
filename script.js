function openWhatsApp() {
  const phoneNumber = '18763235647'; // Country code + number
  const message = encodeURIComponent("Hi! I need a pick up from ");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}
