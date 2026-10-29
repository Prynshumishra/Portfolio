import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

export const AdminLogin = ({ onLogin, authLoading }) => {
  const [keyInput, setKeyInput] = useState("");
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(keyInput);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 py-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold transition-all"
        >
          <ArrowLeft size={14} /> back_to_portfolio()
        </Link>
        <span className="font-mono text-xs text-[#5A4D44]">// admin_console_v2.0</span>
      </div>

      <div className="w-full max-w-md mx-auto my-12 terminal-card overflow-hidden">
        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-[#E2D7C9] bg-[#F2ECE4]/70">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs text-[#5A4D44] ml-2">admin_auth.ts</span>
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C9] text-[#5C4033]">
            <Lock size={10} /> hmac_sha256
          </span>
        </div>

        <div className="p-7 sm:p-8 text-left">
          <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#E2D7C9] flex items-center justify-center mb-5">
            <ShieldCheck size={20} className="text-[#231915]" />
          </div>

          <h1 className="text-2xl font-bold text-[#231915] tracking-tight">
            Portfolio Admin Console
          </h1>
          <p className="text-xs text-[#5A4D44] mt-1.5 leading-relaxed">
            Enter your administrator passkey to manage portfolio projects, client work, and incoming contact inquiries.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" autoComplete="off">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                // admin_access_key *
              </label>
              <div className="relative">
                <Lock
                  size={13}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A4D44]"
                />
                <input
                  type={showKey ? "text" : "password"}
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Enter admin key..."
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowKey((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A4D44] hover:text-[#231915] cursor-pointer"
                  aria-label="Toggle key visibility"
                >
                  {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl font-mono text-xs font-semibold bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] transition-all cursor-pointer disabled:opacity-50"
            >
              {authLoading ? "verifying_credentials..." : "authenticate_admin()"}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center font-mono text-[11px] text-[#5A4D44]">
        Priyanshu Mishra · Portfolio Administration Console
      </div>
    </div>
  );
};
