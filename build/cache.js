const version = 2;

var files = [
    "./",
    "index.html",
    "assets/css/style.css",
    "assets/img/bg-application.jpg",
    "assets/img/user-avatar.jpg",
    "assets/fonts/montserrat-bold.woff2",
    "assets/fonts/montserrat-regular.woff2",
    "assets/fonts/icomoon.woff2",
    "js/controllers/TaskController.js",
    "js/models/Task.js",
    "js/models/ListTask.js",
    "js/views/HeaderView.js",
    "js/views/TaskForm.js",
    "js/views/TasksView.js",
]

self.addEventListener("install", function(){
    console.log("Install SW")
})

self.addEventListener("activate", function(){
    caches.open("quero-files-" + version).then(cache => {
        cache.addAll(files)
            .then(function(){
                caches.delete("quero-files-" + (version - 1 ))
                caches.delete("quero-files")
            })
    })
})

self.addEventListener("fetch", function(event){

    let order = event.request
    let promiseResponse = caches.match(order).then(responseCache => {
        let response = responseCache ? responseCache : fetch(order)
        return response
    })

    event.respondWith(promiseResponse)

})