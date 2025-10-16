class FormularioLogin {

    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    esValido(){
        return this.username === 'aaa' || this.password === '123';
    }
}