import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = async (data) => {
//   setLoading(true);
//   setMessage("");

//   try {
//     const res = await fetch("http://localhost:4000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     setLoading(false);

//     if (!res.ok) {
//       return setMessage(result.message || "Login failed");
//     }

//     setMessage("Login successful!");

//     // ✅ Check the real key for the token (token or accessToken?)
//     const token = result.token || result.accessToken || result["access-Token"];
//     const user = result.user;

//     if (token && user) {
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("Login response:", result);
//     } else {
//       console.warn("Missing token or user in response", result);
//     }

//     setTimeout(() => navigate("/dashboard"), 1000);
//   } catch (err) {
//     setLoading(false);
//     setMessage("Something went wrong. Try again.");
//   }
// };
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
    } else {
      console.warn("Missing token in response", result);
    }

    setTimeout(() => navigate("/dashboard"), 1000);
  } catch (err) {
    setLoading(false);
    setMessage("Something went wrong. Try again.");
  }
};


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset style={{ border: "2px solid black", borderRadius: "8px", padding: "20px" }}>
          <legend style={{
            padding: "0 10px",
            fontWeight: "bold",
            color: "#3498db",
            fontSize: "1.2rem"
          }}>Login Form</legend>

          <label>Email:</label><br />
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            style={{ width: "100%", padding: "10px", marginBottom: "5px", marginTop: "4px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <label>Password:</label><br />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters"
                }
              })}
              style={{ width: "100%", padding: "10px", marginTop: "4px" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#3498db",
                fontSize: "14px"
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <input type="checkbox" {...register("remember")} />
            <label style={{ marginLeft: "8px", font: "10px" }}>Remind </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "10px 20px",
              border: "none",
              width: "100%",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p style={{
              marginTop: "15px",
              textAlign: "center",
              color: message.includes("successful") ? "green" : "red"
            }}>
              {message}
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
