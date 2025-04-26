"use client";

import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
       const toastid=toast.loading('Logging out...');
      await signOut();
      toast.dismiss(toastid);
      router.push("/sign-in");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };
  
  const clearCookieByName = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  
  

  return (
    <button
      onClick={handleLogout}
      className="border-1 border-white px-3 py-2 rounded-full cursor-pointer text-primary-100 font-semibold"
    >
      LogOut
    </button>
  );
};

export default LogoutButton;
