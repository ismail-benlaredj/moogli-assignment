import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";

import ContentStudioForm from "@/components/ContentStudioForm";
import { useContentStudioList } from "./ContentStudio";

const ContentStudioDialog = ({
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
 const { contentStudioList, setContentStudioList } = useContentStudioList()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="min-w-screen h-screen max-w-none max-h-none p-0 m-0 rounded-none border-none">
        <div className="flex flex-col justify-between h-full">
          <DialogTitle className="hidden"></DialogTitle>
          <ContentStudioForm onClick={() => {
            contentStudioList.pop()
            setContentStudioList([...contentStudioList])
            setOpen(false)
            }} />
          <DialogFooter className="px-6 py-4 border-t bg-white h-20 absolute bottom-0 w-full">
            <div className="inline-flex items-center gap-4 mr-8">
              <Button
                variant="outline"
                className="rounded-2xl bg-white border-primary text-primary hover:bg-muted hover:text-primary"
              >
                <UserPen className="w-5 h-5 text-primary" />
                Need Support?
              </Button>
              <Button className="rounded-2xl" variant={"default"} onClick={() => setOpen(false)}>
                Submit
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentStudioDialog;
