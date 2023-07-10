document.addEventListener("DOMContentLoaded", function() {
    const thumbnailItems = document.querySelectorAll(".thumbnail-item");

    thumbnailItems.forEach(item => {
        item.addEventListener("click", function() {
            const videoUrl = item.getAttribute("data-video-url");
            showVideoPopup(videoUrl);
        });
    });

    const popupCloseIcon = document.querySelector(".close-icon");
    popupCloseIcon.addEventListener("click", hideVideoPopup);
});

function showVideoPopup(videoUrl) {
    const popupVideo = document.getElementById("popup-video");
    popupVideo.setAttribute("src", videoUrl);

    const popup = document.getElementById("video-popup");
    popup.style.display = "flex";
}

function hideVideoPopup() {
    const popupVideo = document.getElementById("popup-video");
    popupVideo.pause();
    popupVideo.removeAttribute("src");

    const popup = document.getElementById("video-popup");
    popup.style.display = "none";
}