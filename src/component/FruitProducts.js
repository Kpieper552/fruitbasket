import React, { useState } from 'react';
import '../App.css';

function FruitProducts() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [bananaPrice, setBananaPrice] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [kiwiPrice, setKiwiPrice] = useState(0);
    const [applePrice, setApplePrice] = useState(0);
    const [strawberryPrice, setStrawberryPrice] = useState(0);
    const [totalCounter, setTotalCounter] = useState(0);


    function onSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <ul id="basket">
                <li>
                    <h4>🍌 Bananen
                        <button id="fruit" type="button" disabled={bananaCounter < 1} onClick={() => setBananaCounter(bananaCounter -1)}> -</button>
                        {bananaCounter}
                        <button id="fruit" type="button" onClick={() => setBananaCounter(bananaCounter +1)}> +</button>
                        <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setBananaCounter(bananaCounter === 0)}>reset 🍌</button><br/><br/>
                        <button id="fruittotalbasket" onClick={onSubmit}>
                            Bananen {bananaCounter} 🍌 prijs per stuk € 0.15
                        </button>
                        <button onClick={() => setBananaPrice(bananaCounter * 0.15)}>CLICK totaal 🍌te betalen € {Math.round(bananaPrice.toExponential(4) *100) / 100}</button>
                    </h4>
                </li>
                <li>
                    <h4>🍓 Aardbeien
                        <button id="fruit" type="button" disabled={strawberryCounter < 1} onClick={() => setStrawberryCounter(strawberryCounter -1)}> -</button>
                        {strawberryCounter}
                        <button id="fruit" type="button" onClick={() => setStrawberryCounter(strawberryCounter +1)}> +</button>
                        <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setStrawberryCounter(strawberryCounter === 0)}>reset 🍓</button><br/><br/>
                        <button id="fruittotalbasket" onClick={onSubmit}>
                            Aarbeien {strawberryCounter} 🍓 prijs per stuk € 0.25
                        </button>
                        <button onClick={() => setStrawberryPrice(strawberryCounter * 0.25)}>
                            CLICK totaal 🍓 te betalen € {Math.round(strawberryPrice.toExponential(4) * 100) / 100}</button>
                    </h4>
                </li>
                <li>
                    <h4>🍏 Appels
                        <button id="fruit" type="button" disabled={appleCounter < 1} onClick={() => setAppleCounter(appleCounter -1)}> -</button>
                        {appleCounter}
                        <button id="fruit" type="button" onClick={() => setAppleCounter(appleCounter +1)}> +</button>
                        <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setAppleCounter(appleCounter === 0)}>reset 🍏</button><br/><br/>
                        <button id="fruittotalbasket" onClick={onSubmit}>
                            Appels {appleCounter} 🍏  prijs per stuk € 0.15
                        </button>
                        <button onClick={() => setApplePrice(appleCounter * 0.15)}>
                            CLICK totaal  🍏 te betalen € {Math.round(applePrice.toExponential(4) * 100) / 100}</button>
                    </h4>
                </li>
                <li>
                    <h4> 🥝 Kiwi's
                        <button id="fruit" type="button" disabled={kiwiCounter < 1} onClick={() => setKiwiCounter(kiwiCounter -1)}>-</button>
                        {kiwiCounter}
                        <button id="fruit" type="button" onClick={() => setKiwiCounter(kiwiCounter +1)}>+</button>
                        <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setKiwiCounter(kiwiCounter === 0)}>reset 🥝</button><br/><br/>
                        <button id="fruittotalbasket" onClick={onSubmit}>
                            Kiwi's {kiwiCounter} 🥝  prijs per stuk € 0.35
                        </button>
                        <button onClick={() => setKiwiPrice(kiwiCounter * 0.35)}>
                            CLICK totaal  🥝  te betalen € {Math.round(kiwiPrice.toExponential(4) * 100) / 100}</button>
                    </h4>
                </li>
            </ul>
            <div id="basket">
                <h4>Totaal besteld in fruitbasket<br/><br/>
                    <button onClick={onSubmit}>
                        Bananen {bananaCounter} 🍌  <br/>prijs per stuk € 0.15 <br/>
                        Aarbeien {strawberryCounter} 🍓  <br/>prijs per stuk € 0.25<br/>
                        Appels {appleCounter} 🍏  <br/>prijs per stuk € 0.15<br/>
                        Kiwi's {kiwiCounter} 🥝  <br/>prijs per stuk € 0.35
                    </button><br/>
                    <button onClick={() => setTotalCounter(bananaPrice + strawberryPrice + kiwiPrice + applePrice)}>
                        CLICK totaal fruitbasket prijs € {Math.round(totalCounter.toExponential(4) * 100) / 100}</button><br/>
                </h4>
            </div>
        </>
    );
}

export default FruitProducts;
