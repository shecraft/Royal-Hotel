import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const [status, setStatus] = useState("Verifying...");
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // setStatus("Invalid verification link.");
      return;
    }

    const verifyUser = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/auth/verify/${token}`);
        const data = await res.json();

        if (!res.ok) {
          setStatus(data.message || "Verification failed.");
        } else {
          setStatus("Verification successful! Redirecting...");
          setTimeout(() => navigate("/log"), 1000);
        }
      } catch (err) {
        setStatus("Something went wrong.");
      }
    };

    verifyUser();
  }, [token, navigate]);

  return <h2>{status}</h2>;
};

export default Verify;
