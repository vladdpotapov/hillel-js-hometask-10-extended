'use strict';

categoriesList.addEventListener('click', function (event) {
    clearInfo();

    let currentCategory = event.target.innerText;
    let currentProduct;
    for (let key in products) {
        if (currentCategory.value === products.key) {
            currentProduct = products[currentCategory];
            return addToPage(currentProduct);
        } 
    }  
});  

