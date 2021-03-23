import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
//import {firstInputPolyfill, resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0); console.log(strawberryCounter)
    const [bananaCounter, setBananaCounter] = useState(0); console.log(bananaCounter)
    const [appleCounter, setAppleCounter] = useState(0); console.log(appleCounter)
    const [kiwiCounter, setKiwiCounter] = useState(0); console.log( kiwiCounter)
    //const [kiwiCounter] = useEffect(0); console.log(useEffect())
//reset naar initial state useeffect reset totonClick={() =>useEffect(0)}

    const {register, handleSubmit, watch, errors} = useForm({
        mode: 'onChange'
    });
    const watchAnders = watch("frequency", "somethingother");
    function onSubmit(data) {
        console.log(data, " heeft besteld: ", strawberryCounter, " 🍓 Aardbeien", bananaCounter, " 🍌 Bananen ", appleCounter, " 🍏 Appels ", kiwiCounter, "🥝 Kiwi's "  )
    }
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div id="basket">
            <h4> 🍌 Bananen     <button id="fruit"
                type="button" onClick={() => setBananaCounter(bananaCounter -1)}
            >- </button> {bananaCounter}  <button id="fruit"
                type="button" onClick={() => setBananaCounter(bananaCounter +1)}
                >+</button></h4>

            <h4> 🍓 Aardbeien   <button id="fruit"
                type="button" onClick={() => setStrawberryCounter(strawberryCounter -1)}
            >- </button> {strawberryCounter} <button id="fruit"
                type="button" onClick={() => setStrawberryCounter(strawberryCounter +1)}
                >+</button></h4>

            <h4> 🍏 Appels      <button id="fruit"
                type="button" onClick={() => setAppleCounter(appleCounter -1)}
            >-</button> {appleCounter} <button id="fruit"
                type="button" onClick={() => setAppleCounter(appleCounter +1)}
            >+</button></h4>

            <h4> 🥝 Kiwi's      <button id="fruit"
                type="button" onClick={() => setKiwiCounter(kiwiCounter -1)}
            >-</button>  {kiwiCounter} <button id="fruit"
                type="button" onClick={() => setKiwiCounter(kiwiCounter +1)}

            >+</button></h4>

            <h3>fruitbasket <button id="fruitbasket" type="reset" name="reset fruit">RESET</button></h3>
            </div>
            <h1>Fruit Bestelformulier</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br/>voornaam<br/>
                <input id="lab" ref={register({required: true})} type="text" name="fullName" placeholder="voornaam" />
                {errors.fullName && <p>❌naam is verplicht</p>}
                <br/>achternaam<br/>
                <input id="lab" ref={register({required: true})} type="text" name="lastName" placeholder="achternaam"/>
                {errors.lastName && <p>❌achternaam is verplicht</p>}
                <br/>leeftijd<br/>
                <input id="lab" ref={register({required:true, min: 18})} type="text" name="age" placeholder="leeftijd"/>
                {errors.age && <p>❌leeftijd van 18 jaar is verplicht</p>}
                <br/>postcode<br/>
                <input id="labe" ref={register({required: true, validate:/(^[0-9]{4})([A-Za-z0-9]{2}$)?/})} type="text" name="city" placeholder="postcode"/>
                {errors.city && <p>❌postcode is verplicht: 0000ab</p>}
                <br/>huisnummer<br/>
                <input id="labe" ref={register({required: true, validate: /^\d+[a-zA-Z]*$/})} type="text" name="housenumber" placeholder="huisnummer"/>
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
                    {watchAnders && <input type="text" name="remark bezorgfrequentie" placeholder="bezorgfrequentie" ref={register({})} />}
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
