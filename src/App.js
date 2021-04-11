import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
            console.log(strawberryCounter)
    const [bananaCounter, setBananaCounter] = useState(0);
            console.log(bananaCounter)
    const [appleCounter, setAppleCounter] = useState(0);
            console.log(appleCounter)
    const [kiwiCounter, setKiwiCounter] = useState(0);
            console.log( kiwiCounter)
    const [totalCounter, setTotalCounter] = useState(0);
    console.log( totalCounter)
    const [bananaPrice, setBananaPrice] = useState(0);
    console.log( bananaPrice)
    const [kiwiPrice, setKiwiPrice] = useState(0);
    console.log( kiwiPrice)
    const [applePrice, setApplePrice] = useState(0);
    console.log( applePrice)
    const [strawberryPrice, setStrawberryPrice] = useState(0);
    console.log( strawberryPrice)
    const [priceCounter, setPriceCounter] = useState(0);
    console.log( priceCounter)
    //const [kiwiCounter] = useEffect(0); console.log(useEffect())
//reset naar initial state useeffect reset totonClick={() =>useEffect(0)}

    const {register, handleSubmit, watch, errors} = useForm({
        mode: 'onChange'
    });
    const watchAnders = watch("frequency", "somethingother");

    function onSubmit(data) {
        console.log(data, " heeft besteld: ", strawberryCounter, " 🍓 Aardbeien", bananaCounter, " 🍌 Bananen ", appleCounter, " 🍏 Appels ", kiwiCounter, "🥝 Kiwi's ", "fruittotal price to pay €", totalCounter)
    }
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div id="basket">
                <h4>🍌 Bananen
                    <button id="fruit" type="button" disabled={bananaCounter < 1} onClick={() => setBananaCounter(bananaCounter -1)}> -</button>
                    {bananaCounter}
                    <button id="fruit" type="button" onClick={() => setBananaCounter(bananaCounter +1)}> +</button>
                    <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setBananaCounter(bananaCounter === 0)}>reset 🍌</button>
                </h4>
                <h4>🍓 Aardbeien
                    <button id="fruit" type="button" disabled={strawberryCounter < 1} onClick={() => setStrawberryCounter(strawberryCounter -1)}> -</button>
                    {strawberryCounter}
                    <button id="fruit" type="button" onClick={() => setStrawberryCounter(strawberryCounter +1)}> +</button>
                    <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setStrawberryCounter(strawberryCounter === 0)}>reset 🍓</button>
                </h4>
                <h4>🍏 Appels
                    <button id="fruit" type="button" disabled={appleCounter < 1} onClick={() => setAppleCounter(appleCounter -1)}> -</button>
                    {appleCounter}
                    <button id="fruit" type="button" onClick={() => setAppleCounter(appleCounter +1)}> +</button>
                    <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setAppleCounter(appleCounter === 0)}>reset 🍏</button><br/>
                </h4>
                <h4> 🥝 Kiwi's
                    <button id="fruit" type="button" disabled={kiwiCounter < 1} onClick={() => setKiwiCounter(kiwiCounter -1)}>-</button>
                    {kiwiCounter}
                    <button id="fruit" type="button" onClick={() => setKiwiCounter(kiwiCounter +1)}>+</button>
                    <button id="fruitbasket" type="reset" name="reset fruit" onClick={() => setKiwiCounter(kiwiCounter === 0)}>reset 🥝</button>
                </h4>
                <h3>Besteld in fruitbasket<br/>
                    <br/>
                    <button id="fruittotalbasket" onClick={onSubmit}>
                        Bananen {bananaCounter} 🍌  prijs per stuk € 0.15 <br/>
                        Aarbeien {strawberryCounter} 🍓  prijs per stuk € 0.25<br/>
                        Appels {appleCounter} 🍏  prijs per stuk € 0.15<br/>
                        Kiwi's {kiwiCounter} 🥝  prijs per stuk € 0.35
                    </button><br/>
                    <br/>
                    <button onClick={() => setBananaPrice(bananaCounter * 0.15)}>
                        CLICK totaal 🍌te betalen € {bananaPrice}</button>
                    <button onClick={() => setKiwiPrice(kiwiCounter * 0.35)}>
                        CLICK totaal  🥝  te betalen € {kiwiPrice}</button>
                    <button onClick={() => setApplePrice(appleCounter * 0.15)}>
                        CLICK totaal  🍏 te betalen € {applePrice}</button>
                    <button onClick={() => setStrawberryPrice(strawberryCounter * 0.25)}>
                        CLICK totaal 🍓 te betalen € {strawberryPrice}</button>
                    <button onClick={() => setTotalCounter(bananaPrice + strawberryPrice + kiwiPrice + applePrice)}>
                        CLICK totaal fruitbasket prijs € {totalCounter}</button><br/>
                 </h3>
            </div>
            <h1>Fruit Bestelformulier</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br/>voornaam<br/>
                <input id="lab" ref={register({required: true, minLength: 3, pattern: /^[A-Za-z]+$/i})} type="text" name="fullName" placeholder="voornaam" />
                {errors.fullName && <p>❌naam is verplicht</p>}
                <br/>achternaam<br/>
                <input id="lab" ref={register({required: true,  pattern: /^[A-Za-z]+$/i })} type="text" name="lastName" placeholder="achternaam"/>
                {errors.lastName && <p>❌achternaam is verplicht</p>}
                <br/>leeftijd<br/>
                <input id="lab" ref={register({required:true, min: 18})} type="text" name="age" placeholder="leeftijd"/>
                {errors.age && <p>❌leeftijd van 18 jaar is verplicht</p>}
                <br/>postcode<br/>
                <input id="labe" ref={register({required: true, pattern:/(^[0-9]{4})([A-Za-z0-9]{2}$)?/})} type="text" name="city" placeholder="postcode"/>
                {errors.city && <p>❌postcode is verplicht: 0000ab</p>}
                <br/>huisnummer<br/>
                <input id="labe" ref={register({required: true, pattern: /^\d+[a-zA-Z]*$/})} type="text" name="housenumber" placeholder="huisnummer"/>
                {errors.housenumber && <p>❌huisnummer is verplicht incl. toevoeging i.v.t.</p>}
                <br/>
                <h6>Bezorgfrequentie</h6>
                <label htmlFor="field-frequency">
                    <input ref={register} type="radio" name="frequency" id="field-weekly" value="weekly"/>
                    elke week
                </label><br/>
                <label htmlFor="field-frequency">
                    <input ref={register} type="radio" name="frequency" id="field-anotherweek" value="anotherweek"/>
                    om de week
                </label><br/>
                <label htmlFor="field-frequency">
                    <input ref={register} type="radio" name="frequency" id="field-everymonth" value="everymonth"/>
                    elke maand
                </label><br/>
                <label htmlFor="field-frequentie">
                    <input ref={register} type="radio" name="frequency" id="field-somethingother" value="somethingother"/>
                    anders
                </label>
                <label>
                    {watchAnders === "somethingother" && <input type="text" name="remark bezorgfrequentie" placeholder="bezorgfrequentie" ref={register({})} />}
                </label>
                    <h6>Opmerkingen:</h6>
                <label>
                    <input id="lab" ref={register} type="text" name="remark" placeholder="opmerking"/><br/><br/>
                </label>
                <label htmlFor="field-condition">
                    <input ref={register({required: true})} type="checkbox" name="condition" id="field-agree" value="agreed"/>
                    {errors.condition && <p>❌aanvinken is verplicht</p>}
                    ik ga akkoord met de voorwaarden</label><br/><br/>
                <button type="submit">
                    verzenden
                </button>
                </form>
                </>

);
}

export default App;
