import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import toast from 'react-hot-toast'



const RegisterSchema = yup.object({
    email: yup.string().email("Enter a valid email address").required("Email is required"),
    name: yup.string().required("Your name is complusory").min(3, "Name should be at least 3 characters"),
    password: yup.string().min(6, "Password must be at least 6").max(12, "Password should not be more than 12 characters")
})

const Register = () => {
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(RegisterSchema)
    })

    const baseUrl = import.meta.env.VITE_BASE_URL

    const submitForm = async (data) => {
       try {
           const res = await fetch(`${baseUrl}`,{
               method : "POST",
                headers :{
                     "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })    
            console.log(data);
          
 
           const firstname = data.name.split(" ") [0]
 
               const result = await res.json()
                if (res.ok) {
                 toast.success(`${firstname}, You have registered successfully`)
               }
                // console.log(result);
         
       } catch (error) {
        console.log(error);
        
       }    
    }
  return (
    <div>
     <form onSubmit={handleSubmit(submitForm)}>
            <fieldset>
                <legend>Register</legend>

                <div>
                    <label htmlFor="name">Full Name:</label><br />
                  <input type="text" id="name" {...register("name")} /><br /><br />
                  
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                 <input type="email" id="email" {...register("email")} /><br /><br />
                </div>

                <div>
                    <label htmlFor="password">Password:</label><br />
                 <input type="password" id="password" {...register("password")} /><br /><br />
                </div>

                {/* <label htmlFor="confirmPassword">Confirm Password:</label><br />
                <input type="password" id="confirmPassword" /><br /><br /> */}

                <button type="submit">Register</button>
            </fieldset>
      </form>
  </div>
  )
}

export default Register