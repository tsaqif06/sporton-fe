"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      localStorage.removeItem("token");
      router.push("/admin/login");
      return;
    }

    try {
      const payload = JSON.parse(atob(parts[1]));

      if (payload.exp) {
        const currentTime = Date.now() / 1000;
        if (payload.exp < currentTime) {
          throw new Error("Expired");
        }
      }

      setIsLoading(false);
    } catch (e) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/admin/login");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
