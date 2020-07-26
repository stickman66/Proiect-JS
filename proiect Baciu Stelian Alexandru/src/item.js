"use strict";


let productTemplate = document.querySelector(ID_PRODUCT_TEMPLATE).content;
let produse = document.querySelector(ID_DATA);
const clone = Array.from(data.items);

function afisareItems(){
    for (let item of data.items) {

        let produs = productTemplate.cloneNode(true);
    
        produs.querySelector(".name").textContent = item.name;
        produs.querySelector(".price").textContent = item.price;
        produs.querySelector(".image").src = item.image;
        produs.querySelector(".add").dataset.index = clone.indexOf(item);
    
      
        produse.appendChild(produs);
    }
}

data.items.sort((a, b) => {
    if (a.price < b.price) {
        return -1;
    } else {
        return 1;
    }
})

afisareItems();




