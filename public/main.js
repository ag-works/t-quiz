var deferredPrompt = null;

if("serviceWorker" in navigator){
    navigator.serviceWorker
        .register("/sw.js")
        .then(event => console.log("Service Worker Registered!", event))
        .catch(err => console.error(err));
}

window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt event fired!");
    event.preventDefault();
    deferredPrompt = event;
    return false;
});