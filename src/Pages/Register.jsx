import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import toast from 'react-hot-toast'

const baseUrl = import.meta.env.VITE_BASE_URL

const RegisterSchema = yup.object({
  email: yup.string().email("Enter a valid email address").required("Email is required"),
  name: yup.string().required("Your name is complusory").min(3, "Name should be at least 3 characters"),
  password: yup.string().min(6, "Password must be at least 6").max(12, "Password should not be more than 12 characters")
})

const Register = () => {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema)
  })

  const submitForm = async (data) => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      
      const result = await res.json()
      const firstname = data.name.split(" ")[0]

      if (res.ok) {
        toast.success(`${firstname}, Welcome, Kindly check your email for verification`, {
          style: { fontSize: '14px' }
        })
      } else {
        toast.error(result.message || "Registration failed")
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setLoading(false)
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
            <p style={{ color: "red", fontSize:"12px",textAlign:"left", marginBottom:"12px" }}>{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" {...register("email")} /><br /><br />
            <p style={{ color: "red", fontSize:"12px",textAlign:"left", marginBottom:"12px" }}>{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" {...register("password")} /><br /><br />
            <p style={{ color: "red", fontSize:"12px",textAlign:"left", marginBottom:"12px" }}>{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? "#95a5a6" : "#3498db",
              color: "white",
              padding: "10px 20px",
              border: "none",
              width: "100%",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Register
