import React from 'react'

const NavMenu = () => {
    const MenuItem = React.memo(({text})=>{
            return <li className='hover:text-orange-600  '>{text}</li>
    })
  return (
    <div className='hidden sm:block'>
    <ul className='flex sm:gap-10 text-black font-Roboto font-semibold cursor-pointer'>
        <MenuItem text = "Home"/>
        <MenuItem text = "About Us"/>
        <MenuItem text = "Contact Us"/>
        <MenuItem text = "Suggestion"/>
    </ul>
</div>
  )
}

export default NavMenu