const paymentMatches = {
    'C': 'Cash',
    'CC': 'Credit Card',
};

const User = {};

const formResultsParent = document.getElementById('main');

const form   = document.querySelector('form[name="mainForm"]');

const inputFirstName = document.getElementById('fName');
const inputSecondName = document.getElementById('sName');
const inputAddress = document.getElementById('addr');
const inputQuantity = document.getElementById('quantity');

const saveButton = document.querySelector('input[name="saveButton"]');
saveButton.addEventListener('click', function() {
    const userFirstName = form.elements.firstName.value;    
    User.Name = userFirstName;

    const userSecondName = form.elements.secondName.value;
    User.Surname = userSecondName;

    const userAddress = form.elements.address.value;
    User.Address = userAddress;

    const userQuantity = form.elements.quantity.value;
    User.Quantity = userQuantity;

    const userCity = form.elements.city.options[form.elements.city.selectedIndex].text;
    User.City = userCity;

    const userPayment = getUserPayment();
    User.Payment = userPayment;

    const userPost = form.elements.post.options[form.elements.post.selectedIndex].text;
    User.Post = userPost;

    const userComment = form.elements.comment.value;
    User.Comment = userComment;

    if (!inputFirstName.value || !inputSecondName.value || !inputAddress.value || !inputQuantity) {
        inputFirstName.style.border = '1px solid red';
        inputSecondName.style.border = '1px solid red';
        inputAddress.style.border = '1px solid red';
        inputQuantity.style.border = '1px solid red';
        return false;
    }

    form.remove();

    addClientForm();
});

function getUserPayment() {
    let checkedPayment = form.elements.payment.value;
    let payment = paymentMatches[checkedPayment];
    return payment;
}

function showData(obj) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += key + ":" + ' ' + obj[key] + "<hr>";
        }
    }
    return result;
}

function addClientForm() {
    let formContainer = document.getElementById('form__container');
    let box = document.createElement('div');
    box.setAttribute('class', 'dataResultBox'); 
    formContainer.prepend(box);  
    box.innerHTML = showData(User);
}
