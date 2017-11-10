function register(c) {
    let elementName = String(c.name);
    let indexes = [];
    for(let i = elementName.length-1; i >= 0; i--) {
        if(elementName[i] < 'a') {
            if(i !== 0) {
                elementName = elementName.replace(elementName[i], `-${elementName[i].toLowerCase()}`);
            }else {
                elementName = elementName.replace(elementName[i], elementName[i].toLowerCase());
            }
        }
    }

    customElements.define(elementName, c);
}

class RapidElement extends HTMLElement {
    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = this.template();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

class LitHotdog extends RapidElement {
    template() {
        return `booooii`;
    }
}

register(LitHotdog);