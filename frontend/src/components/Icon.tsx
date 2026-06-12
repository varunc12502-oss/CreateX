type IconProps = {
  name:
    | "ai"
    | "bell"
    | "chevron"
    | "design"
    | "document"
    | "folder"
    | "home"
    | "moon"
    | "pdf"
    | "presentation"
    | "resume"
    | "search"
    | "send"
    | "settings";
  className?: string;
};

const paths = {
  ai: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="4" />
      <path d="M9 8V5h6v3M8.5 13h.01M15.5 13h.01M12 18v3M8 21h8" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  design: (
    <>
      <path d="m14 5 5 5L9 20H4v-5L14 5Z" />
      <path d="m12 7 5 5" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M10 13h6M10 17h6" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7h7l2 2h9v10H3z" />
      <path d="M3 7v12" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10M10 20v-6h4v6" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />,
  pdf: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M9.5 16h5M9.5 12h3" />
    </>
  ),
  presentation: (
    <>
      <path d="M4 4h16v11H4zM12 15v6M8 21h8" />
      <path d="m8 12 3-3 2 2 3-4" />
    </>
  ),
  resume: (
    <>
      <path d="M7 3h10v18H7z" />
      <path d="M10 8h4M10 12h4M10 16h2" />
      <circle cx="12" cy="6" r="1" />
    </>
  ),
  search: <path d="m21 21-4.3-4.3M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
  send: (
    <>
      <path d="m21 3-8 18-3-8-8-3 19-7Z" />
      <path d="m10 13 11-10" />
    </>
  ),
  settings: (
    <>
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path d="M3 12h3M18 12h3M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

export default Icon;
