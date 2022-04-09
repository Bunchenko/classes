const body = document.querySelector('body');

class Container {
    constructor(styleObject) {
        this.styleObject = styleObject;

        this.$elem = document.createElement('div');
    }

    setStyle() {
        Object.assign(this.$elem.style, this.styleObject);
    }

    appendElement() {
        body.append(this.$elem);
    }
}

class Section extends Container {
    constructor(styleObject) {
        super(styleObject);
    }

    appendElement(element) {
        element.$elem.append(this.$elem)
    }
}

const mainDiv = new Container({
    height: '300px', 
    width: '300px', 
    backgroundColor: 'red',
    position: 'relative',
});

mainDiv.setStyle();
mainDiv.appendElement();

const section1 = new Section ({
    height: '20%',
    width: '300px',
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    left: 0
})

section1.setStyle();
section1.appendElement(mainDiv);

const section2 = new Section ({
    height: '80%',
    width: '50%',
    position: 'absolute',
    backgroundColor: 'yellow',
    bottom: 100,
    left: 0,
})

section2.setStyle();
section2.appendElement(mainDiv);
