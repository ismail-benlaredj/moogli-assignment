import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import UploadContentImg from "./icons/UploadContentImg";
import CustomTemplateImage from "./icons/CustomTemplateImage";
import { AiContentImg } from "./icons";
import AddContentStudioMenuItem from "@/components/AddContentStudioMenuItem";
import ContentStudioDialog from "@/components/ContentStudioDialog";

const AddContentStudioMenu: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogChange = (open: boolean) => {
    setDialogOpen(open);
    if (open) {
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={(open) => {
          if (!dialogOpen) {
            setDropdownOpen(open);
          }
        }}
      >
        <Button
          variant={"default"}
          asChild
          className="rounded-2xl cursor-pointer"
        >
          <DropdownMenuTrigger className="flex justify-between items-center">
            Add Content
            <Plus />
          </DropdownMenuTrigger>
        </Button>
        <DropdownMenuContent className="w-96 p-3 px-5 rounded-2xl mr-6">
          <DropdownMenuItem
            className="p-0 rounded-2xl"
            onSelect={(e) => e.preventDefault()}
          >
            <AddContentStudioMenuItem
              title="Upload Content"
              description="Upload your own design and creative assets to use in your campaigns."
              icon={
                <UploadContentImg className="size-18 !group-hover:first:text-red-500  transition-all duration-200" />
              }
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
                handleDialogChange(true);
              }}
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="p-0 rounded-2xl"
            onSelect={(e) => e.preventDefault()}
          >
            <AddContentStudioMenuItem
              title="Upload Content"
              description="Upload your own design and creative assets to use in your campaigns."
              icon={
                <CustomTemplateImage className="size-18 !group-hover:first:text-red-500  transition-all duration-200" />
              }
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
                handleDialogChange(true);
              }}
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="p-0 rounded-2xl"
            onSelect={(e) => e.preventDefault()}
          >
            <AddContentStudioMenuItem
              title="Customize Template"
              description="Choose from our template library and customize to match your brand."
              icon={
                <AiContentImg className="size-18 !group-hover:first:text-red-500  transition-all duration-200" />
              }
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
                handleDialogChange(true);
              }}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ContentStudioDialog open={dialogOpen} setOpen={handleDialogChange}>
        <></>
      </ContentStudioDialog>
    </>
  );
};

export default AddContentStudioMenu;
