"use client";
import { useAuthService } from "@/services/authService";
import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  const { verify, firebaseLogin } = useAuthService();
  const handleLoginApi = async () => {
    const data = await firebaseLogin();
  };

  const handleVerifyApi = async () => {
    const data = await verify();
  };

  // React.useEffect(() => {
  //   handleLoginApi();
  // });

  return (
    <>
      <div>Home</div>
      <button onClick={handleLoginApi}>Login</button>
      <button onClick={handleVerifyApi}>verify</button>
    </>
  );
}
