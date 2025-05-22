import { useLocation } from "react-router";
import AddContentStudioMenu from "./AddContentStudioMenu";

const MainHeader: React.FC = () => {
    const location = useLocation()

  return (
     <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center justify-between px-3 w-full">
            <div className="flex flex-col items-start gap-1">
                <span className="text-sm text-text-base">Mupi</span>
              <h1 className="text-xl font-semibold text-heading capitalize">
                { location.pathname.replace("-", " ").replace("/", "") }
              </h1>
            </div>
           {location.pathname==="/content-studio"&&<AddContentStudioMenu />}
          </div>
        </header>
  );
};

export default MainHeader;

