const publicVapidKey = "";

// check if we are able to use service worker in current browser
const sendNotification = () => {
  if('serviceWorker' in navigator){
    send().catch(err => console.log(err));
  }  
}

// 1. Register Service Worker
// 2. Register Push using browser push api
// 3. Send Push / Notification
async function send(){

  // 1. Register Service Worker
  const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/'
  });

  // 2. Register Push using browser push api
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey
  });

  // 3. Send Push / Notification
  await fetch('/subscribe', {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
}