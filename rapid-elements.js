function register(c) {
    let elementName = String(c.name);
    for(let i = elementName.length-1; i >= 0; i--) {
        let char = elementName[i];
        if(char < 'a') {
            if(i !== 0) {
                elementName = elementName.replace(char, `-${char.toLowerCase()}`);
            }else {
                elementName = elementName.replace(char, char.toLowerCase());
            }
        }
    }

    const template = document.createElement('template');
    template.innerHTML = c.prototype.template();

    class b extends c {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        template() {}
    }

    customElements.define(elementName, b);
}


class LitHotdog extends HTMLElement {

    template() {
        return `<button>boi</button>`;
    }
}

register(LitHotdog);