import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const ContentStudioFormatForm=()=> {
  return (
    <Card className="w-full pt-4 flex flex-col gap-2">
      <CardHeader className="px-6 mb-1">
        <p className="text-text-base">Format</p>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="w-full bg-muted">
              <TableHead className="pl-2"></TableHead>
              <TableHead className="text-text-base">Width (px)</TableHead>
              <TableHead className="text-text-base">Height (px)</TableHead>
              <TableHead className="text-text-base">
                Aspect Ratio (approx.)
              </TableHead>
              <TableHead className="text-text-base">Layout</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="pl-5">
                <RadioGroup defaultValue="option-1">
                  <RadioGroupItem
                    value="option-1"
                    id={"option-1"}
                    className="w-5 h-5 rounded-[10px] border-2 border-solid border-border"
                  />
                </RadioGroup>
              </TableCell>
              <TableCell className="text-primary">1920</TableCell>
              <TableCell className="text-primary">1097</TableCell>
              <TableCell className="text-primary">9:16</TableCell>
              <TableCell className="text-primary">Vertical</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default  ContentStudioFormatForm