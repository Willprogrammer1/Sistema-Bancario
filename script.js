// ELEMENTOS PRINCIPAIS
let saldoTotal = document.querySelector(".saldoTotal")
let quantidade = 0
let tipoOperacao = ""

// INICIALIZA O SALDO NA TELA
atualizarSaldo()

// ABRE O MODAL
function abrirModal(tipo) {
    tipoOperacao = tipo

    document.getElementById("modalTitle").innerText =
        tipo === "add" ? "Adicionar saldo" : "Remover saldo"

    document.getElementById("valorInput").value = ""
    
    let erro = document.getElementById("modalError")
    erro.textContent = ""
    erro.style.display = "none"

    document.getElementById("modal").classList.add("active")
}

// FECHA O MODAL
function fecharModal() {
    document.getElementById("modal").classList.remove("active")
}

// CONFIRMA A OPERAÇÃO (SEM ALERT, SEM GOOGLE)
function confirmar() {
    let input = document.getElementById("valorInput")
    let erro = document.getElementById("modalError")
    let valor = parseFloat(input.value)

    erro.textContent = ""
    erro.style.display = "none"

    // VALIDAÇÃO
    if (isNaN(valor) || valor <= 0) {
        erro.textContent = "Digite um valor válido"
        erro.style.display = "block"
        return
    }

    // OPERAÇÃO
    if (tipoOperacao === "add") {
        quantidade += valor
    } else {
        if (valor > quantidade) {
            erro.textContent = "Saldo insuficiente"
            erro.style.display = "block"
            return
        }
        quantidade -= valor
    }

    atualizarSaldo()
    fecharModal()
}

// ATUALIZA O SALDO NA TELA
function atualizarSaldo() {
    saldoTotal.textContent = quantidade.toFixed(2)
}
