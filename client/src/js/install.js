const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    
    butInstall.addEventListener('click', async () => {

        event.prompt();

        const choiceResults = await event.userChoice;

        if (choiceResults.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });

    butInstall.style.display ='block';  
});


butInstall.addEventListener('click', async () => {
    const event = await window.deferredPrompt;
    if (event) {
        event.prompt();

        const choiceResults = await event.userChoice;

        if (choiceResults.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        window.deferredPrompt = null;
    }
});


window.addEventListener('appinstalled', (event) => {
    console.log('App was successfully installed on the user\'s device');
});
