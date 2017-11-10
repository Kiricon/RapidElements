function register(c) {
    let elementName = String(c.name);
    for(let i = elementName.length-1; i >= 0; i--) {
        if(elementName[i] < 'a') {
            if(i !== 0) {
                elementName = elementName.replace(elementName[i], `-${elementName[i].toLowerCase()}`);
            }else {
                elementName = elementName.replace(elementName[i], elementName[i].toLowerCase());
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
    }

    customElements.define(elementName, b);
}


class LitHotdog extends HTMLElement {
    template() {
        return '<button>boi</button>';
    }
    connectedCallback() {
        console.log('connected');
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            alert('ouch');
        });
    }
}

console.log(LitHotdog.prototype.template());


register(LitHotdog);