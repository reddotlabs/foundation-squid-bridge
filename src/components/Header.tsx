import { NavLink } from "react-router-dom";
import icLogo from "../assets/icons/logo.svg";
import c from "classnames";
import { ExternalLinks } from "./Footer";

export type MenuItem = {
  to?: string;
  onClick?: () => void;
  title: React.ReactNode;
  icon?: React.ReactNode;
  isExternal?: boolean;
  child?: MenuItem[];
  isMobile?: boolean;
  desc?: React.ReactNode;
  isActive?: (path: string) => boolean;
};

export const Header: React.FC = () => {
  return (
    <header>
      <div className="px-15px h-56px flex justify-between bg-#22232B items-center gap-x-10px md:bg-transparent pt-4px">
        <div className="flex items-center flex-1 overflow-hidden">
          <a href="/">
            <img src={icLogo} className="h-28px md:h-32px block" />
          </a>
        </div>
        <NavLink
          to={ExternalLinks.trade}
          target="_blank"
          rel="noopener noreferrer"
          className={c(
            "flex items-center justify-center rd-5px h-32px font-700 text-16px hover:not-disabled:cursor-pointer transition-all duration-200 ease-linear disabled:pointer-events-none px-24px",
            "bg-#C49373 text-#fff hover:not-disabled:bg-op-75 disabled:cursor-initial disabled:text-#8F8F8F disabled:bg-#47494C",
            "text-16px leading-21px font-700"
          )}
        >
          <div className="text-14px font-500 leading-14px !c-#fff">Trade</div>
        </NavLink>
      </div>
    </header>
  );
};
