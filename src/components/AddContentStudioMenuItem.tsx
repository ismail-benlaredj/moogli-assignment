
interface AddContentStudioMenuItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

const AddContentStudioMenuItem: React.FC<AddContentStudioMenuItemProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-xl p-2 hover:bg-muted group transition-all duration-50 w-full cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick(e);
      }}
    >
      <div className="size-18 transition-all duration-200">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <h3 className="text-sm font-semibold text-heading capitalize">
          {title}
        </h3>
        <p className="text-xs text-text-base">{description}</p>
      </div>
    </div>
  );
};



export default AddContentStudioMenuItem;
