import { Navbar } from "../core/Navbar";
import { HackatonBanner } from "../shared/HackatonBanner";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-2 py-5">
        {/* <HackatonBanner /> */}
        {children}
      </main>
    </>
  );
};
