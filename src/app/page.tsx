"use client";
import { useAuthService } from "@/services/authService";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { type } from "os";

export default function Home() {
  const { firebaseLogin } = useAuthService();
  const user = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(
    (localStorage.getItem("isLoggedIn") === "true" ? true : false) || false
  );

  const handleLoginApi = async () => {
    const data = await firebaseLogin(user);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  useEffect(() => {
    if (isLoggedIn) return;
    handleLoginApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>Home</div>
    </>
  );
}
