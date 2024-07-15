const aboutDisplay = {
    content: document.querySelector('#content'),
    init: function(){
        console.log("aboutDisplay initialized");

        this.content.setAttribute("id", "aboutMenu");

        // Clear prev
        while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
        }
        this.appendContainers();
        this.appendFirst();
    },
    appendContainers: function(){
        this.first= document.createElement('div');
        this.first.setAttribute("id", "first");
        
        this.content.appendChild(this.first);
    },
    appendFirst: function() {
        const aboutTitle = document.createElement("h2");
        aboutTitle.textContent = "About us";
    
        const aboutDescTextCont = "We are a small bakery created in collaboration with" +
            " the popular Nekopara series. Indulge in our delightful selection of freshly baked pastries,"+
            " from fluffy omurice to decadent desserts that melt in your mouth. Savor the essence of Japan"+
            " with every sip of our carefully crafted matcha drinks, perfectly balancing tradition with innovation.<br>"+
            " In collaboration with the beloved Nekopara series, our establishment brings a touch of whimsy and warmth to every visit."+
            " Whether you're a fan of Chocola and Vanilla or simply a lover of good food, BELI'S × NEKOPARA promises a memorable dining "+
            "experience that captures the essence of both Japanese culinary tradition and playful anime culture.";
    
        const aboutDescElement = document.createElement("div");
        aboutDescElement.innerHTML = aboutDescTextCont;
    
        // Append elements to the body or another appropriate parent element
        this.first.appendChild(aboutTitle);
        this.first.appendChild(aboutDescElement);
    }
    
}

export default aboutDisplay;
