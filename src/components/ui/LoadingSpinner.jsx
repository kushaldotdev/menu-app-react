import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <Loader2 className="w-16 h-16 text-primary animate-spin" />

      <p className="mt-4 text-xl text-muted-foreground dark:text-gray-300">Loading...</p>

      <div className="mt-6 flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-100"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
