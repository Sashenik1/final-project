function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString("en-UK", options).toUpperCase();
    formattedDate = formattedDate.replace(/(\d{1,2}) (\w+) (\d{4})/, '$2 $1, $3');

    document.getElementById("date1").textContent = formattedDate;
    document.getElementById("date2").textContent = formattedDate;
    document.getElementById("date3").textContent = formattedDate;
}
updateDate();



function toggleMenu() {
    document.body.classList.toggle('open-mobile-menu');
    document.querySelector(".hamburger").classList.toggle('is-active');
}


async function fetchExchangeRates() {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const data = await response.json();
        
        const usd = data.find(currency => currency.cc === 'USD');
        const eur = data.find(currency => currency.cc === 'EUR');
        
        document.getElementById('usd-rate').textContent = `USD: ${usd.rate.toFixed(2)} UAH`;
        document.getElementById('eur-rate').textContent = `EUR: ${eur.rate.toFixed(2)} UAH`;
    } catch (error) {
        document.getElementById('usd-rate').textContent = 'Ошибка загрузки USD';
        document.getElementById('eur-rate').textContent = 'Ошибка загрузки EUR';
        console.error('Ошибка получения данных:', error);
    }
}

fetchExchangeRates();