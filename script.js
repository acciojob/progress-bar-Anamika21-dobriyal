//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');
        let currentActive = 0;

        nextBtn.addEventListener('click', () => {
            currentActive++;
            if (currentActive > circles.length - 1) {
                currentActive = circles.length - 1;
            }
            updateCircles();
        });

        prevBtn.addEventListener('click', () => {
            currentActive--;
            if (currentActive < 0) {
                currentActive = 0;
            }
            updateCircles();
        });

        function updateCircles() {
            circles.forEach((circle, index) => {
                if (index < currentActive + 1) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });
            prevBtn.disabled = currentActive === 0;
            nextBtn.disabled = currentActive === circles.length - 1;
        }