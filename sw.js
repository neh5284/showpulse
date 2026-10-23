self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : { title: 'ShowPulse Release Alert', body: 'A new episode is airing!' };
  
  const options = {
    body: data.body,
    icon: data.icon || 'https://placehold.co/192x192/c85a38/ffffff?text=Sp',
    badge: 'https://placehold.co/96x96/c85a38/ffffff?text=Sp'
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
