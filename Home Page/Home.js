let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slide");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.opacity = "0";
            }
            slides[slideIndex - 1].style.opacity = "1";
        }

        // change image every 3 seconds
        setInterval(function() {
            plusSlides(1);
        }, 3000);