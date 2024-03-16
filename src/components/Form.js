import { useState } from 'react';
const Form = ()=>{

    const [formvalue,setFormValue] = useState({email:'',password:'',confirmpassword:''})
    const [showError,setShowError] = useState({isEmail:true,isPassword:true, isConfirmPassword:true})

    function handleEmail(event){
        const email =event.target.value
        setFormValue((prevalue)=>({...prevalue,email }))
        const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            setShowError(prevErrors=>({...prevErrors,isEmail: !isValidEmail}))
    }
    function handlePassword(event){
        const password = event.target.value;
        setFormValue((preValue)=>({...preValue,password}))
        setShowError(prevErrors => ({ ...prevErrors, isPassword: password.length < 8 }));
    }
    
    function handleConfirmPassword(event){
        const confirmpassword = event.target.value
        const password = formvalue.password;
        setFormValue((prevalue)=>({...prevalue,confirmpassword}))
        setShowError(prevErrors=>({...prevErrors,isConfirmPassword: confirmpassword !== password}))
    }
    function handleSubmit(event){
        event.preventDefault()
        const isEmail = showError.isEmail;
        const isPassword= showError.isPassword;
        const isConfirmPassword= showError.isConfirmPassword;
        if(!isEmail && !isPassword && !isConfirmPassword){
            alert("form submitted successfully")
        }
        else{
            alert("can’t submit the form")
        }
    }
    return(
        <form>
            <label htmlFor="email">Email:</label>
            <input className={showError.isEmail ? "activered" : "active"} type="email" id="email" value={formvalue.email} onChange={handleEmail} placeholder="Email"/>
            {showError.isEmail && <p className="show-error">Invaild Email format</p>}
            <label htmlFor="password">Password:</label>
            <input className={showError.isPassword ? "activered" : "active"} type="password" value={formvalue.password} onChange={handlePassword} id="password" placeholder="Password"/>
            {showError.isPassword &&<p className="show-error">Password must be at least 8 characters</p>}
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input className={showError.isConfirmPassword ? "activered" : "active"} type="password" value={formvalue.confirmpassword} onChange={handleConfirmPassword} id="confirmpassword" placeholder="Confirm Password"/>
            {showError.isConfirmPassword && <p className="show-error">Password do not match</p>}
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;