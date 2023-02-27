document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 350,
        strings: "eu sou o Luiz Felipe. Desenvolvedor Full Stack e Salesforce Jr.",
        loop: true
    }).go()
})