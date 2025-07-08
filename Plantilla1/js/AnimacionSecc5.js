 const zona = document.getElementById('zonaMouse');
        const square = zona.querySelector('.square');

        zona.addEventListener('mousemove', (e) => {
            const rect = zona.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            anime({
                targets: square,
                left: x + 'px',
                top: y + 'px',
                duration: 400,
                easing: 'easeOutExpo'
            });
        });

        zona.addEventListener('mouseleave', (e) => {
            anime({
                targets: square,
                duration: 500,
                easing: 'easeOutBack'
            });
        });