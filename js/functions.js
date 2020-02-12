'use strict';

function clearInfo() {
    goodsBox.textContent = '';
    dataBox.textContent = '';
    dataForm.classList.remove('display--block');
}

function addToPage (object) {
    for (let i = 0; i < object.length; i++) {
        let goodsItem = document.createElement('div');
        goodsItem.setAttribute('class', 'goodsItem');
        goodsItem.innerHTML = object[i].name;
        goodsItem.onclick = () => addGoodsDescription(object[i]);
        goodsBox.append(goodsItem);
    }
}

function addGoodsDescription (object) {
    dataBox.innerHTML= '';
    let goodsDescription = document.createElement('div');
    goodsDescription.setAttribute('class', 'goodsDescription');
    goodsDescription.innerHTML = `<div>Price: ${object.price} <br /> Desc: ${object.desc}</div>`;

    createButtonInGoodsDescription(goodsDescription);

    dataForm.classList.remove('display--block');
}
  
function createButtonInGoodsDescription(element) {
    let formButton = document.createElement('button');
    formButton.id = 'form-button';
    formButton.innerText = 'Buy';
    formButton.onclick = () => addForm();
    element.append(formButton); //goodsDescription
    dataBox.append(element);  
}

function addForm() {
    dataForm.classList.add('display--block');
}

