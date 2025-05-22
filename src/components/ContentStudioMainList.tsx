/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";

import { Settings2 } from "lucide-react";

interface ContentStudioMainListProps {
  contentStudioList: Array<any>;
}

const ContentStudioMainList: React.FC<ContentStudioMainListProps> = ({
  contentStudioList,
}) => {
  return (
    <div className="flex flex-col w-full my-5">
      <div className="flex gap-4  text-text-base">
        <Button
          variant={"outline"}
          className="rounded-2xl border-border bg-white"
        >
          <span>
            <Settings2 className="w-5 h-5" />
          </span>
          filters
        </Button>
        <Button
          variant={"outline"}
          className="rounded-2xl bg-transparent border-border"
        >
          Templates
        </Button>
        <Button
          variant={"outline"}
          className="rounded-2xl bg-transparent border-border"
        >
          Uploaded
        </Button>
        <Button
          variant={"outline"}
          className="rounded-2xl bg-transparent border-border"
        >
          Mupi
        </Button>
        <Button
          variant={"outline"}
          className="rounded-2xl bg-transparent border-border"
        >
          App
        </Button>
      </div>
      <div className="flex flex-wrap mt-4 gap-3" >
      {contentStudioList.map((item: any, index: number) => (
          <div className="py-12 px-16 h-[30%] bg-border rounded-3xl" key={index}>
            <img src={item.src} alt="Image screen" className="h-[10%] w-56" />
          </div>
      ))}
      </div>
    </div>
  );
};

export default ContentStudioMainList;
