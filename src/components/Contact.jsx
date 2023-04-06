import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const history = useHistory();


  const [loading, setLoading] = useState(false);

  const handleChange = () => {
     window.location.href = 'https://drive.google.com/file/d/1Vwtwg8bKNh_nsLSfnQEdaO_BHHKy8P7r/view?usp=share_link';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hariharan",
          from_email: form.email,
          to_email: "shankarraj.h@northeastern.edu",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
   <div style={{
backgroundColor: '#8a2be2',
borderRadius: '10px',
padding: '20px',
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between'
}}>
<div style={{
backgroundColor: '#fff',
borderRadius: '50%',
width: '80px',
height: '80px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
<div style={{
backgroundColor: '#8a2be2',
borderRadius: '50%',
width: '70px',
height: '70px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
  <a href="https://github.com/Hariharan-raj" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <FaGithub size={50} />
    </a>
</div>
</div>
<div style={{
backgroundColor: '#fff',
borderRadius: '50%',
width: '80px',
height: '80px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
<div style={{
backgroundColor: '#8a2be2',

width: '80px',
height: '80px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
<a href="https://drive.google.com/file/d/1Vwtwg8bKNh_nsLSfnQEdaO_BHHKy8P7r/view?usp=share_link" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
<span style={{ fontSize: '24px', fontWeight: 'bold' }}>RESUME</span>
</a>
</div>
</div>
<div style={{
backgroundColor: '#fff',
borderRadius: '50%',
width: '80px',
height: '80px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
<div style={{
backgroundColor: '#8a2be2',
borderRadius: '50%',
width: '70px',
height: '70px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}>
<a href="https://www.linkedin.com/in/hariharanraj09/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <FaLinkedin size={50} />
    </a>
</div>
</div>
</div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
