const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    }
}

let inputTag = document.getElementById("amountInput")

function convert() {
    console.log("rieeeee")
    let amount = inputTag.value
    let currencyFrom = document.getElementById("currencyFROMList").value
    let currencyTo = document.querySelector('input[name="currency"]:checked').value;

    result = currencyRatio[currencyFrom.toLowerCase()][currencyTo.toLowerCase()] * amount;

    document.getElementById("resultArea").innerHTML = `result: ${formatCurrency(currencyTo, result)}`
}


function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    })
    return formatter.format(value);
}