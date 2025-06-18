import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./login.css"; // 🔁 This is where the CSS is imported

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        return setMessage(result.message || "Login failed");
      }

      setMessage("Login successful!");
      const token = result.accessToken;

      if (token) {
        localStorage.setItem("token", token);
        console.log("Login response:", result);
        setTimeout(() => navigate("/"), 1000);
      } else {
        console.warn("Missing token in response", result);
      }
    } catch (err) {
      setLoading(false);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form fade-slide">
        <fieldset>
          <legend>Login Form</legend>

          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <label>Password:</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" }
              })}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && <p className="error-text">{errors.password.message}</p>}

          <div className="checkbox-wrap">
            <input type="checkbox" {...register("remember")} />
            <label>Remind</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p className={`message ${message.includes("successful") ? "success" : "error"}`}>
              {message}
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
