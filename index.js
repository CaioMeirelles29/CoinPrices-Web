fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Ccardano%2Cmatic-network%2Csolana&vs_currencies=usd%2Cbrl&include_24hr_change=true"
).then(res => res.json()).then(json =>{
    const container = document.querySelector(".container");
    const coins = Object.getOwnPropertyNames(json);

    for(let coin of coins){
        const coinInfo = json[`${coin}`];
        const price = coinInfo.brl;
        const change = coinInfo.brl_24h_change.toFixed(5);

        container.innerHTML += `
            <div class="coin ${change < 0 ? "caindo" : "subindo"}">
                <div class="coin-logo">
                    <img src="images/${coin}.png">
                </div>
                <div class="coin-name">
                    <h3>${coin}</h3>
                    <span>/BRL</span>
                </div>
                <div class="coin-price">
                    <span class="price">$${price}</span>
                    <span class="change">$${change}</span>
                </div>
             </div>         
    
        `;
        


    }
});