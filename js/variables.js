'use strict';

const products = {
    Honda: [    //Laptops
        { name: 'CBR 1000 RR', price: 15000, desc: 'Some product description'},
        { name: 'CBR 600 RR',  price: 12000, desc: 'Some product description'},
        { name: 'CB 600 R',    price: 10000, desc: 'Some product description'},
        { name: 'VFR 800 F',   price: 11500, desc: 'Some product description'},
        { name: 'NC 750 S',    price: 10500, desc: 'Some product description'},
    ],
    Yamaha: [   //Phones
        { name: 'YZF R1',      price: 15000, desc: 'Some product description'},
        { name: 'YZF R6',      price: 13000, desc: 'Some product description'},
        { name: 'VMAX',        price: 14500, desc: 'Some product description'},
        { name: 'MT 10',       price: 11000, desc: 'Some product description'},
        { name: 'XJ 6',        price: 10500, desc: 'Some product description'},
    ],
    Kawasaki: [  //Players
        { name: 'H2 SX',       price: 25000, desc: 'Some product description'},
        { name: 'Z 1000',      price: 15000, desc: 'Some product description'},
        { name: 'ZX 10R',      price: 13500, desc: 'Some product description'},
        { name: 'ZX 6R',       price: 12000, desc: 'Some product description'},
        { name: 'Z 750R',      price: 10000, desc: 'Some product description'},
    ],
};

const categoriesList = document.querySelector('.categories__list');         
const categoriesListItems = document.querySelectorAll('.categories__item');
const goodsBox = document.querySelector('.goods');
const dataBox = document.querySelector('.data');
const dataForm = document.getElementById('form__container');

let formButton;
// let formContainer;