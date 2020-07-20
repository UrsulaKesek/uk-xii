import React from 'react'
import "./Toggle.css";

const Toggle = ({label,id,...props})=>(
    <>
    <div className="unit">
    {label && <label className="label" htmlFor={id}>{label}</label>}
    <input type="radio" className="cel" name="unit"checked id={id}{...props}/>
    <button className="unit_toggle"></button>
    {label && <label className="label" htmlFor={id}>{label}</label>}
    <input type="radio" className="fah" name="unit" id={id}{...props}/>
    </div>
    </>
)
export default Toggle;

