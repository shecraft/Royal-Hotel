import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import toast from 'react-hot-toast'

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
    <div className="form-container">
      <form onSubmit={handleSubmit(submitForm)} className="register-form">
        <fieldset>
          <legend className="form-legend">📝 Register Account</legend>

          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input type="text" id="name" {...register("name")} />
            </div>
            <p className="error">{errors.name?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" {...register("email")} />
            </div>
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" {...register("password")} />
            </div>
            <p className="error">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`submit-btn ${loading ? 'disabled' : ''}`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Register
