import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password:''
    })


    const { username, email, password} = formState;


    const onInputChange = ({target}) => {
       const {name, value} = target;
       setFormState({
            ...formState,
            [ name ]: value
       });
    };



    useEffect( () => {
        // console.log('useEffect called !')
    }, []);


    useEffect( () => {
        // console.log('formstate called !')
    }, [formState]);

    useEffect( () => {
        // console.log('email called !')
    }, [email]);


  return (
    <>
        <h1> Formulario con custom hook</h1>
        <hr/>

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

            <input 
            type="email"
            className="form-control mt-2"
            placeholder="daniel@google.com"
            name="email"
            email={ email }
            onChange = { onInputChange }
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password"
            email={ password }
            onChange = { onInputChange }
        />


            {
                (username === 'strader2') && <Message/>
            }


    </>
  )
}

