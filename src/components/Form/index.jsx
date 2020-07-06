import React from 'react'
import "./Form.css";

const Form = ({children, ...props})=> 
<form className="form" {...props}>{children}</form>

export default Form;
