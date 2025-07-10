import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const [status, setStatus] = useState("Verifying...");
  const [type, setType] = useState("loading"); 
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!token) {
    //   setStatus("Invalid verification link.");
    //   setType("error");
    //   return;
    // }

    const verifyUser = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/auth/verify/${token}`);
        const data = await res.json();

        if (!res.ok) {
          setStatus(data.message || "Verification failed.");
          setType("error");
        } else {
          setStatus("✅ Email verified successfully! Redirecting to login...");
          setType("success");
          setTimeout(() => navigate("/log"), 1000); 
        }
      } catch (err) {
        setStatus("Something went wrong.");
        setType("error");
      }
    };

    verifyUser();
  }, [token, navigate]);

  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f8f8f8",
    },
    box: {
      textAlign: "center",
      padding: "30px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
      width: "90%",
      maxWidth: "400px",
    },
    title: {
      fontSize: "1.5rem",
      color: type === "success" ? "#28a745" : type === "error" ? "#e74c3c" : "#333",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "15px",
      color: type === "success" ? "#28a745" : type === "error" ? "#e74c3c" : "#333",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <div style={styles.icon}>
          {type === "loading" && <i className="fas fa-spinner fa-spin"></i>}
          {type === "success" && <i className="fas fa-check-circle"></i>}
          {type === "error" && <i className="fas fa-times-circle"></i>}
        </div>
        <h2 style={styles.title}>{status}</h2>
      </div>
    </div>
  );
};

export default Verify;
