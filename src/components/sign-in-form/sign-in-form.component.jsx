import { useState } from "react"

import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

// styles
import './sign-in-form.styles.scss'

// components
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

const defaultFormFields = {
    email: '',
    password: ''
}

export default function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const [error, setError] = useState(null)

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInAuthWithEmailAndPassword(email, password)
            resetForm()
        } catch (error) {
            console.log(error)
            setError(error.message)
        }        
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>                
                <FormInput
                    label="Email"
                    type="email"
                    required 
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
                <p>{error}</p>
            </form>
        </div>
    )
}
