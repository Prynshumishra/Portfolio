import { ArrowLeft, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Glowing 404 */}
        <div className="relative mb-6">
          <h1 className="text-[8rem] md:text-[12rem] font-black leading-none text-primary/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-black text-primary text-glow">
              404
            </span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for has drifted into the void.
          It might have been moved, deleted, or perhaps it never existed.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="cosmic-button flex items-center gap-2"
          >
            <Home size={16} />
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-full border border-border hover:border-primary text-foreground/70 hover:text-primary transition-all duration-300 font-medium flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};