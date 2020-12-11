import Image from "react-bootstrap/Image";
import covidPic from "./images/covid19home.png";
import React from "react";


function Home(props) {
    return (
        <div>

            <Image src={covidPic} fluid />

        </div>
    );
}

export default Home;
