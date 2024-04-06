import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    name:"",
    userName:"",
    email:"",
    password:"",
    year:"",
    clg:"",
    branch:"",
})
  const onHandle=(e)=>{
        const name =   e.target.name
        const value = e.target.value
        setFormData((pre)=>({
          ...pre,
          [name]:value,
        }))
  }
  const submitHandle=async(e)=>{
    e.preventDefault();
    try {
     const response = await fetch(`http://localhost:8000/user/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const val = await response.json();
      if(val.success)
      {
        toast.success("Register Successfully")
        navigate('/login')
      }else{
        toast.error("Something went wrong...")
      }

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <p
              className="text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              login to your account{" "}
            </p>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={submitHandle}>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    required=""
                    value={formData.name}
                    onChange={onHandle}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                  <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="username"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="username"
                    name="userName"
                    placeholder="Enter username"
                    type="text"
                    required=""
                    value={formData.userName}
                    onChange={onHandle}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required=""
                    onChange={onHandle}
                    value={formData.email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "
                  />
                  <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={onHandle}
                    required=""
                    value={formData.password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Min 4 length password"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="CollegeName"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  College Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password_confirmation"
                    name="clg"
                    type="text"
                    required=""
                    onChange={onHandle}
                    value={formData.clg}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  for="Branch"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Branch
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password_confirmation"
                    name="branch"
                    type="text"
                    required=""
                    value={formData.branch}
                    onChange={onHandle}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  for="semester"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Year
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    id="year"
                    name="year"
                    required
                    onChange={onHandle}
                    value={formData.year}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4].map((semester) => (
                      <option key={semester} value={semester}>
                        {semester}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Create account
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
