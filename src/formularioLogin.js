export class FormularioLogin {

    #username;
    #password;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    get username() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    esValido(){
        return this.#username === 'aaa' || this.#password === '123';
    }
}