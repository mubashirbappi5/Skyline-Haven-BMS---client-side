import React, { useEffect, useState, createContext } from "react";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // If using @react-oauth/google, you would pass the credential token from <GoogleLogin> here
  const googlelogin = async (credential) => {
    setloading(true);
    try {
      const res = await axiosPublic.post("/auth/google", { credential });
      if (res.data.token) {
        localStorage.setItem("access-token", res.data.token);
        setuser(res.data.user);
      }
      setloading(false);
      return { user: res.data.user };
    } catch (error) {
      setloading(false);
      throw error;
    }
  };

  const signupUser = async (email, password) => {
    setloading(true);
    try {
      const res = await axiosPublic.post("/auth/signup", { email, password, name: "bappi" });
      if (res.data.token) {
        localStorage.setItem("access-token", res.data.token);
        setuser(res.data.user);
      }
      return { user: res.data.user };
    } finally {
      setloading(false);
    }
  };

  const updateuser = (profile) => {
    setuser(prev => ({ ...prev, ...profile }));
    return Promise.resolve();
  };

  const signinUser = async (email, password) => {
    setloading(true);
    try {
      const res = await axiosPublic.post("/auth/signin", { email, password });
      if (res.data.token) {
        localStorage.setItem("access-token", res.data.token);
        setuser(res.data.user);
      }
      return { user: res.data.user };
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access-token");
      if (token) {
        try {
          const res = await axiosPublic.get("/auth/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          setuser(res.data);
        } catch (error) {
          localStorage.removeItem("access-token");
          setuser(null);
        }
      } else {
        setuser(null);
      }
      setloading(false);
    };
    fetchUser();
  }, [axiosPublic]);

  const signoutUser = () => {
    localStorage.removeItem("access-token");
    setuser(null);
    return Promise.resolve();
  };

  const authinfo = {
    name: "bappi",
    googlelogin,
    signupUser,
    updateuser,
    signinUser,
    signoutUser,
    loading,
    setloading,
    user,
  };

  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
