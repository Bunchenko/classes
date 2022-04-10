const body = document.querySelector('body');

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
        this.$elem = document.createElement('img');
    }
}



function setStyleAndAppend(elementToStyle, elementToAppendIn) {
    elementToStyle.setStyle();
    elementToStyle.appendElement(elementToAppendIn);
}


let arrayOfImages = [
    'https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png',
    'https://st.depositphotos.com/1032577/3238/i/450/depositphotos_32382611-stock-photo-test.jpg'
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
    content: "Some text",
    color: 'white',
    textAlign: 'center',
})

setStyleAndAppend(bottomSection, mainContainer);
// bottomSection.createText('Some text in here');



switch (arrayOfImages.length) {
    case 1:
        const centeredSection = new Section ({
            height: '80%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'green',
            bottom: 100,
            left: 0,
        })

        const contentImage = new Content({
            content: `url(${arrayOfImages[0]}) / 'Test picture'`,
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
            backgroundColor: 'green',
            left: 0,
        })

        const contentImageLeftSection = new Content({
            content: `url(${arrayOfImages[0]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
        })

        const rightSection = new Section ({
            height: '80%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'blue',
            right: 0,
        })

        const contentImageRightSection = new Content({
            content: `url(${arrayOfImages[1]}) / 'Test picture'`,
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
            backgroundColor: 'green',
            left: 0,
        })

        const contentImageLeftDefaultSection = new Content({
            content: `url(${arrayOfImages[0]}) / 'Test picture'`,
            width: '100px',
            height: '100px',
        })
    
        const rightTopSection = new Section ({
            height: '40%',
            width: '50%',
            position: 'absolute',
            backgroundColor: 'blue',
            right: 0,
        })

        const contentImageRightTopSection = new Content({
            content: `url(${arrayOfImages[1]}) / 'Test picture'`,
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

        // const contentImageRightBottomSection = new Content({
        //     content: `url(${arrayOfImages[1]})`,
        //     width: '100px',
        //     height: '100px',
        // })
        
        setStyleAndAppend(leftDefaultSection, mainContainer);

        setStyleAndAppend(contentImageLeftDefaultSection, leftDefaultSection);

        setStyleAndAppend(contentImageRightTopSection, rightTopSection);

        setStyleAndAppend(rightTopSection, mainContainer);

        setStyleAndAppend(rightBottomSection, mainContainer);
    break;
}

