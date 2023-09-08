class TituloDinamoco extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Base do component Ex: <h1>Aldo</h1>
        const componentRoot = document.createElement("h1");
        //componentRoot.textContent = 'Aldo';
        //componentRoot.textContent = 'Minha noticia';
        componentRoot.textContent = this.getAttribute("titulo"); // Isso é uma PROP: Criado uma propriedade "titulo".

        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamoco);