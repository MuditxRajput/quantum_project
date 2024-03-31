import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ForgetPassword = () => {
    const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandle=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    
    setFromData((preVal)=>(
      {...preVal,
        [name]: value,
      }
    ))

}
  const passwordHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/user/forgotPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const val = await response.json();
      console.log(val);
      if (val.success) {
        toast.success(val.msg);
        navigate('/login')
        
      } else {
        toast.error(val.msg);
      }
    } catch (error) {
      toast.error();
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
        <form onSubmit={passwordHandle} method="POST" action="#">
        <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address"
                              onChange={onChangeHandle}
                              value={formData.email}
                            />
                    </div>
                </div>
                <div className="mt-2 mb-2">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                        New Password
                    </label>
                    <div className="mt-1">
                        <input id="Password" name="password" type="Password" autoComplete="Password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your new password"
                              onChange={onChangeHandle}
                              value={formData.Password}
                            />
                    </div>
                </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
