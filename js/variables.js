const products = {
    Laptops: [
        { name: 'Apple Macbook', price: 2000, desc: 'Some product description'},
        { name: 'Acer A517',     price: 450,  desc: 'Some product description'},
        { name: 'Dell 3581',     price: 350,  desc: 'Some product description'},
        { name: 'Lenovo 330',    price: 420,  desc: 'Some product description'},
        { name: 'HP Pav G 15',   price: 900,  desc: 'Some product description'},
    ],
    Phones: [
        { name: 'iPhone X',      price: 800,  desc: 'Some product description'},
        { name: 'iPhone 7 plus', price: 600,  desc: 'Some product description'},
        { name: 'Samsung A51',   price: 780,  desc: 'Some product description'},
        { name: 'Meizu M8',      price: 200,  desc: 'Some product description'},
        { name: 'HTC 10',        price: 500,  desc: 'Some product description'},
    ],
    Players: [
        { name: 'Apple TV 4K', price: 450,    desc: 'Some product description'},
        { name: 'Beelink GT1', price: 100,    desc: 'Some product description'},
        { name: 'Android H96', price: 180,    desc: 'Some product description'},
        { name: 'Xiaomi 4K',   price: 120,    desc: 'Some product description'},
        { name: 'Mecool KM3',  price: 200,    desc: 'Some product description'},
    ],
};

const categoriesList = document.querySelector('.categories__list');         
const categoriesListItems = document.querySelectorAll('.categories__item');
const goodsBox = document.querySelector('.goods');
const dataBox = document.querySelector('.data');
const dataForm = document.getElementById('form__container');

let formButton;
let formContainer;