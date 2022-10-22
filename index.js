let noOfActiveNotification = 3;


const markAllAsRead = document.querySelector("#mark-all-as-read");
console.log(markAllAsRead);


document.querySelector("#mark-all-as-read").addEventListener("click", function() {
    let active = document.querySelectorAll(".active");
    active.forEach(function(event, index) {
            event.classList.remove("active");
            event.querySelector(".active-dot").classList.add("invisible")
            noOfActiveNotification--;
            document.querySelector("#no-of-unread-notification").textContent = noOfActiveNotification;
        });
});


let notification = document.querySelectorAll(".notification");
console.log(notification);

notification.forEach(function(event, index) {
    event.addEventListener("click", function() {

        if(event.classList.contains("active")) {
            event.classList.remove("active");
            event.querySelector(".active-dot").classList.add("invisible")
            if(noOfActiveNotification > 0) noOfActiveNotification--;
            document.querySelector("#no-of-unread-notification").textContent = noOfActiveNotification;
        }
        
    });
});