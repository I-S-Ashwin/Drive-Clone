import Image from "next/image";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

const EmptyState = ({
  title = "No files yet",
  description = "Upload your first file to get started",
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Illustrated empty state with animated floating effect */}
      <div className="relative mb-8 animate-float">
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Cloud background */}
          <ellipse cx="100" cy="140" rx="80" ry="10" className="fill-light-300 dark:fill-dark-100/30" />

          {/* Folder base */}
          <rect x="40" y="50" width="120" height="80" rx="8" className="fill-brand/10 dark:fill-brand/20 stroke-brand/30" strokeWidth="1.5" />
          <path d="M40 58C40 53.5817 43.5817 50 48 50H85L95 40H152C156.418 40 160 43.5817 160 48V50H40V58Z" className="fill-brand/20 dark:fill-brand/30" />

          {/* File 1 */}
          <rect x="60" y="65" width="40" height="50" rx="4" className="fill-white dark:fill-dark-200 stroke-light-200 dark:stroke-dark-100" strokeWidth="1" />
          <line x1="68" y1="78" x2="92" y2="78" className="stroke-light-200 dark:stroke-dark-100" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="86" x2="88" y2="86" className="stroke-light-200 dark:stroke-dark-100" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="94" x2="84" y2="94" className="stroke-light-200 dark:stroke-dark-100" strokeWidth="2" strokeLinecap="round" />

          {/* File 2 (offset) */}
          <rect x="100" y="60" width="40" height="50" rx="4" className="fill-white dark:fill-dark-200 stroke-light-200 dark:stroke-dark-100" strokeWidth="1" />
          <rect x="108" y="72" width="24" height="18" rx="2" className="fill-brand/15 dark:fill-brand/25" />
          <circle cx="116" cy="80" r="3" className="fill-brand/30" />
          <path d="M108 86L118 78L128 86" className="stroke-brand/40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Upload arrow */}
          <circle cx="130" cy="45" r="16" className="fill-brand dark:fill-brand-100" />
          <path d="M130 38V52M124 44L130 38L136 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Sparkles */}
          <circle cx="45" cy="35" r="2" className="fill-brand/40 animate-pulse" />
          <circle cx="160" cy="30" r="1.5" className="fill-blue/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="170" cy="55" r="2.5" className="fill-pink/40 animate-pulse" style={{ animationDelay: "1s" }} />
        </svg>
      </div>

      <h3 className="h3 text-light-100 dark:text-light-200 mb-2">{title}</h3>
      <p className="body-2 text-light-200 dark:text-light-200/60 text-center max-w-[300px]">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
