import { Navbar } from "../core/Navbar";

export const PageLayout = ({ children }) => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-2 py-5">{children}</section>
    </>
  );
};
