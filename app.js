document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        strings: "Full Stack Developer",
        loop: true
    }).go()
})