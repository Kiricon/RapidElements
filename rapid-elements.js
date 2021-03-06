function buildTagName(name) {
    return [...name].map( (x, i) => {
        if( x < 'a') {
            if(i !== 0) {
                return `-${x.toLowerCase()}`;
            }
            return x.toLowerCase();
        }
        return x;
    }).join('');
}

function register(c) {
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
    customElements.define(buildTagName(c.name), b);
}