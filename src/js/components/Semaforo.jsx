import React, { useState } from "react";

const Semaforo = () => {

    const [ilumination, setIlumination] = useState("");

    return(

        <div className="container">
            <div className="box">
                <div className={"lightRed" +" "+ ( ilumination === "lightRed" ? "shadow" : "")} onClick={() => setIlumination("lightRed")}></div>
                <div className={"lightYellow" +" "+ (ilumination === "lightYellow" ? "shadow" : "")} onClick={() => setIlumination("lightYellow")}></div>
                <div className={"lightGreen" +" "+ (ilumination === "lightGreen" ? "shadow" : "")} onClick={() => setIlumination("lightGreen")}></div>
            </div>
        </div>
    )
}

export default Semaforo;