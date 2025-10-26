import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import clsx from "clsx";
import { ExpandableContent } from "./expandable-content";

interface WhiteBgCardProps {
  title?: string;
  content?: React.ReactNode;
  className?: string;
  iconPath?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  expandable?: boolean;
}

export const WhiteBgCard = ({
  icon,
  content,
  className,
  title,
  footer,
  expandable = false,
}: WhiteBgCardProps) => {
  return (
    <div
      className={clsx(
        "relative rounded-2xl h-fit p-0.5 bg-linear-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C]",
        className
      )}
    >
      <Card
        className={clsx(
          "rounded-smooth-lg overflow-hidden h-full",
        )}
      >
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-left">
            {title}
            {icon}
          </CardTitle>
        </CardHeader>
        <ExpandableContent
          className="px-6 text-left"
          expandable={expandable}
        >
          {content}
        </ExpandableContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </div>
  );
};
