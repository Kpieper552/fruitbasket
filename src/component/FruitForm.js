import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

function FruitForm() {
    const {register, handleSubmit, watch, errors} = useForm({
        mode: 'onChange'
    });
    const watchAnders = watch("frequency", "somethingother");

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <>

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
                    <h6>
                        Bezorgfrequentie<br/>
                        Geen verzendkosten bij wekelijkse afname<br/>
                        Afname per maand, om de week en anders € 4 extra
                    </h6>
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
                    <h6>Voorkeur bezorgdatum:</h6>
                    <label>
                        <input id="lab" ref={register} type="text" name="remark" placeholder="voorkeur bezorgdatum"/><br/><br/>
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
                    <br/>
                </form>
        </>
    );
}

export default FruitForm;
