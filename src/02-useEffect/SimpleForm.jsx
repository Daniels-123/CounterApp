import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'daniel@gmail.com'
    })


    const { username, email} = formState;


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
        <h1> Formulario simple</h1>
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


            {
                (username === 'strader2') && <Message/>
            }


    </>
  )
}

