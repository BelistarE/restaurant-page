import nekopara from '../images/nekopara_by_wildmuffin2000_dfevkdv-414w-2x.png';

const homeDisplay = {
    content: document.querySelector('#content'),
    init: function() {
        console.log('homeDisplay initialized');

        this.content.setAttribute("id", "contentHome"); //set id for css
        
        while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
        }
        this.appendContainers();
        this.appendLeft();
        this.appendRight();

    },

    appendContainers: function() {
        this.left = document.createElement('div');
        this.left.setAttribute("id", "left");
        this.right = document.createElement('div');
        this.right.setAttribute('id', 'right');
        this.content.appendChild(this.left);
        this.content.appendChild(this.right);
    },

    appendLeft: function(){
        const imgContainer = document.createElement('div');
        const nekoparaIMG = new Image();
        nekoparaIMG.src = nekopara;
        imgContainer.appendChild(nekoparaIMG);
        nekoparaIMG.classList.add('nekopara-img')
        this.left.appendChild(imgContainer);
        
    },

    appendRight: function(){
        const titleH1 = document.createElement('h1');
        titleH1.textContent = "BELI'S × ネコぱら";
        const belowTitle = document.createElement('h3');
        belowTitle.textContent = "Bakery";

        //append all
        this.right.appendChild(titleH1);
        this.right.appendChild(belowTitle);
    },
    
};

export default homeDisplay;