self.addEventListener('push', e => {

  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: "Notified By Ajinkya",
    icon: "./notification.png"
  });
});