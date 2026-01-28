document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
        });
    });
});
