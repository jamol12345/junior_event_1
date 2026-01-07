import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      currentUser,
      setCurrentUser,
      cart,
      setCart
    }}>
      {children}
    </UserContext.Provider>
  );
};