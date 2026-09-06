const section = document.querySelector("#stats");
const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        const prefix = counter.dataset.prefix || "";

        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(time) {

            const progress = Math.min(
                (time - startTime) / duration,
                1
            );

            const current = Math.floor(progress * target);

            counter.textContent = prefix + current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = prefix + target;
            }
        }

        requestAnimationFrame(updateCounter);
    });
}


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

            } else {

                counters.forEach(counter => {

                    const prefix = counter.dataset.prefix || "";

                    counter.textContent = prefix + "0";

                });

            }

        });

    },
    {
        threshold: 0.5
    }
);


// IMPORTANT
if (section) {
    observer.observe(section);
}




    const targetDate = new Date("February 12, 2027 14:00:00").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = targetDate - now;

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (distance / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (distance / 1000) % 60
        );

        console.log(days, hours, minutes, seconds);

    }, 1000);
