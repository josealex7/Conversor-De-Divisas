let monedaActual, monedaA_select, monedaC_select, monedaConvertir, valorActual = 0,
    nuevoValor, monedaDolar;
var moneda = ['Elije tu moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];



const obtenerValores = () => {
    monedaActual = document.getElementById("moneda_actual");
    monedaA_select = monedaActual.options[monedaActual.selectedIndex].text;
    monedaConvertir = document.getElementById("moneda_convertir");
    monedaC_select = monedaConvertir.options[monedaConvertir.selectedIndex].text;
    valorActual = Number(document.getElementById('valor').value);
    if (monedaC_select == 'Elige tu moneda' || monedaA_select == 'Elige tu moneda') {
        alert("Debe seleccionar un tipo de moneda");
    } else if (monedaA_select == monedaC_select) {
        alert("debe selecionar un tipo de moneda distinto para convetir")
    } else if (isNaN(valorActual)) {
        alert("Debe ingresar un valor numerico")
    } else if (valorActual == 0) {
        alert("Debe ingresar un valor a convertir")
    } else {
        convertirMonedaDolar();
        crearLabel();
    }
}



const convertirMonedaDolar = () => {
    moneda.forEach(element => {
        if (monedaA_select === element) {
            if (element === 'Dolar') {
                monedaDolar = valorActual;
            } else if (element === 'Peso Mexicano') {
                monedaDolar = (valorActual / 20.28)
            } else if (element === 'Peso Colombiano') {
                monedaDolar = valorActual / 3780.36;
            } else if (element === 'Euro') {
                monedaDolar = valorActual / 0.86;
            } else {
                monedaDolar = valorActual / 0.72;
            }
        }

    });

    convertirMoneda();
}

const convertirMoneda = () => {
    moneda.forEach(element => {
        if (monedaC_select === element) {
            if (element === 'Dolar') {
                nuevoValor = monedaDolar;
            } else if (element === 'Peso Mexicano') {
                nuevoValor = monedaDolar * 20.28;
            } else if (element === 'Peso Colombiano') {
                nuevoValor = monedaDolar * 3780.36;
            } else if (element === 'Euro') {
                nuevoValor = monedaDolar * 0.86;
            } else {
                nuevoValor = monedaDolar * 0.72;
            }
        }
    });
    nuevoValor = (nuevoValor.toFixed(2));
}

const crearLabel = () => {

    var newlabel = document.createElement("label");
    newlabel.setAttribute('for', 'labelvalor');
    newlabel.innerHTML = new Intl.NumberFormat('es-DE').format(nuevoValor);
    document.getElementById('contenedor').innerHTML = '';
    document.getElementById('contenedor').appendChild(newlabel);
}

let boton = document.getElementById('boton');
boton.addEventListener('click', obtenerValores, true);