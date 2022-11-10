window.onload = function () {

    let form = document.getElementsByClassName('main')[0];
    let inputFullName = document.getElementById('input-full-name');
    let inputUserName = document.getElementById('input-name');
    let inputMail = document.getElementById('input-mail');
    let inputPassword = document.getElementById('input-password');
    let inputRepeatPassword = document.getElementById('input-repeat-password');
    let inputCheck = document.getElementById('input-check');

    //Пункт 2-3

    let numbers = /[0-9]/g;
    let punctuationMarks = /[,/.]/g

    inputFullName.oninput = function () {
        this.value = this.value.replace(numbers, '');
    }
    inputUserName.oninput = function () {
        this.value = this.value.replace(punctuationMarks, '');
    }

    //Пункт 4

    inputCheck.onchange = (event) => {
        if (event.currentTarget.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    }

    //Пункт 5
    let submitBtn = document.getElementsByClassName('btn')[0];
    submitBtn.addEventListener('click', registration)

    function registration() {
        const isValid = validateFormRegistration()
        if (isValid) {
            document.getElementsByClassName('popupSuccessMenu')[0].style.display = 'block';
        }
    }

    function validateFormRegistration() {
        if (!inputFullName.value) {
            alert('Заполните поле Full Name')
            return false;
        }
        if (!inputUserName.value) {
            alert('Заполните поле Name')
            return false;
        }
        if (!inputMail.value) {
            alert('Заполните поле E-mail')
            return false;
        }
        if (!inputPassword.value) {
            alert('Заполните поле Password')
            return false;
        }
        if (!inputRepeatPassword.value) {
            alert('Заполните поле Repeat Password')
            return false;
        }
        if (inputPassword.value.length < 8) {
            alert('Слишком короткий пароль');
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Разные пароли!');
            return false;
        }
        if (inputCheck.checked !== true) {
            alert('Поставь соглашение!');
            return false;
        }
        return true;

    }


    let closePopup = document.getElementsByClassName('popupBtn')[0];
    closePopup.onclick = function () {
        document.getElementsByClassName('popupSuccessMenu')[0].style.display = 'none';
        document.getElementById('myForm').reset();
        redirectToLogin();
    }

    function redirectToLogin() {
        document.getElementsByClassName('main-title')[0].innerText = 'Log in to the system';
        document.getElementById('inputFullName').remove();
        document.getElementById('mailInput').remove();
        document.getElementById('inputRepeatPassword').remove();
        document.getElementsByClassName('checkLabel')[0].remove();
        submitBtn.innerText = 'Sign In';
        document.getElementsByClassName('main-span')[0].remove();

        submitBtn.removeEventListener('click', registration);
        submitBtn.addEventListener('click', login);
    }

    function login () {
        validateLogin();
    }

    function validateLogin() {
        if (!inputUserName.value || !inputPassword.value) {
            alert('Заполните пустые поля!')
        } else {
            alert('Добро пожаловать, ' + inputUserName.value + '!');
        }
    }

//Пункт 6

    let btnHaveAccount = document.getElementsByClassName('main-span')[0];
    btnHaveAccount.addEventListener('click', redirectToLogin);


}


