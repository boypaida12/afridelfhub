"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  id: number;
  title: React.ReactNode;
  description: React.ReactNode;
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: (
      <p className="text-3xl font-medium mb-5 text-black/80">Who We Are</p>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        Africa for Development Legacy Foundation (ADL Foundation) is a nonprofit
        organization driving inclusive and sustainable development in Ghana. We
        equip marginalized groups with the skills, confidence, and tools to
        thrive through education, enterprise, and innovation.
      </div>
    ),
  },
  {
    id: 2,
    title: (
      <p className="text-3xl font-medium mb-5 text-black/80">Our History</p>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        ADL Foundation was founded to bridge the opportunity gap for communities
        in underserved areas—particularly in the Western and Western North
        regions. What began as a grassroots initiative has grown into a dynamic
        hub for vocational training, youth empowerment, and social enterprise
        development.
      </div>
    ),
  },
  {
    id: 3,
    title: (
      <p className="text-3xl font-medium mb-5 text-black/80">Our Structure</p>
    ),
    description: (
      <ol className="space-y-2 w-11/12">
        <li>Project Management</li>
        <li>Community Engagement</li>
        <li>Digital Skills Training</li>
        <li>Business Development</li>
        <li>Media & Communications</li>
      </ol>
    ),
  },
  {
    id: 4,
    title: (
      <p className="text-3xl font-medium mb-5 text-black/80">
        Vision Statement
      </p>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        To transform the lives of individuals and communities in underprivileged
        areas by fostering a culture of innovation, entrepreneurship, and skills
        development—ultimately driving sustainable economic growth and social
        prosperity.
      </div>
    ),
  },
  {
    id: 5,
    title: (
      <p className="text-3xl font-medium mb-5 text-black/80">
        Mission Statement
      </p>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        To establish a vibrant hub that empowers marginalized communities
        through holistic capacity building, vocational training, and business
        development initiatives. We strive to bridge the gap between opportunity
        and access, unlocking potential and driving inclusive, sustainable
        growth.
      </div>
    ),
  },
];

export function AccordionDemo({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const [openItem, setOpenItem] = useState("item-1");

  const handleItemClick = (id: number) => {
    onSelect(id);
    setOpenItem(`item-${id}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)}
    >
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="mt-10"
        >
          <div className="w-full">
            <AccordionTrigger
              onClick={() => handleItemClick(item.id)}
              className={`text-xl hover:no-underline hover:cursor-pointer text-white`}
            >
              {item.title}
            </AccordionTrigger>
          </div>
          <AccordionContent
            className={`text-black/60 text-sm lg:text-base text-start`}
          >
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
