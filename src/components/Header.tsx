import { NavLink } from "react-router-dom";
import icLogo from "../assets/icons/logo.svg";
import c from "classnames";

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

const items: MenuItem[] = [
  {
    title: "Bridge",
    to: "/",
  },
];

export const Header: React.FC = () => {
  return (
    <header>
      <div className="px-15px h-56px flex justify-between bg-#22232B items-center gap-x-10px md:b-0 md:b-b-1px md:b-solid md:b-b-#323543 md:bg-transparent pt-4px">
        <div className="flex items-center flex-1 overflow-hidden -mt-6px">
          <a href="/">
            <img src={icLogo} className="h-20px md:h-24px block" />
          </a>
          <div className="flex-1 overflow-x-auto invisible-scroll">
            <div className={c("flex items-center relative z-2")}>
              <ul className="flex items-center list-none gap-x-20px ml-20px xl:gap-x-30px m-0 xl-ml-30px pl-0">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={c(
                      "text-15px font-500 c-muted no-underline",
                      "flex items-center",
                      "hover:op-80 transition-all"
                    )}
                  >
                    {item.onClick ? (
                      <div className="cursor-pointer" onClick={item.onClick}>
                        {item.title}
                      </div>
                    ) : (
                      <NavLink
                        to={item.to || ""}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={
                          item.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
