function addToPage (object) {
    for (let i = 0; i < object.length; i++) {
        goodsItem = document.createElement('div');
        goodsItem.setAttribute('class', 'goodsItem');
        goodsItem.innerHTML = object[i].name;
        goodsItem.onclick = () => addGoodsDescription(object[i]);
        goodsBox.append(goodsItem);
    }
}

function addGoodsDescription (object) {
    dataBox.innerHTML= '';
    goodsDescription = document.createElement('div');
    goodsDescription.setAttribute('class', 'goodsDescription');
    goodsDescription.innerHTML = `<div>Price: ${object.price} <br /> Desc: ${object.desc}</div>`;

    formButton = document.createElement('button');
    formButton.id = 'form-button';
    formButton.innerText = 'Buy';
    formButton.onclick = () => addForm();

    goodsDescription.append(formButton);
    dataBox.append(goodsDescription);

    dataForm.classList.remove('display--block');
}
  
function addForm() {
    dataForm.classList.add('display--block');
}