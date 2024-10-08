'use client'
import { Homeicon, Plusicon, Scripticon, SearchIcon, Signouticon, Usericon } from "@/components/ui/Icon";
import Image from "next/image";
import Logo from "@/components/Logo"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/app/firebase/config"

const sideBarLinks = [
    {
        name: 'Home',
        icon: <Homeicon />,
        URL: '/'
    },
    {
        name: 'Add Item',
        icon: <Plusicon />,
        URL: '/addItem'
    },
    {
        name: 'Staffs',
        icon: <Usericon />,
        URL: '/Staffs'
    },
    {
        name: 'Requests',
        icon: <Scripticon />,
        URL: '/Requests'
    },
]



export default function Sidebar(){

    const auth = getAuth(app);
    function signOutAction(){
        signOut(auth).then(() => {
            open('/', "_self")
        }).catch((error) => {
            alert(error)
        // An error happened.
        });
    }

    const signedInUser = auth.currentUser;

    
    const pathname = usePathname()

    const sideBarLinksOutput = sideBarLinks.map((links) => {
    
        const activeLinkClass = pathname === links.URL && '!bg-primary !text-white !hover:bg-primary'
    
        return (
            <Link href={links.URL} className={`flex p-2 rounded-lg text-black items-center gap-4 hover:bg-secondary ${activeLinkClass}`} key={links.name}>
                {links.icon}
                <span>{links.name}</span>
            </Link>
        )
    })

    return (
        <section className="p-4 border-r sm:flex flex-col gap-4 hidden min-w-72 overflow-y-auto">
            <Link href='/' className="flex items-center gap-4">
              <Logo />
              <h1 className="text-lg font-bold">Efix</h1>
            </Link>
            <div className="searchBar flex rounded-lg w-full px-3.5 py-2.5 items-center border">
              <SearchIcon />
              <input type="text" placeholder="search" className="h-5 pl-2 focus:outline-none" />
            </div>
            <nav className="flex flex-col gap-2">
              {sideBarLinksOutput}
            </nav>
            <div className="flex items-center gap-2 mt-auto border-t pt-5">
                <Image
                src="/defaultUser.png"
                width={50}
                height={50}
                alt="Profile Image"
                className="rounded-full"
                />
                <div className="details flex flex-col">
                    <h1 className="font-bold text-xl">{signedInUser?.displayName || "Your Name"}</h1>
                    <span className="text-sm">{signedInUser?.email}</span>
                </div>
            </div>
            <Button className="flex items-center justify-center gap-2" variant={"outline"} onClick={signOutAction}>
                <span>SIGN OUT</span>
                <Signouticon />
            </Button>
          </section>
    )
}