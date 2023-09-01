import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Toast } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AuthContext } from "../context/AuthContext";
import { Paper, Input } from "@mantine/core";

const PhoneLogin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useContext(AuthContext);
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      console.log(response);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
      console.log(setError);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      alert("OTP number is verified");
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          className="mb-3"
          style={{
            fontSize: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Firebase Phone Auth
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <div>
          <Paper style={{ display: !flag ? "block" : "none" }}>
            <PhoneInput
              defaultCountry="PK"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link to="/">
                <Button
                  style={{
                    marginRight: "1rem",
                    width: "8rem",
                    height: "2rem",
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                style={{
                  width: "8rem",
                  height: "2rem",
                }}
                size="lg"
                type="submit"
                variant="gradient"
                onClick={getOtp}
              >
                Send Otp
              </Button>
            </div>
          </Paper>

          <Paper style={{ display: flag ? "block" : "none" }}>
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              type="number"
              style={{ marginBottom: "16px" }}
            />
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link to="">
                <Button
                  size="lg"
                  style={{
                    marginRight: "1rem",
                    width: "8rem",
                    height: "2rem",
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                style={{
                  width: "8rem",
                  height: "2rem",
                }}
                size="lg"
                type="submit"
                variant="gradient"
                onClick={verifyOtp}
              >
                Verify
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default PhoneLogin;
