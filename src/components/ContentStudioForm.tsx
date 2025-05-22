/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lightbulb, Upload, X } from "lucide-react";
import PreviewImg from "./icons/PreviewImg";
import { Separator } from "./ui/separator";
import { useState } from "react";
import flatiPhone from "../assets/images/flatiPhone.png";
import screen from "../assets/images/screen.png";
import ContentStudioFormatForm from "@/components/ContentStudioFormatForm";
import { useContentStudioList } from "./ContentStudio";
import { Value } from "@radix-ui/react-select";

export default function ContentStudioForm({
  onClick,
}: {
  onClick: () => void;
}) {
  const [channel, setChannel] = useState("");
  const [Uploaded, setUploaded] = useState(false);

  const { contentStudioList } = useContentStudioList();
  const { setContentStudioList } = useContentStudioList();

  const handleUpload = (obj: any) => {
    if (channel === "app") {
      setContentStudioList([...contentStudioList, obj]);
      setUploaded(true);
    }
  };

  const channelOptions = [
    { id: "mupi", label: "Mupi" },
    { id: "app", label: "App" },
  ];

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <header className="bg-white flex flex-col w-full items-center gap-4 px-20 py-6 top-0 left-0 border-b border-border">
        <div className="flex items-center justify-between relative self-stretch w-full">
          <Button
            variant="ghost"
            size="icon"
            className="p-0"
            onClick={() => onClick()}
          >
            <X className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            className="text-primary hover:bg-transparent hover:underline hover:text-primary"
          >
            <Lightbulb className="w-6 h-6" />
            <span className="font-body-1-medium text-brandmain-500 whitespace-nowrap">
              Content Guide
            </span>
          </Button>
        </div>
      </header>
      <Separator color="border" />
      <div className="flex bg-white flex-grow items-center justify-center">
        <div className="w-2/5 h-full flex items-center justify-center border-r border-border">
          {channel === "app" ? (
            <div className="flex justify-center items-center relative">
              <img src={flatiPhone} alt="Mobile Iphone" className="h-[70%]" />
              {Uploaded && (
                <img
                  src={screen}
                  alt="Image screen"
                  className="absolute top-2 left-[18px]"
                />
              )}
            </div>
          ) : (
            <>
              <PreviewImg />
              <p className="text-sm text-text-base">
                Preview wil show up here
                <br />
                after you select a channel
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col items-start gap-6 p-6 relative flex-1 self-stretch grow ">
          <Card className="w-full border border-solid border-border rounded-2xl">
            <CardContent className="p-4">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <Label className="text-text-base">Channel</Label>
                <RadioGroup
                  className="flex items-start gap-2"
                  onValueChange={(value) => setChannel(value)}
                >
                  {channelOptions.map((option) => (
                    <div
                      key={option.id}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-solid border-neutrallight-50"
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        className="w-5 h-5 rounded-[10px] border-2 border-solid border-border"
                      />
                      <Label
                        htmlFor={option.id}
                        className="text-text-base whitespace-nowrap"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
          {channel === "app" && <ContentStudioFormatForm />}
          <Card className="w-full border border-solid border-border rounded-2xl">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="flex flex-col items-start gap-2.5 flex-1">
                <Label className="text-text-base">Name</Label>
                <div className="w-full">
                  <Input
                    placeholder="Write here"
                    className="px-4 py-5 bg-mutded border-border rounded-xl text-primary/80"
                    value={Uploaded ? "Content Studio" : ""}
                    onChange={(e) => Value+e.target.value}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 flex-1">
                <Label className="text-text-base">Content</Label>
                <Button
                  onClick={() => handleUpload({ name: "Content", src: screen })}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 px-4 py-5 rounded-xl border border-solid border-border"
                >
                  <Upload className="w-6 h-6 text-primary" />
                  <span className="font-body-default-medium text-primary">
                    Upload File
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
