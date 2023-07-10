// Get the necessary elements
const thumbnailItems = document.querySelectorAll('.thumbnail-item');
const popup = document.getElementById('video-popup');
const closeIcon = document.querySelector('.close-icon');
const popupVideo = document.getElementById('popup-video');

// Add event listeners to thumbnail items
thumbnailItems.forEach((item) => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video-url');
        popupVideo.src = videoSrc;
        popup.style.display = 'block';
    });
});

// Close the popup when the close icon is clicked
closeIcon.addEventListener('click', () => {
    popup.style.display = 'none';
    popupVideo.pause();
});