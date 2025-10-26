import { LucideAward, LucideLampDesk, LucideSpeech } from "lucide-react";
import React from "react";
import { WhiteBgCard } from "./white-bg-card";

const rvmContent = [
  {
    icon: <LucideSpeech size={40}/>,
    title: "Women's Empowerment",
    content: (
      <div>
        <p className="text-sm lg:text-base">
          Supporting women through practical training, mentorship, and
          enterprise support to foster independence and economic resilience.
        </p>
      </div>
    ),
  },
  {
    icon: <LucideAward size={40}/>,
    title: "Capacity Building",
    content: (
      <div>
        <p className="text-sm lg:text-base">
          Enhancing leadership and technical skills through workshops,
          mentorship, and coaching for youth and community leaders.
        </p>
      </div>
    ),
  },
  {
    icon: <LucideLampDesk size={40}/>,
    title: "Digital Literacy",
    content: (
      <div>
        <p className="text-sm lg:text-base">
          Providing essential digital training to help individuals and small
          businesses thrive in a technology-driven world.
        </p>
      </div>
    ),
  },
//   {
//     icon: <LucideBriefcaseBusiness size={40}/>,
//     title: "Entrepreneurship & Business Development",
//     content: (
//       <div>
//         <p className="text-sm lg:text-base">
//           Equipping entrepreneurs with branding, business planning, and
//           financial literacy tools to scale sustainably.
//         </p>
//       </div>
//     ),
//   },
//   {
//     icon: <LucideHome size={40}/>,
//     title: "Co-working & Innovation Spaces",
//     content: (
//       <div>
//         <p className="text-sm lg:text-base">
//           Offering shared workspaces and creative hubs that encourage
//           collaboration, networking, and innovation.
//         </p>
//       </div>
//     ),
//   },
];

export default function WhatWeDo() {
  return (
    <section className="text-center pb-20" id="services">
      <h2 className="text-7xl font-medium max-md:text-5xl max-sm:text-4xl text-black/80 mb-10">
        What We Do
      </h2>
      <div className="lg:bg-[url('/assets/images/project6.jpg')] bg-center bg-cover h-160 relative">
        <div className="lg:w-250 xl:w-300 w-full absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-[49rem]:px-5">
            {rvmContent.map((card, index) => (
              <WhiteBgCard
              title={card.title}
                icon={card.icon}
                className="border-none z-997"
                key={index}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
