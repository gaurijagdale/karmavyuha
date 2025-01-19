import React, { createContext, useState, ReactNode } from "react";

// Define the shape of your context
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  email: string | null; // Add email field
  setEmail: React.Dispatch<React.SetStateAction<string | null>>; // Add method to update email
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component with typed props
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null); // Initialize email state

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
