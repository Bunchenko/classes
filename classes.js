
const html = document.querySelector('html');
const body = document.querySelector('body');

html.style.height = '90vh';
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.height = '90vh'


class Container {
    constructor(styleObject) {
        this.styleObject = styleObject;

        this.$elem = document.createElement('div');
    }

    setStyle() {
        Object.assign(this.$elem.style, this.styleObject);
    }

    appendElement(element) {
        element.append(this.$elem);
    }
}

class Section extends Container {
    constructor(styleObject) {
        super(styleObject);
        styleObject.display = 'flex';
        styleObject.alignItems = 'center';
        styleObject.justifyContent = 'center';
    }

    appendElement(element) {
        element.$elem.append(this.$elem)
    }

    createText(text) {
        this.$elem.textContent = text;
    }
}

class Content extends Section {
    constructor(styleObject) {
        super(styleObject);
        this.$elem = document.createElement('span');
    }
}



function setStyleAndAppend(elementToStyle, elementToAppendIn) {
    elementToStyle.setStyle();
    elementToStyle.appendElement(elementToAppendIn);
}


let arrayOfElements = [
    'https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png',
    'https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png',
    1, 2
];




const mainContainer = new Container({
    height: '300px', 
    width: '300px', 
    position: 'relative',
});

setStyleAndAppend(mainContainer, body);


const bottomSection = new Section ({
    height: '20%',
    width: '300px',
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    left: 0, 
    color: 'white',
})

setStyleAndAppend(bottomSection, mainContainer);
bottomSection.createText('Some text in here');



switch (arrayOfElements.length) {
    case 1:
        const centeredSection = new Section ({
            height: '80%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgb(157, 10, 224)',
            bottom: 100,
            left: 0,
        })

        const contentImage = new Content({
            content: `url(${arrayOfElements[0]}) / 'Test picture'`,
            width: '200px',
            height: '200px',
        })
        
        setStyleAndAppend(centeredSection, mainContainer);

        setStyleAndAppend(contentImage, centeredSection);
    break;

    case 2:
        const leftSection = new Section ({
            height: '80%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'rgb(157, 10, 224)',
            left: 0,
        })

        const contentImageLeftSection = new Content({
            content: `url(${arrayOfElements[0]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
        })

        const rightSection = new Section ({
            height: '80%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'rgb(114, 167, 124)',
            right: 0,
        })

        const contentImageRightSection = new Content({
            content: `url(${arrayOfElements[1]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
        })

        setStyleAndAppend(leftSection, mainContainer);

        setStyleAndAppend(contentImageLeftSection, leftSection);

        setStyleAndAppend(rightSection, mainContainer);

        setStyleAndAppend(contentImageRightSection, rightSection);
    break;
    
    default:
        const leftDefaultSection = new Section ({
            height: '80%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'rgb(157, 10, 224)',
            left: 0,
        })

        const contentImageLeftDefaultSection = new Content({
            content: `url(${arrayOfElements[0]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
            color: 'white',
        })
    
        const rightTopSection = new Section ({
            height: '40%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'rgb(114, 167, 124)',
            right: 0,
        })

        const contentImageRightTopSection = new Content({
            content: `url(${arrayOfElements[1]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
        })

        const rightBottomSection = new Section ({
            height: '40%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'red',
            right: 0,
            top: '40%',
        })

        const contentRightBottomSection = new Content({
            color: 'white',
        })
        
        setStyleAndAppend(leftDefaultSection, mainContainer);

        setStyleAndAppend(contentImageLeftDefaultSection, leftDefaultSection);

        setStyleAndAppend(contentImageRightTopSection, rightTopSection);

        setStyleAndAppend(rightTopSection, mainContainer);

        setStyleAndAppend(rightBottomSection, mainContainer);

        setStyleAndAppend(contentRightBottomSection, rightBottomSection);
        contentRightBottomSection.createText(`And more ${arrayOfElements.length - 2} element(s)`);
    break;
}

