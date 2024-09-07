"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutComponent() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the JWT token from localStorage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    router.push("/login");
  };

  return (
    <Button onClick={handleLogout} className="rounded-md text-sm ">
      Logout
    </Button>
  );
}
