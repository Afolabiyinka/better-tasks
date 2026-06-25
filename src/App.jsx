import { Suspense, useEffect } from "react";
import Router from "./Routes";
import { Toaster } from "sonner";
import LoadingContainer from "./Components/loader/LoadingContainer";
import { useTheme } from "./shared/store/useTheme";

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.body.classList.remove("light", "dark");
    document.body.classList.add(appliedTheme);
  }, [theme]);
  return (
    <div className="flex w-full h-full flex-col justify-center items-center font-[Inter]">
      <Suspense fallback={<LoadingContainer />}>
        <Router />
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "9999px",
            background: "#111",
            color: "#fff",
            padding: "14px 18px",
            fontSize: "14px",
          },
        }}
      />
    </div>
  );
}

export default App;
