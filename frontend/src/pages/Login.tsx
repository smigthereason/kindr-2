// import React, { useState, useEffect, ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";
// import Logo from "../assets/logo.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { FaPowerOff } from "react-icons/fa";
// import { Link } from "react-router-dom";

// interface User {
//   role: "charity" | "donor" | "admin";
// }

// interface LoginData {
//   email: string;
//   password: string;
// }

// interface SignupData {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   userType: "donor" | "charity" | "admin";
// }

// interface LoginProps {
//   setUser: (user: User | null) => void;
// }

// type SetDataFunction = React.Dispatch<
//   React.SetStateAction<LoginData | SignupData>
// >;

// const Login: React.FC<LoginProps> = ({ setUser }) => {
//   const [, setActiveCard] = useState<"login" | "signup">("login");
//   const [showSignup, setShowSignup] = useState(false);
//   const [loginData, setLoginData] = useState<LoginData>({
//     email: "",
//     password: "",
//   });
//   const [signupData, setSignupData] = useState<SignupData>({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userType: "donor",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1500 });
//   }, []);

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/login",
//         // "https://backend-kindr.onrender.com/login",
//         { email: loginData.email, password: loginData.password },
//         { withCredentials: true }
//       );

//       if (response.data.access_token) {
//         localStorage.setItem("token", response.data.access_token);

//         const userType = response.data.user_type;
//         const user: User = { role: userType };
//         setUser(user);

//         if (userType === "donor") {
//           navigate("/donor/dashboard");
//         } else if (userType === "charity") {
//           navigate("/charity/dashboard");
//         } else if (userType === "admin") {
//           navigate("/admin/admin-dashboard");
//         } else {
//           setError("Unknown user type");
//         }
//       } else {
//         setError("Login failed: Unexpected response from server");
//       }
//     } catch (error: any) {
//       setError(
//         "Login failed: " +
//           (error.response?.data?.message || "An unexpected error occurred")
//       );
//     }
//   };

//   const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (signupData.password !== signupData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/users",
//         // "https://backend-kindr.onrender.com/users",
//         {
//           username: signupData.username,
//           email: signupData.email,
//           password: signupData.password,
//           user_type: signupData.userType,
//         }
//       );

//       if (response.data.user_id) {
//         localStorage.setItem("token", response.data.token);

//         const user: User = { role: signupData.userType };
//         setUser(user);

//         switch (signupData.userType) {
//           case "donor":
//             navigate("/donor/dashboard");
//             break;
//           case "charity":
//             navigate("/charity/dashboard");
//             break;
//           case "admin":
//             navigate("/admin/admin-dashboard");
//             break;
//           default:
//             setError("Unknown user type");
//         }
//       } else {
//         setError("Signup successful, but login failed. Please try logging in.");
//       }
//     } catch (error: any) {
//       setError(
//         "Signup failed: " +
//           (error.response?.data?.message || "An unexpected error occurred")
//       );
//     }
//   };

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//     setData: SetDataFunction,
//     isSignup: boolean = false
//   ) => {
//     const { name, value } = e.target;
//     setData((prevData) => {
//       if (isSignup) {
//         return {
//           ...(prevData as SignupData),
//           [name]: value,
//         };
//       } else {
//         return {
//           ...(prevData as LoginData),
//           [name]: value,
//         };
//       }
//     });
//   };

//   const selectCard = (card: "login" | "signup") => {
//     setActiveCard(card);
//     if (card === "signup") {
//       setShowSignup(true);
//     }
//   };

//   const closeSignup = () => {
//     setShowSignup(false);
//   };

//   return (
//     <div className="login-container" data-aos="slide-left">
//       <div className="left-section1">
//         <Link to="/">
//           <img
//             src={Logo}
//             alt="logo"
//             style={{ maxWidth: "600px", height: "100px" }}
//           />
//         </Link>
//       </div>
//       <div className="right-section1" data-aos="fade-up">
//         <div className="form-holder">
//           <div className="form-container">
//             <h2>Log In</h2>
//             <form onSubmit={handleLogin}>
//               <div className="input-container">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={loginData.email}
//                   onChange={(e) =>
//                     handleChange(e, setLoginData as SetDataFunction, false)
//                   }
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={loginData.password}
//                   onChange={(e) =>
//                     handleChange(e, setLoginData as SetDataFunction, false)
//                   }
//                   required
//                 />
//               </div>
//               {error && <p className="error">{error}</p>}
//               <button type="submit">Log In</button>
//             </form>
//           </div>
//           <div className="contact_line">
//             <div className="line"></div>
//             <span className="section_subtitle">Or</span>
//             <div className="line2"></div>
//           </div>
//           <div className="acc-section">
//             <h4>Don't have an account? Join us today!</h4>
//             <button
//               className="option-button"
//               onClick={() => selectCard("signup")}
//             >
//               Create an Account
//             </button>
//           </div>
//         </div>
//       </div>
//       {showSignup && (
//         <div className="signup-modal" data-aos="fade-in">
//           <div className="signup-content">
//             <button className="close-button" onClick={closeSignup}>
//               <FaPowerOff size={28} />
//             </button>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSignup}>
//               <div className="input-container">
//                 <label htmlFor="new-username">Username</label>
//                 <input
//                   type="text"
//                   id="new-username"
//                   name="username"
//                   value={signupData.username}
//                   onChange={(e) =>
//                     handleChange(e, setSignupData as SetDataFunction, true)
//                   }
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="new-email">Email</label>
//                 <input
//                   type="email"
//                   id="new-email"
//                   name="email"
//                   value={signupData.email}
//                   onChange={(e) =>
//                     handleChange(e, setSignupData as SetDataFunction, true)
//                   }
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="userType">User Type</label>
//                 <select
//                   id="userType"
//                   name="userType"
//                   value={signupData.userType}
//                   onChange={(e) =>
//                     handleChange(e, setSignupData as SetDataFunction, true)
//                   }
//                   required
//                 >
//                   <option value="donor">Donor</option>
//                   <option value="charity">Charity Organization</option>
//                   {/* <option value="admin">Admin</option> */}
//                 </select>
//               </div>
//               <div className="input-container">
//                 <label htmlFor="new-password">Password</label>
//                 <input
//                   type="password"
//                   id="new-password"
//                   name="password"
//                   value={signupData.password}
//                   onChange={(e) =>
//                     handleChange(e, setSignupData as SetDataFunction, true)
//                   }
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="confirm-password">Confirm Password</label>
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirmPassword"
//                   value={signupData.confirmPassword}
//                   onChange={(e) =>
//                     handleChange(e, setSignupData as SetDataFunction, true)
//                   }
//                   required
//                 />
//               </div>
//               {error && <p className="error">{error}</p>}
//               <button type="submit">Sign Up</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import Logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { FaPowerOff } from "react-icons/fa";

interface User {
  role: "charity" | "donor" | "admin";
}

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: "donor" | "charity" | "admin";
}

interface LoginProps {
  setUser: (user: User | null) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "donor",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        { withCredentials: true }
      );

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);

        const userType = response.data.user_type;
        const user: User = { role: userType };
        setUser(user);

        navigate(
          userType === "donor"
            ? "/donor/dashboard"
            : userType === "charity"
            ? "/charity/dashboard"
            : "/admin/admin-dashboard"
        );
      } else {
        setError("Login failed: Unexpected response from server");
      }
    } catch (error: any) {
      setError(
        "Login failed: " +
          (error.response?.data?.message || "An unexpected error occurred")
      );
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/users", {
        username: signupData.username,
        email: signupData.email,
        password: signupData.password,
        user_type: signupData.userType,
      });

      if (response.data.user_id) {
        localStorage.setItem("token", response.data.token);

        // Auto-login after sign-up
        await handleLogin(new Event("submit"));

        const user: User = { role: signupData.userType };
        setUser(user);

        navigate(
          signupData.userType === "donor"
            ? "/donor/dashboard"
            : signupData.userType === "charity"
            ? "/charity/dashboard"
            : "/admin/admin-dashboard"
        );
      } else {
        setError("Signup successful, but login failed. Please try logging in.");
      }
    } catch (error: any) {
      setError(
        "Signup failed: " +
          (error.response?.data?.message || "An unexpected error occurred")
      );
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    isSignup: boolean = false
  ) => {
    const { name, value } = e.target;
    if (isSignup) {
      setSignupData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <div className="login-container" data-aos="slide-left">
      <div className="left-section1">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "600px", height: "100px" }}
          />
        </Link>
      </div>
      <div className="right-section1" data-aos="fade-up">
        <div className="form-holder">
          <div className="form-container">
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Log In</button>
            </form>
          </div>
          <div className="contact_line">
            <div className="line"></div>
            <span className="section_subtitle">Or</span>
            <div className="line2"></div>
          </div>
          <div className="acc-section">
            <h4>Don't have an account? Join us today!</h4>
            <button
              className="option-button"
              onClick={() => setShowSignup(true)}
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
      {showSignup && (
        <div className="signup-modal" data-aos="fade-in">
          <div className="signup-content">
            <button
              className="close-button"
              onClick={() => setShowSignup(false)}
            >
              <FaPowerOff size={28} />
            </button>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="input-container">
                <label htmlFor="new-username">Username</label>
                <input
                  type="text"
                  id="new-username"
                  name="username"
                  value={signupData.username}
                  onChange={(e) => handleChange(e, true)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="new-email">Email</label>
                <input
                  type="email"
                  id="new-email"
                  name="email"
                  value={signupData.email}
                  onChange={(e) => handleChange(e, true)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="userType">User Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={signupData.userType}
                  onChange={(e) => handleChange(e, true)}
                  required
                >
                  <option value="donor">Donor</option>
                  <option value="charity">Charity Organization</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="new-password">Password</label>
                <input
                  type="password"
                  id="new-password"
                  name="password"
                  value={signupData.password}
                  onChange={(e) => handleChange(e, true)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={(e) => handleChange(e, true)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
