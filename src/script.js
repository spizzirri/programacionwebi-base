/// DOM: Document Object Model

const buscadorDOM = new BuscadorElementos();
const FORM = buscadorDOM.buscarElemento('#formulario1');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = buscadorDOM.obtenerValorDelElemento('#username');
    const password = buscadorDOM.obtenerValorDelElemento('#password');

    const formularioLogin = new FormularioLogin(username, password);

    if (formularioLogin.esValido()) {
        alert('Usuario o contraseña incorrectos.');
        return;
    }

    event.target.submit();
});

