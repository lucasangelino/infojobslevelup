import { Navbar } from "../core/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-2 py-5">{children}</main>
    </>
  );
};
