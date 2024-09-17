import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [blogs,setBlogs] = useState([]);

  const authorizationToken = `Bearer ${token}`;
  
  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  
  let isLoggedIn = !!token;

  // logout
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // To get Currently login user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      }else{
        console.log("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await fetch(`${API}/api/blog/blogsData`, {
        method: "GET",
      });
      if(response.ok){
        const data = await response.json();
        setBlogs(data.message);
      }
    } catch (error) {
      console.log(`Blog Frontend Error: ${error}`);
    }
  };
  

  useEffect(() => {
    getBlogs();
    userAuthentication();
  }, [authorizationToken]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, blogs, authorizationToken, isLoading, API }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used Outside of the Provider");
  }

  return authContextValue;
};

// Exporting the AuthContext, AuthProvider, and useAuth individually
export { AuthContext, AuthProvider, useAuth };
