categoriesList.addEventListener('mousedown', function() {
    goodsBox.textContent = '';
    dataBox.textContent = '';
    dataForm.classList.remove('display--block');
});

categoriesList.addEventListener('mouseup', function (event) {
    let currentCategory = event.target.innerText;
    let currentProduct;
    for (let key in products) {
        if (currentCategory.value === products.key) {
            currentProduct = products[currentCategory];
            return addToPage(currentProduct);
        } 
    }  
});  

