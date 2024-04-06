import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[formData,setFromData] = useState({
    email:"",
    password:"",
  })
  const onChangeHandle=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        setFromData((preVal)=>(
          {...preVal,
            [name]: value,
          }
        ))

  }

  const onSubmitData=async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/user/login`,
      {
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
        },
        body: JSON.stringify(formData),
      },
      )
      const val = await response.json();
      if(val.success)
      {
        const token = val.token;
        const user = val.existedUser;
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("token",token);
        toast.success(val.msg);
        navigate("/")
      }
      else{
        toast.error(val.msg)
      }
    } catch (error) {
      toast.error("Server error in login.")
    }

  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <div className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <p className="font-medium text-blue-600 hover:text-blue-500" onClick={()=>{navigate('/register')}}>
                create an account
            </p>
        </div>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitData}>
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

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password min 4 length"
                            onChange={onChangeHandle}
                            value={formData.password}
                            />
                    </div>
                </div>

                <div className="flex items-center justify-between">

                    <div className="text-sm">
                        <p href="#" className="font-medium text-blue-600 hover:text-blue-500" onClick={()=>{navigate('/forgetPassword')}}>
                            Forgot your password?
                        </p>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        Sign in
                    </button>
                </div>
            </form>
           
        </div>
    </div>
</div>
  )
}

export default LoginPage