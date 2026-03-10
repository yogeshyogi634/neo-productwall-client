export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background-app flex items-center justify-center z-50">
      {/* Decorative accent */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="/nk-logo.svg"
            alt="Neokred"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Spinner */}
        <div className="flex items-center justify-center mb-4">
          <svg
            className="animate-spin h-8 w-8 text-brand-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>

        {/* Loading text */}
        <p className="text-text-default-secondary text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
