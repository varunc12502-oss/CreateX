import { useEffect, useMemo, useState } from "react";

export type CurrentUser = {
  id: string;
  fullName: string;
  plan: "Free" | "Premium" | "Team";
};

const storageKey = "createx-current-user";

const defaultUser: CurrentUser = {
  id: "local-user",
  fullName: "Creator",
  plan: "Free",
};

export function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "CX";
}

export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser>(() => {
    if (typeof window === "undefined") {
      return defaultUser;
    }

    const storedUser = window.localStorage.getItem(storageKey);

    if (!storedUser) {
      return defaultUser;
    }

    try {
      return { ...defaultUser, ...JSON.parse(storedUser) } as CurrentUser;
    } catch {
      return defaultUser;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(user));
  }, [user]);

  const firstName = useMemo(() => user.fullName.split(" ")[0] || "Creator", [user.fullName]);

  return {
    user,
    firstName,
    initials: getInitials(user.fullName),
    setUser,
  };
}
