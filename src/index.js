console.log("Hewooo!");

import './style.css';
import homeDisplay from './home';
import menuDisplay from './menu';
import aboutDisplay from './about';

(function(){
    const mainModule = {
        init: function(){
            console.log("mainModule loaded")
            homeDisplay.init();
            this.cacheDOM();
            this.btnFunctions();
        },
        cacheDOM: function(){
            this.homeBtn = document.querySelector('#homebtn');
            this.menuBtn = document.querySelector('#menubtn');
            this.aboutBtn = document.querySelector('#aboutbtn');
        },
        btnFunctions: function(){
            this.homeBtn.addEventListener('click', () => {
                homeDisplay.init();
            });
            this.menuBtn.addEventListener('click', () => {
                menuDisplay.init();
            });
            this.aboutBtn.addEventListener('click', () => {
                aboutDisplay.init();
            })
        },
    }
    mainModule.init();
})();

