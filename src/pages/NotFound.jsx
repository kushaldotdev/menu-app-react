import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <Card className="bg-white dark:bg-gray-800 p-4 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4">
        <AlertTriangle className="w-20 h-20 text-yellow-500 mx-auto mb-6 animate-bounce" />
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Oops! Page not found.</p>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Go Back Home
          </Link>
        </Button>
      </Card>

      <div className="mt-8 flex gap-4">
        <Button variant="outline" asChild>
          <Link to="/about" className="flex items-center gap-2">
            About Us
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact" className="flex items-center gap-2">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
