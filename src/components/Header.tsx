import icLogo from "../../public/logo.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="px-15px h-56px flex justify-between bg-#22232B items-center gap-x-10px md:b-0 md:b-b-1px md:b-solid md:b-b-#323543 md:bg-transparent pt-4px">
        <div className="flex items-center flex-1 overflow-hidden -mt-6px">
          <img src={icLogo} className="h-20px md:h-23px block" />
        </div>
      </div>
    </header>
  );
};
