document.addEventListener("DOMContentLoaded", function() {
    let nav = document.getElementById("nav");
    let menu = document.getElementById("menu");
    let links = document.getElementById("links");
    var iconShow = document.getElementById("iconShow");
    var iconHide = document.getElementById("iconHide");
    let aLinks = links.getElementsByTagName("a");
    console.log("Not yet Scrolled");

    window.addEventListener("scroll", function() {
        if (this.scrollY > 5) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
            links.classList.remove("linkShow");
            iconShow.classList.remove("iconHide");
            iconHide.classList.add("iconHide");
        }
    });

    // Function to check if all images are loaded
    function checkImagesLoaded() {
        let images = document.getElementsByTagName("img");
        for (const element of images) {
            if (!element.complete) {
                return false; // Return false if any image is not yet loaded
            }
        }
        return true; // All images are loaded
    }

    // Check if all images are loaded
    function checkAndAddLoadedClass() {
        if (checkImagesLoaded()) {
            let load = document.getElementById("load");
            load.classList.add("loaded");
        } else {
            // Check again after a short delay
            setTimeout(checkAndAddLoadedClass, 100);
        }
    }

    // Initially check and add "loaded" class
    checkAndAddLoadedClass();

    // Also listen for the "load" event on window (after all resources including images have loaded)
    window.addEventListener("load", function() {
        let load = document.getElementById("load");
        load.classList.add("loaded");
    });

    AOS.init();  
    
    
    menu.addEventListener("click", function() {
        links.classList.toggle("linkShow");
        iconShow.classList.toggle("iconHide");
        iconHide.classList.toggle("iconHide");
    });
    
    
    
    // Iterate over the HTMLCollection using a for loop
    for (let i = 0; i < aLinks.length; i++) {
        aLinks[i].addEventListener("click", function() {
            // Toggle the classes on each click
            links.classList.toggle("linkShow");
            document.getElementById("iconShow").classList.toggle("iconHide");
            document.getElementById("iconHide").classList.toggle("iconHide");
        });
    }

    $(document).ready(function() {
        var $listing = $(".designs").isotope({
            itemSelector: '.design',
            layoutMode: 'fitRows'
        });
    
        $("#filters").on("click", "button", function() {
            var filterValue = $(this).attr('data-filter');
            $listing.isotope({ filter: filterValue });
        });
    });
    
});