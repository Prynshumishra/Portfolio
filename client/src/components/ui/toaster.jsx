// toaster.jsx
import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster(props) {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "14px 18px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          maxWidth: "380px",
        },
        success: {
          iconTheme: { primary: "#10b981", secondary: "#fff" },
          style: {
            borderLeft: "4px solid #10b981",
          },
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "#fff" },
          style: {
            borderLeft: "4px solid #ef4444",
          },
        },
      }}
      {...props}
    />
  );
}

