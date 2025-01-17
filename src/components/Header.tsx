import c from "classnames";
import { NavLink } from "react-router-dom";
import { ExternalLinks } from "./Footer";
import { Logo } from "./Logo";

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
      <div
        className={c(
          "relative h-64px bg-#633821 bg-op-40 flex items-center",
          "lg:px-32px lg:bg-op-10 px-15px z-2 [&_a.active]:(c-#633821)"
        )}
      >
        <div className="flex items-center flex-1 overflow-hidden">
          <NavLink to="/">
            <Logo loop />
          </NavLink>
        </div>
        <NavLink
          to={ExternalLinks.trade}
          target="_blank"
          rel="noopener noreferrer"
          className={c(
            "flex items-center justify-center h-40px hover:not-disabled:cursor-pointer transition-all duration-200 ease-linear disabled:pointer-events-none py-11px px-20px rd-10px",
            "bg-#B38160 text-#fff hover:not-disabled:bg-op-75 disabled:cursor-initial disabled:text-#8F8F8F disabled:bg-#47494C",
            "text-14px leading-18px font-600"
          )}
        >
          <span>Trade</span>
        </NavLink>
      </div>
    </header>
  );
};
