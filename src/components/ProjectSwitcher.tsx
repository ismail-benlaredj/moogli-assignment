import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog } from "@/components/ui/dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { AnalyticsIcon } from "@/components/icons";
import { useState } from "react";

const groups = [
  {
    label: "Monthly",
    reports: [
      { title: "Carbon Emissions Summary", subtitle: "Monthly CO₂ Report" },
      { title: "Energy Usage Breakdown", subtitle: "Monthly Energy Report" },
    ],
  },
  {
    label: "Quarterly",
    reports: [
      {
        title: "Fleet Emissions Analysis",
        subtitle: "Transport Emissions - Q1",
      },
    ],
  },
  {
    label: "Yearly",
    reports: [
      { title: "Annual Emissions Inventory", subtitle: "Yearly CO₂ Inventory" },
      {
        title: "Net Zero Progress Report",
        subtitle: "Net Zero Tracking Summary",
      },
      {
        title: "Municipal Climate Action Review",
        subtitle: "City Climate Strategy Report",
      },
    ],
  },
];

type Report = (typeof groups)[number]["reports"][number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type ProjectSwitcherProps = PopoverTriggerProps;

export default function ProjectSwitcher({ className }: ProjectSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [showNewReportDialog, setShowNewReportDialog] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report>(
    groups[0].reports[0]
  );

  return (
    <Dialog open={showNewReportDialog} onOpenChange={setShowNewReportDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a Report"
            className={cn(
              "w-[220px] h-14 justify-between truncate border-border",
              className
            )}
          >
            <div className="relative w-20 h-full">
              <div className="bg-muted absolute p-1.5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <AnalyticsIcon className="size-8" />
              </div>
            </div>
            <div className="mx-auto w-[90%] truncate">
              {selectedReport.title}
            </div>
            <ChevronsUpDown className="ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search Report..." />
            <CommandList>
              <CommandEmpty>No Report found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.reports.map((Report) => (
                    <CommandItem
                      key={Report.title}
                      onSelect={() => {
                        setSelectedReport(Report);
                        setOpen(false);
                      }}
                      className="text-sm"
                    >
                      {Report.title}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedReport.title === Report.title
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  );
}
