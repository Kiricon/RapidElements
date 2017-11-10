function register(c) {
    let tag = String(c.name);
    for(let i = tag.length-1; i >= 0; i--) {
        let char = tag[i];
        if(char < 'a') {
            if(i !== 0) {
                tag = tag.replace(char, `-${char.toLowerCase()}`);
            }else {
                tag = tag.replace(char, char.toLowerCase());
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

    customElements.define(tag, b);
}


class LitHotdog extends HTMLElement {

    template() {
        return `<button>boi</button>`;
    }
}

class FunInput extends HTMLElement {
    template () {
        return `<input type="text" placeholder="fun input..." />`;
    }
}

register(LitHotdog);
register(FunInput);