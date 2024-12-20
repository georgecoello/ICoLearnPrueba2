document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll("[data-language]");
    const textsToChange = document.querySelectorAll("[data-section]");

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            fetch(`./assets/js/${button.dataset.language}.json`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("JSON cargado:", data);

                    textsToChange.forEach((el) => {
                        const section = el.dataset.section;
                        const value = el.dataset.value;

                        if (data[section] && data[section][value]) {
                            el.innerHTML = data[section][value];
                        } else {
                            console.error(`Clave no encontrada: ${section}.${value}`);
                            el.innerHTML = "Texto no disponible";
                        }
                    });
                })
                .catch((err) => console.error("Error al cargar el archivo JSON:", err));
        });
    });
});
