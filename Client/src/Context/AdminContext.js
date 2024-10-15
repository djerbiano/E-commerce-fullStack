import { createContext, useEffect, useState } from "react"; 
import { useNavigate, useLocation } from "react-router-dom";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

    
      if (!location.pathname.startsWith("/admin")) {
        return;
      }

      if (!token || !userId) {
        navigate("/");
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_URL_SERVER}/api/verifInformationSessionStorage`,
        {
          method: "POST",
          headers: {
            token: token,
            idd: userId,
          },
        }
      );
      const result = await response.json();
      setIsAdmin(result.isAdmin);

      if (!result.isAdmin) {
        //si l'utilisateur n'est pas admin
        navigate("/"); 
      }
    };

    checkAdmin();

    //si la route est admin
    if (location.pathname.startsWith("/admin")) {
      window.addEventListener("storage", checkAdmin);
    }

    return () => {
      window.removeEventListener("storage", checkAdmin);
    };
    // eslint-disable-next-line
  }, [isAdmin, location]);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
