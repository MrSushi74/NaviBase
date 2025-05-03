window.addEventListener('load', () => {
    const intro = document.getElementById('opening2');
    setTimeout(() => {
        intro.classList.add('active');
    }, 500); 
});
window.onload = function() {
    window.scrollTo(0, 0);
};
    function scaleMap() {
        const img = document.querySelector('img[usemap="#mainlogo"]');
        const originalWidth = 600; // Original width of the image
        const scaleFactor = img.clientWidth / originalWidth;
        
        const areas = document.querySelectorAll('map[name="mainlogo"] area');
        areas.forEach(area => {
            const coords = area.dataset.originalCoords.split(',').map(Number);
            const scaledCoords = coords.map(coord => coord * scaleFactor);
            area.coords = scaledCoords.join(',');
        });
    }

window.addEventListener('resize', scaleMap);
window.addEventListener('load', scaleMap);
$(window).scroll(function(e){ 
    var $el = $('#slidercontainer'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
        $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed){
        $el.css({'position': 'static', 'top': '0px'}); 
    } 
    });
// Add a click event listener to all sliderlogo elements
document.querySelectorAll('.sliderlogo').forEach(slider => {
    slider.addEventListener('click', function () {
        // Reset background color for all sliderlogo elements
        document.querySelectorAll('.sliderlogo').forEach(item => {
            item.style.backgroundColor = ''; // Clear any previously applied background colors
        });

        // Set background color for the clicked element
        this.style.backgroundColor = 'yellow';
    });
});


