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
      <p>Who We Are</p>
    ),
    description: (
      <div>
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
      <p>Our History</p>
    ),
    description: (
      <div>
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
      <p>Our Structure</p>
    ),
    description: (
      <div className="grid grid-cols-3">
        <p>1. Project Management</p>
        <p>2. Community Engagement</p>
        <p>3. Digital Skills Training</p>
        <p>4. Business Development</p>
        <p>5. Media & Communications</p>
      </div>
    ),
  },
  {
    id: 4,
    title: (
      <p>
        Vision Statement
      </p>
    ),
    description: (
      <div>
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
      <p>
        Mission Statement
      </p>
    ),
    description: (
      <div>
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
              className={`text-2xl hover:no-underline hover:cursor-pointer font-medium text-black/80`}
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
