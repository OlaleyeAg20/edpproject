"use client"
import ".././globals.css";
import Sidebar from "@/components/Sidebar";
import Landingpage from "./landingpage";
import { auth } from "@/app/firebase/config";
import { useState, useEffect } from "react";
import Loading from '@/app/loading'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <Loading />
  }

  if (signedIn) {
    return (
      <main className="flex h-full w-full">
        <Sidebar />
        {children}
      </main>
    );
  } else {
    return (
      <main className="flex flex-col h-full w-full">
        <Landingpage />
      </main>
    );
  }
}