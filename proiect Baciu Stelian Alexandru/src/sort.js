"use strict";

let sort = document.querySelector(ID_SORTARE);

sort.addEventListener("change", event => {
    let target = event.target;
    
    function afisareItemsSort() {
        for (let item of data.items) {
            let produs = productTemplate.cloneNode(true);

            produs.querySelector(".name").textContent = item.name;
            produs.querySelector(".price").textContent = item.price;
            produs.querySelector(".image").src = item.image;
            produs.querySelector(".add").dataset.index = clone.indexOf(item);
            produse.appendChild(produs);
        }
    }

    switch (target.value) {
        case "cmpNumeCrescator":
            {
                data.items.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                produse.textContent = "";
                afisareItemsSort()
            }
            break;
        case "cmpNumeDescrescator":
            {
                data.items.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                produse.textContent = "";
                afisareItemsSort()
            }
            break;
        case "cmpPretCrescator":
            {
                data.items.sort((a, b) => {
                    if (a.price < b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                produse.textContent = "";
                afisareItemsSort()
            }
            break;
        case "cmpPretDescrescator":
            {
                data.items.sort((a, b) => {
                    if (a.price > b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
                produse.textContent = "";
                afisareItemsSort()
            }
            break;
    }




})


