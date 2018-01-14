const version = 1;

var files = [
    "./",
    "index.html",
    "assets/css/style.css",
    "assets/img/bg-application.jpg",
    "assets/img/user-avatar.jpg",
    "assets/fonts/montserrat-bold.woff2",
    "assets/fonts/montserrat-regular.woff2",
    "assets/fonts/icomoon.woff2",
    "js/index.js",
    "js/models/Task.js",
    "js/models/Message.js",
    "js/models/ListTask.js",
    "js/controllers/TaskController.js",
    "js/views/View.js",
    "js/views/ListView.js",
    "js/views/MessageView.js",
]

self.addEventListener('install', function (event) {
    console.log(files);
    event.waitUntil(
        caches.open(version).then(function (cache) {
            return cache.addAll(files);
        })
    );
});

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             return response || fetch(event.request);
//         })
//     );
// });

// self.addEventListener('activate', function (event) {
//     var cacheWhitelist = ['v2'];

//     event.waitUntil(
//         caches.keys().then(function (keyList) {
//             return Promise.all(keyList.map(function (key) {
//                 if (cacheWhitelist.indexOf(key) === -1) {
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
// });


// self.addEventListener("activate", function(){
//     caches.open("quero-files-" + version).then(cache => {
//         cache.addAll(files)
//             .then(function(){
//                 caches.delete("quero-files-" + (version - 1 ))
//                 caches.delete("quero-files")
//             })
//     })
// })


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

