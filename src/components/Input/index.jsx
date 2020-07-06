import React from 'react'
import "./Input.css";

const Input = ({label,id,...props})=>(
    <>
    <div className="city">
    {label && <label className="label" htmlFor={id}>{label}</label>}
    <input className="input" id={id}{...props}/>
    </div>
    </>
)
export default Input

