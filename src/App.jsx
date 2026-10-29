import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#3B2A22",
            color: "#F5EFE6",
            border: "1px solid #5C4033",
            boxShadow: "0 12px 32px -8px rgba(59, 42, 34, 0.35)",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: "#EDE3D6",
              secondary: "#3B2A22",
            },
          },
          error: {
            iconTheme: {
              primary: "#E57373",
              secondary: "#3B2A22",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin-portfolio" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
