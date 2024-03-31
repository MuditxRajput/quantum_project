import { z } from 'zod';
const loginScheme = z.object({
    email : z.string().email(),
    password:z.string().min(4),
})

const loginValidaton=(userData)=>
{
    return loginScheme.safeParse(userData);
}

export { loginValidaton };
