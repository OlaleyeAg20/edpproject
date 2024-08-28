'use client'
import ".././globals.css";
import Sidebar from "@/components/Sidebar";
import Landingpage from "./landingpage";
import { auth } from "../firebase/config"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// let [signedIn, setSignedIn] = useState(false)
const signedInUser = auth.currentUser;

  if (signedInUser) {
    const uid = signedInUser.uid

    return (
      <main className="flex h-full w-full">
          <Sidebar />
          {children}
      </main>
    )
  } else {
    return (
      <main className="flex flex-col h-full w-full">
          <Landingpage />
      </main>
    )
  }
}
