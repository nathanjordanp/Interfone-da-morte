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

    // Carregar estado das checkboxes do localStorage, se existir
    if (localStorage.getItem('matheusCheckbox') === 'true') {
        matheusCheckbox.checked = true;
    }
    if (localStorage.getItem('italoCheckbox') === 'true') {
        italoCheckbox.checked = true;
    }
    if (localStorage.getItem('natanCheckbox') === 'true') {
        natanCheckbox.checked = true;
    }

    // Carregar créditos do localStorage, se existirem
    creditoMatheus.value = localStorage.getItem('creditoMatheus') || '0';
    creditoItalo.value = localStorage.getItem('creditoItalo') || '0';
    creditoNatan.value = localStorage.getItem('creditoNatan') || '0';

    // Atualizar contadores de créditos
    contadorMatheus.textContent = creditoMatheus.value;
    contadorItalo.textContent = creditoItalo.value;
    contadorNatan.textContent = creditoNatan.value;

    matheusCheckbox.addEventListener('change', atualizarCredito);
    italoCheckbox.addEventListener('change', atualizarCredito);
    natanCheckbox.addEventListener('change', atualizarCredito);

    function atualizarCredito() {
        const checkboxesMarcadas = [matheusCheckbox.checked, italoCheckbox.checked, natanCheckbox.checked];
        const marcadas = checkboxesMarcadas.filter(checkbox => checkbox).length;

        if (marcadas === 2) {
            if (!matheusCheckbox.checked && parseInt(creditoMatheus.value) > 0) {
                matheusCheckbox.checked = false;
                italoCheckbox.checked = false;
                natanCheckbox.checked = false;
                creditoMatheus.value = Math.max(0, parseInt(creditoMatheus.value) - 1);
                contadorMatheus.textContent = creditoMatheus.value;
            } else if (!italoCheckbox.checked && parseInt(creditoItalo.value) > 0) {
                matheusCheckbox.checked = false;
                italoCheckbox.checked = false;
                natanCheckbox.checked = false;
                creditoItalo.value = Math.max(0, parseInt(creditoItalo.value) - 1);
                contadorItalo.textContent = creditoItalo.value;
            } else if (!natanCheckbox.checked && parseInt(creditoNatan.value) > 0) {
                matheusCheckbox.checked = false;
                italoCheckbox.checked = false;
                natanCheckbox.checked = false;
                creditoNatan.value = Math.max(0, parseInt(creditoNatan.value) - 1);
                contadorNatan.textContent = creditoNatan.value;
            }
        } else if (marcadas === 3) {
            matheusCheckbox.checked = false;
            italoCheckbox.checked = false;
            natanCheckbox.checked = false;
        }

        // Atualizar o estado das checkboxes e dos créditos no localStorage
        localStorage.setItem('matheusCheckbox', matheusCheckbox.checked);
        localStorage.setItem('italoCheckbox', italoCheckbox.checked);
        localStorage.setItem('natanCheckbox', natanCheckbox.checked);
        localStorage.setItem('creditoMatheus', creditoMatheus.value);
        localStorage.setItem('creditoItalo', creditoItalo.value);
        localStorage.setItem('creditoNatan', creditoNatan.value);
    }
});
