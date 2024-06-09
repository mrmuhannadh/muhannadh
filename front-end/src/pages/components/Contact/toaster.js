import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Toaster() {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (selectedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [selectedTheme]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        limit={2}
      />
    </div>
  );
}
