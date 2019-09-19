function validaSubscribe() {
    let nome = document.formSubscribe.nome;
    let telefone = document.formSubscribe.telefone;
    let email = document.formSubscribe.email;
    let data = document.formSubscribe.data;
    let gender = document.formSubscribe.gender;

    let regexNome = /^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;
    let regexFone = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexData = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;


    if (!regexNome.test(nome.value)) {
        alert('Preencha o campo "Nome" corretamente!');
        nome.focus();
        return false;
    }

    if (!regexFone.test(telefone.value)) {
        alert('Preencha o campo "Telefone" corretamente!');
        telefone.focus();
        return false;
    }

    if (!regexEmail.test(email.value)) {
        alert('Preencha o campo "E-mail" corretamente!');
        email.focus();
        return false;
    }

    if (!regexData.test(data.value)) {
        alert('Preencha o campo "Data de nascimento" corretamente!');
        data.focus();
        return false;
    }

    if (isEmpty(gender.value)) {
        alert('Selecione o seu gênero sexual!');
        return false;
    }

    alert('Inscrição realizada com sucesso!');
    return true;
}

function confirmClick() {
    let confirm = document.formSubscribe.confirm;
    let btnSubmit = document.getElementById("btn-submit");

    if (confirm.checked) {
        btnSubmit.disabled = false;
        btnSubmit.classList.remove("block");
    } else {
        btnSubmit.disabled = true;
        btnSubmit.classList.add("block");
    }

    return false;
}

function isEmpty(value) {
    if (value == null) {
        return true;
    }
    
    if (typeof value == 'undefined' || value == 'undefined') {
        return true;
    }

    if (typeof value == 'boolean') {
        return false;
    }

    if (Array.isArray(value)) {
        if (value.length <= 0) {
            return true;
        }
    }

    if (typeof value == 'string') {
        value = value.replace(/ /g, "");
    
        if (value.length <= 0) {
            return true;
        }
    }

    if (!isNaN(value)) {
        if (value == 0 || value == '0' || value == 0.0 || value == '0.0' || value == 0.00 || value == '0.00') {
            return true;
        }
    }

    return false;
}