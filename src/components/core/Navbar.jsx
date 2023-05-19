export const Navbar = () => {
  return (
    <Nav>
      <li>
        <InfoJobsLogo width="40" height="40" />
      </li>
      <NavItem to="/">Empleo</NavItem>
      <NavItem to="/">Mis ofertas</NavItem>
      <NavItem to="/">Hackaton</NavItem>
    </Nav>
  );
};

const NavItem = ({ children, to }) => {
  return (
    <li className="hover:bg-slate-300 hover:text-white hover:rounded-md p-2">
      <a href={to}>{children}</a>
    </li>
  );
};

const Nav = ({ children }) => {
  return (
    <nav className="shadow-md p-2 bg-white">
      <div className="max-w-7xl mx-auto px-2">
        <ul className="flex gap-10 items-center text-gray-400">{children}</ul>
      </div>
    </nav>
  );
};

const InfoJobsLogo = ({ width = "50", height = "50" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2003_7352)">
        <rect width="64" height="64" fill="#167DB7" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.8863 43.0204C26.2761 43.0204 26.5683 42.7755 26.6171 42.4326L30.1245 13.3877V13.2898C30.1245 12.9959 29.9784 12.8 29.6861 12.8H29.5887H23.8403C23.4506 12.849 23.4019 12.9959 23.3532 13.3388L19.8944 42.3837L19.8457 42.4816C19.8457 42.8245 20.138 43.0204 20.479 43.0204H25.8863ZM30.9527 51.2C35.678 51.2 39.6239 49.7306 40.4033 43.4122L44.1544 13.3877C44.1544 13.0939 44.0082 12.8979 43.6672 12.8979H43.5698L38.065 12.8C37.724 12.849 37.4317 13.0449 37.383 13.3877L33.7294 43.5592C33.3397 46.5469 31.8782 46.7428 29.7835 46.8408C29.3885 46.8629 29.0231 46.875 28.6874 46.8861C28.2779 46.8997 27.9126 46.9118 27.5913 46.9388C26.958 46.9388 26.7145 47.0857 26.617 47.7714L26.3248 50.1224V50.3673C26.3248 50.8993 26.7047 50.9538 27.0425 51.0022L27.0555 51.0041C27.1282 51.0138 27.1976 51.0236 27.2663 51.0332C27.8875 51.1206 28.4524 51.2 30.9527 51.2Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_7352">
          <rect width="64" height="64" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
