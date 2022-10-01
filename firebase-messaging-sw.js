
    importScripts(
      'https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyB-WTC-B0eJjnkxChsEcxs-X4HMbPPkjwI","authDomain":"mana-taxi-7a4f0.firebaseapp.com","projectId":"mana-taxi-7a4f0","storageBucket":"mana-taxi-7a4f0.appspot.com","messagingSenderId":"662835550000","appId":"1:662835550000:web:2a7e917d970ee0c35b5af5","measurementId":"G-2YHHXTC1RW"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    self.addEventListener('push', function (e) {
  data = e.data.json();
  var options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
  };
})

self.addEventListener('notificationclick', function (event) {
  console.log('test', event)
  event.notification.close();
  const url = 'home';
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        console.log("open window")
      }
    })
  )
}, false);
    