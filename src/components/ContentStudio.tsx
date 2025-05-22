/* eslint-disable @typescript-eslint/no-explicit-any */
import MainHeader from "@/components/MainHeader";
import ContentStudioEmptyImg from "@/components/icons/ContentStudioEmptyImg";
import ContentStudioMainList from "./ContentStudioMainList";
import { createContext, useState, useContext } from "react";

const ContentStudioListContext = createContext([] as any);

const ContentStudio = () => {
  const [contentStudioList, setContentStudioList] = useState<any>([]);

  return (
    <div className="h-full">
      <ContentStudioListContext.Provider
        value={{ contentStudioList, setContentStudioList }}
      >
        <MainHeader />
      </ContentStudioListContext.Provider>
      {contentStudioList.length > 0 ? (
        <ContentStudioMainList contentStudioList={contentStudioList} />
      ) : (
        <div className="flex flex-col mx-auto items-center justify-center mt-32 gap-3">
          <ContentStudioEmptyImg />
          <p className="text-text-base align-middle ml-8 font-semibold">
            Content Studio is empty currently
          </p>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContentStudioList = () => useContext(ContentStudioListContext);
export default ContentStudio;
