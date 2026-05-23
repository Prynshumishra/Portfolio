import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(0.12 0.025 250)",
            color: "oklch(0.85 0.01 240)",
            border: "1px solid oklch(1 0 0 / 0.1)",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: "oklch(0.72 0.18 165)",
              secondary: "oklch(0.12 0.025 250)",
            },
          },
          error: {
            iconTheme: {
              primary: "oklch(0.65 0.22 25)",
              secondary: "oklch(0.12 0.025 250)",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
