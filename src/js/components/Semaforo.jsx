import React, { useState } from "react";

const Semaforo = () => {

    const [ilumination, setIlumination] = useState("");

    return(

        <div className="container">
            <div className="box">
                <div className={"lightRed" +" "+ ( ilumination === "lightRed" ? "shadowLight" : "")} onClick={() => setIlumination("lightRed")}></div>
                <div className={"lightYellow" +" "+ (ilumination === "lightYellow" ? "shadowLight" : "")} onClick={() => setIlumination("lightYellow")}></div>
                <div className={"lightGreen" +" "+ (ilumination === "lightGreen" ? "shadowLight" : "")} onClick={() => setIlumination("lightGreen")}></div>
            </div>
        </div>
    )
}

export default Semaforo;