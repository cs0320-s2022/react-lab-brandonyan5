import React, {useState} from 'react';
import './App.css';
import TextBox from "./TextBox";
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {
    //TODO: Fill in the ? with appropriate names/values for a horoscope.
    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
                sun : theSun,
                moon : theMoon,
                rising : theRising
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }


    const [theSun, setSun] = useState("")
    const [theMoon, setMoon] = useState("")
    const [theRising, setRising] = useState("")
    const [theHoroscope, setHoroscope] = useState([])

    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <p>
                    THE HOROSCOPE
                </p>
            </header>
            <TextBox label2={"Enter Sun Sign"} change={setSun}/>
            <TextBox label2={"Enter Moon Sign"} change={setMoon}/>
            <TextBox label2={"Enter Rising Sign"} change={setRising}/>

            <AwesomeButton onPress={requestHoroscope} type={"primary"}>
                SUBMIT
            </AwesomeButton>

            {theHoroscope.map(line => <p>{line}</p>)}

        </div>
    );
}

export default Horoscope;
