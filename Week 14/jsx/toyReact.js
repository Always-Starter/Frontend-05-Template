function createElement(type, attributes, ...children) {
    console.log(type, attributes, children);
    let element;
    if (typeof type === 'string') {
        element = new ElementWrapper(type);
    } else
        element = new type;

    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }

    return element;
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class Div {
    constructor() {
        this.root = document.createElement('div');
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(child) {
        child.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

let a = <Div id="a">
    <span>1</span>
    <span>2</span>
    <span>3</span>
</Div>;

a.mountTo(document.body);