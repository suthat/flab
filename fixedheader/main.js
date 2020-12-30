(function() {
    const doc = document.documentElement;
    var currScroll = prevScroll = window.scrollY || doc.scrollTop;
    var currDirection = prevDirection = 0;

    var header = document.querySelector('.header');
    var threshold = 256;
    var toggled;

    var checkScroll = function() {
        currScroll = window.scrollY || doc.scrollTop;
        if (currScroll > prevScroll) {
            currDirection = 2; // down
        } else {
            currDirection = 1; // up
        }
        if (currDirection !== prevDirection) {
            toggled = toggleHeader();
        }
        if (toggled) {
            prevDirection = currDirection;
        }
        prevScroll = currScroll;
    };

    var toggleHeader = function() {
        var isToggled = true;
        if (currDirection === 2 && currScroll > threshold) {
            header.classList.add('hide');
        } else if (currDirection === 1) {
            header.classList.remove('hide');
        } else {
            isToggled = false;
        }
        return isToggled;
    };

    window.addEventListener('scroll', checkScroll);
})(); 
