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

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check for token in localStorage
    if (!token) {
      router.push("/login"); // Redirect to login if token is missing
    }
  }, [router]);

  return (
    <div>
      {/* Your layout structure here (e.g., Navbar, Sidebar) */}
      <main>{children}</main> {/* Render the child pages */}
    </div>
  );
}
