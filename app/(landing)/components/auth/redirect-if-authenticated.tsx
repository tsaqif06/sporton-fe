"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectIfAuthenticated() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token && token.split(".").length === 3) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Date.now() / 1000;
        if (!payload.exp || payload.exp >= currentTime) {
          router.push("/admin/products");
        }
      } catch (e) {}
    }
  }, [router]);

  return null;
}
