import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isStrong, setIsStrong] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    const isLongEnough = pwd.length >= 8;

    return hasUpper && hasLower && hasNumber && hasSpecial && isLongEnough;
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setIsStrong(validatePassword(val));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isStrong) {
      toast.error('❌ Weak Password. Please follow password rules.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registered successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <form
        onSubmit={handleRegister}
        className="bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {/* Show Weak Password message only when typing and invalid */}
            {password && !isStrong && (
              <p className="text-red-400 text-sm font-medium mb-1">
                ❌ Weak Password
              </p>
            )}

            {/* Show Note ONLY when typing and still weak */}
            {password && !isStrong && (
              <p className="text-sm text-white">
                Note: Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters.
              </p>
            )}

            {/* Show Strong Password only when all conditions met */}
            {password && isStrong && (
              <p className="text-green-400 text-sm font-medium">
                ✅ Strong Password
              </p>
            )}          

         <input
            type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-400 text-sm mt-1">❌ Passwords doesn't matched</p>
      )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </section>
  );
}


// // File: src/pages/Register.jsx
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';


// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   function ValidateKadavusol(password){
//     let Cap=false;let Small=false;let Num=false;let Special=false;
//     for(let i=0;i<password.length;i++){
//       if(password[i]>='A' && password[i]<='Z') Cap=true;
//       else if(password[i]>='a' && password[i]<='z') Small=true;
//       else if(password[i]>='0' && password[i]<='9') Num=true;
//       else Special=true;
//     }
//     if(Cap && Small && Num && Special && password.length>=8){
//       return true;
//     }
//     return false;
//   }
//   ValidateKadavusol(password)

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       toast.success('Registered successfully! 🎉');
//       navigate('/dashboard');

//     } catch (error) {
//       toast.error(error.message);

//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center">Register</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <p className="text-sm text-white">
//           Note: Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters.
//         </p>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold"
//         >
//           Register
//         </button>

//         <p className="text-center text-sm text-gray-400">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-400 hover:underline">
//             Login here
//           </a>
//         </p>
//       </form>
//     </section>
//   );
// }
