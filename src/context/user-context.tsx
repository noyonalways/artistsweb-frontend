"use client";

import { getCurrentUser, logOutUser } from "@/service/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUser {
  id: string;
  email: string;
  role: string;
  exp: number;
  iat: number;
}

interface UserContextType {
  user: IUser | null;
  loading: boolean;
  logout: () => void;
  checkUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userData = await getCurrentUser();
      if (userData) {
        setUser(userData as IUser);
      } else {
        await logOutUser();
      }
    } catch {
      await logOutUser();
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await logOutUser();
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <UserContext.Provider value={{ user, loading, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
