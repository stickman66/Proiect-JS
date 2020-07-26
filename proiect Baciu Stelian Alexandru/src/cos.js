"use strict";

let basketTemplate = document.querySelector(ID_COS_TEMPLATE).content;
let cos = document.querySelector(ID_ITEMS);

function afisareCos() {
    let produs = basketTemplate.cloneNode(true);
    produs.querySelector(".name").textContent = clone[event.target.dataset.index].name;
    produs.querySelector(".price").textContent = clone[event.target.dataset.index].price;
    produs.querySelector(".remove").dataset.index = event.target.dataset.index;
    produs.querySelector(".total").textContent = clone[event.target.dataset.index].price;
    cos.appendChild(produs);

}
function total() {
    let sum = 0;
    for (let item of cos.querySelectorAll(".total")) {
        sum += parseFloat(item.textContent);
    }
    let total = document.querySelector(ID_TOTAL_COS);
    total.textContent = sum.toFixed(2);
}

produse.addEventListener("click", event => {
    if (event.target.className === "add") {

        let ok = false;

        for (let item of cos.querySelectorAll("tr")) {
            if (clone[event.target.dataset.index].name == item.querySelector(".name").textContent) {
                ok = true;

                {
                    item.querySelector(".cantitate").value++;
                    let tot = parseFloat(item.querySelector(".price").textContent) * item.querySelector(".cantitate").value;
                    item.querySelector(".total").textContent = tot.toFixed(2);
                }

                break;
            }
            else {
                continue
            }
        } if (ok == false) {
            afisareCos();
        }
        total();


    }


})

cos.addEventListener("change", event => {
    if (event.target.className === "cantitate") {
        for (let item of cos.querySelectorAll("tr")) {

            if (event.target.nextSibling.nextElementSibling.dataset.index === item.querySelector(".remove").dataset.index) {

                let tot = parseFloat(item.querySelector(".price").textContent) * item.querySelector(".cantitate").value;
                item.querySelector(".total").textContent = tot.toFixed(2);
            }

        }
        total();
    }
})

cos.addEventListener("click", event => {
    if (event.target.className === "remove") {
        for (let item of cos.querySelectorAll("tr")) {
            if (item.querySelector(".remove").dataset.index === event.target.dataset.index) {
                item.parentNode.removeChild(item);
                break;
            }
        }
        total();
    }
})