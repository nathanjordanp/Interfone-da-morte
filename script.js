document.addEventListener("DOMContentLoaded", function() {
    const matheusCheckbox = document.getElementById('matheus');
    const italoCheckbox = document.getElementById('italo');
    const natanCheckbox = document.getElementById('natan');

    const contadorMatheus = document.getElementById('contador-matheus');
    const contadorItalo = document.getElementById('contador-italo');
    const contadorNatan = document.getElementById('contador-natan');

    const creditoMatheus = document.getElementById('Credito-matheus');
    const creditoItalo = document.getElementById('Credito-italo');
    const creditoNatan = document.getElementById('Credito-natan');

    matheusCheckbox.addEventListener('change', atualizarCredito);
    italoCheckbox.addEventListener('change', atualizarCredito);
    natanCheckbox.addEventListener('change', atualizarCredito);

    function atualizarCredito() {
        const checkboxesMarcadas = [matheusCheckbox.checked, italoCheckbox.checked, natanCheckbox.checked];
        const marcadas = checkboxesMarcadas.filter(checkbox => checkbox).length;

        if (marcadas === 2) {
            if (!matheusCheckbox.checked) {
                creditoMatheus.value = Math.max(0, parseInt(creditoMatheus.value) - 1);
                contadorMatheus.textContent = creditoMatheus.value;
            } else if (!italoCheckbox.checked) {
                creditoItalo.value = Math.max(0, parseInt(creditoItalo.value) - 1);
                contadorItalo.textContent = creditoItalo.value;
            } else if (!natanCheckbox.checked) {
                creditoNatan.value = Math.max(0, parseInt(creditoNatan.value) - 1);
                contadorNatan.textContent = creditoNatan.value;
            }
        }

        if (marcadas === 3) {
            matheusCheckbox.checked = false;
            italoCheckbox.checked = false;
            natanCheckbox.checked = false;
        }
    }
});