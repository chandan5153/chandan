document.addEventListener("DOMContentLoaded", function() {
    const contentContainer = document.getElementById('content-container');
    const dynamicImage = document.getElementById('dynamic-image');

    contentContainer.addEventListener('mousemove', function(event) {
        if (event.target.classList.contains('content-item')) {
            const newImage = event.target.getAttribute('data-image');
            dynamicImage.src = newImage;
        }
    });
});
