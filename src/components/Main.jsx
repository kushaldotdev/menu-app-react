import { Toaster } from "@/components/ui/sonner";

const Main = ({ className = "", children }) => {
  return (
    <>
      <main className={`container my-4 mx-auto min-h-[calc(100vh-145px-56px-2rem)] md:min-h-[calc(100vh-70px-56px-2rem)] ${className}`}>
        {children}
        <Toaster position="bottom-right" duration={7000} limit={2} closeButton richColors />
      </main>
    </>
  );
};

export default Main;
