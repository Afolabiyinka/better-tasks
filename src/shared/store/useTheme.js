import { create } from "zustand";

function getTheme() {
  const stored = localStorage.getItem("bettertasks-theme");
  return stored ? JSON.parse(stored) : "light";
}

export const useTheme = create((set) => ({
  theme: getTheme(),
  setTheme: (theme) => {
    set({ theme: theme });
    localStorage.setItem("bettertasks-theme", JSON.stringify(theme));
  },
}));
