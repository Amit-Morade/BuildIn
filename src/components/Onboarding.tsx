import { Button, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  fullName: string;
  bio: string;
  skills: string;
  interests: string;
  experience: string;
};

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<FormData>({
    fullName: "",
    bio: "",
    skills: "",
    interests: "",
    experience: "",
  });
  const [animateStyle, setAnimateStyle] = useState({
    opacity: 1,
    transform: "translateX(0)",
    transition: "opacity 0.3s ease-in, transform 0.3s ease-in",
  });
  const navigate = useNavigate();

  const questions: { label: string; key: keyof FormData }[] = [
    { label: "What is your full name?", key: "fullName" },
    { label: "Tell us a bit about yourself (bio)", key: "bio" },
    { label: "What skills do you have?", key: "skills" },
    { label: "What are your interests?", key: "interests" },
    { label: "What is your experience level?", key: "experience" },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setAnimateStyle({
        ...animateStyle,
        opacity: 0,
        transform: "translateX(-10%)",
      });
      setTimeout(() => {
        setStep(step + 1);
        setAnimateStyle({
          ...animateStyle,
          opacity: 1,
          transform: "translateX(0)",
        });
      }, 300); // Duration matches the transition
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setAnimateStyle({
        ...animateStyle,
        opacity: 0,
        transform: "translateX(10%)",
      });
      setTimeout(() => {
        setStep(step - 1);
        setAnimateStyle({
          ...animateStyle,
          opacity: 1,
          transform: "translateX(0)",
        });
      }, 300); // Duration matches the transition
    }
  };

  const handleChange = (e: { target: { value: any } }) => {
    setOnboardingData({
      ...onboardingData,
      [questions[step].key]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", onboardingData);
    navigate("/home");
  };

  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5%",
        margin: "0px auto",
        gap: "80px",
      }}
    >
      <div>
        <Typography variant="h3">Hi Amit</Typography>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={animateStyle}>
          <h2>{questions[step].label}</h2>
          <TextField
            type="text"
            value={onboardingData[questions[step].key]}
            onChange={handleChange}
            style={{
              width: "100%",
              margin: "10px 0",
              fontSize: "16px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {step > 0 && (
            <Button
              onClick={handleBack}
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "20px",
              }}
            >
              Back
            </Button>
          )}
          {step < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "20px",
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "20px",
              }}
            >
              Save
            </Button>
          )}
        </div>
        {step === questions.length - 1 && (
          <Typography>
            You can change the details from the profile settings
          </Typography>
        )}
      </div>
    </div>
  );
}
