window.addEventListener("load", function () {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false?e7f65301-5781-4baa-8d16-coinranking0e4eb11d0d78d5a8e32f988a2b18b7f8caeb449bcd2897b6="
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let myContainer = document.getElementById("container");

      for (let i = 0; i < response.length; i++) {
        if (
          response[i].circulating_supply <= 500000000 &&
          response[i].current_price <= 10
        ) {
          let myHtml = `<div class="cryptos">
          <div class="bio">
          <img class="image" src="${response[i].image}">
             <h3>Ticker Symbol and Name: 
             \n${response[i].symbol} ${response[i].name}</h3> <div class="tradingview-widget-container">
         <div id="tradingview_44f68"></div>
             <ul>
                <li>Current Price: ${response[i].current_price}</li>
                <li>Circulating Supply: ${response[i].circulating_supply}</li>
                <li>Market Cap: ${response[i].market_cap}</li>
                <li>Total Supply: ${response[i].total_supply}</li>
                
             </ul>
          </div>
          
       </div>
      <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_44f68"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">BTCUSD Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "width": 980,
  "height": 610,
  "symbol": "BINANCE:BTCUSD",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "studies": [
    "hullMA@tv-basicstudies"
  ],
  "container_id": "tradingview_44f68"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->
       `;
          myContainer.innerHTML += myHtml;
        }
      }
    });
});
