import { createContext } from 'react'
const UserContext = createContext({currentLogged:'', setCurrentLogged:()=>{}})
export default UserContext;
