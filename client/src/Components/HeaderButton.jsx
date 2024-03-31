import React from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderButton = React.memo(({text})=>{
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>{

                if(text==="Sign Up")
                {
                    navigate('/register')
                }
                else if(text==='Sign In')
                {
                    navigate('/login')
                }
                else if(text==="Logged out"){
                    localStorage.removeItem("user");
                    localStorage.removeItem("token")
                    navigate('/')
                }
            }} className='bg-orange-600 rounded-3xl px-3 py-1 border-2 border-orange-700 text-white'>{text}</button>
        </div>
      )
})
 


export default HeaderButton