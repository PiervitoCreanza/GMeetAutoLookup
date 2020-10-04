// content.js

var interval = setInterval(() => { // Silently call url every 5 second 
    fetch(window.location.href).then(res => {
        if (res.status === 200) {clearInterval(interval); window.location.reload()} // End the loop and refresh the page on res.status === 200     
    }).catch(() => {clearInterval(interval); window.location.reload()})
}, 5000)