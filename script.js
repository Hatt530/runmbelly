const defaultContacts = [
  { name: "John Doe", phone: "+1234567890" },
  { name: "Jane Smith", phone: "+1987654321" },
  { name: "Customer Support", phone: "+1123456789" },
];

const defaultWhatsAppContacts = [
  { name: "John Doe", phone: "8763235647" },
  { name: "Jane Smith", phone: "1987654321" },
  { name: "Customer Support", phone: "1123456789" },
];

function getContacts() {
  const saved = localStorage.getItem('contacts');
  return saved ? JSON.parse(saved) : [...defaultContacts];
}

let contacts = getContacts();

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach((contact) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.className = "call-link";
    link.href = `tel:${contact.phone}`;
    link.textContent = `${contact.name}: ${contact.phone}`;

    li.appendChild(link);
    list.appendChild(li);
  });
}

function renderWhatsAppContacts() {
  const list = document.getElementById("whatsappList");
  list.innerHTML = "";
  defaultWhatsAppContacts.forEach((contact) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.className = "whatsapp-link";
    button.textContent = `Message ${contact.name}`;
    button.onclick = () => {
      const number = contact.phone.replace(/\D/g, ""); // Remove non-numeric chars
      const message = encodeURIComponent("hi");
      const url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;
      window.open(url, "_blank");
    };

    li.appendChild(button);
    list.appendChild(li);
  });
}

renderContacts();
renderWhatsAppContacts();
