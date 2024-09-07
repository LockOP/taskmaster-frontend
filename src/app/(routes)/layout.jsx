// export default function RootLayout({ children }) {
//     return (
//         <>

//            {children}
//        </>
//     );
// }

"use client"; // Ensure this is a client-side component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "../../components/ui/sidebar";
import Header from "@/components/ui/header";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token in localStorage
    if (!token) {
      router.push("/login"); // Redirect to login if token is missing
    }
  }, [router]);

  return (
    <div className="flex flex-row w-screen h-[100dvh]">
      <Sidebar />
      <div className="flex-grow overflow-auto h-full flex flex-col">
        <Header />
        <div className="flex-grow overflow-auto h-full">{children}</div>
      </div>
    </div>
  );
}
