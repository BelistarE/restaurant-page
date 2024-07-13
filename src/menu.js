import beefstew from '../images/beefstew.png';
import omurice from '../images/omurice.png';
import milkcoco from '../images/milkcoco.png';
import milfleure from '../images/milfleure.png';
import parfey from '../images/parfey.png';
import matcha from '../images/matcha.png';

const menuDisplay = {
    content: document.querySelector('#content'),
    init: function() {
        console.log('menuDisplay initialized');

        this.content.setAttribute("id", "contentMenu");

        // Clear prev
        while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
        }

        this.createMenuFood('myBeefstew');
        this.createMenuFood('myOmurice');
        this.createMenuFood('myMilkcoco');
        this.createMenuFood('myMilfleure');
        this.createMenuFood('myParfey');
        this.createMenuFood('myMatcha');
    },
    Foods: {
        myBeefstew: {
            foodName: 'beefstew',
            img: beefstew,
            name: 'Beefstew Hamburger',
            pText: 'Delicious combination of beefstew and burger steak!',
            price: '$15.99',
            second: false,
        },
        myOmurice: {
            foodName: 'omurice',
            img: omurice,
            name: 'Melty Omurice',
            pText: 'Omurice with softly cooked eggs! <br> A colorful, enticing dish!',
            price: '$9.99',
            second: true,
        },
        myMilkcoco: {
            foodName: 'milkcoco',
            img: milkcoco,
           name: 'Honey Milk Coco',
            pText: 'Milk cream filled baked coco topped off with plenty of sweet honey!',
            price: '$7.99',
            second: false,
        },
        myMilfleure: {
            foodName: 'milfleure',
            img: milfleure,
            name: "Rockin' Millefeuille",
            pText: 'Tall tower of brownies, icecream, and chocolate.<br> Just like classic Millefeuille!',
            price: '$8.99',
            second: true,
        },
        myParfey: {
            foodName: 'parfey',
            img: parfey,
            name: "Honey Tea Parfait",
            pText: "Bold taste of honey in a sweet desert. <br> We strongly reccomend you to try this!",
            price: '$7.99',
            second: false,
        },
        myMatcha: {
            foodName: 'matcha',
            img: matcha,
            name: "Tapioca Matcha Milk",
            pText: "Matcha milk tea with tapioca pearls",
            price: '$5.99',
            second: true,
        },

    },
    createMenuFood: function(myFood){
        const food = this.Foods[myFood]; //grab the food from the array above

        //div for containing each menu item
        const menuFood = document.createElement('div');
        menuFood.classList.add(`${food.foodName}`);
        menuFood.setAttribute('id', 'menu-food');

        //div for image
        const foodImgContainer = document.createElement('div');
        foodImgContainer.classList.add('food-img');

        //div for food description
        const foodDesc = document.createElement('div');
        foodDesc.classList.add('food-desc');

        const foodImg = new Image();
        foodImg.src = food.img;
        foodImg.setAttribute('id', 'food');
        

        const name = document.createElement('h1');
        name.textContent = `${food.name}`;
        foodDesc.appendChild(name);

        const price = document.createElement('h2');
        price.textContent = `${food.price}`;

        const description = document.createElement("p");
        description.innerHTML = food.pText;

        //align every other food item
        if (food.second) {
            console.log(food);
            menuFood.classList.add('second-menu');
            menuFood.appendChild(foodDesc);
            menuFood.appendChild(foodImgContainer);
        }else{
            menuFood.appendChild(foodImgContainer);
            menuFood.appendChild(foodDesc);
        }

        foodImgContainer.appendChild(foodImg);

        foodDesc.appendChild(price);

        foodDesc.appendChild(description);

        this.content.appendChild(menuFood);
        
    }
};

export default menuDisplay;