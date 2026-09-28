"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon, services, type MenuProps } from "./data";

export function MenuBackdrop({ onSelect }: MenuProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative h-[340px] w-[720px] overflow-hidden text-white">
      {services.map((item, i) => (
        <Image
          key={item.href}
          src={item.image}
          alt=""
          fill
          sizes="720px"
          className={`object-cover transition-all duration-700 ${
            i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-deepest/90 via-deepest/60 to-deepest/10" />

      <div className="relative flex h-full flex-col justify-between p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
          Sobre o atendimento
        </p>
        <ul className="space-y-1">
          {services.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelect(item.href);
                  }}
                  className="group flex items-center gap-3 py-1"
                >
                  <span
                    className={`display-heading text-3xl transition-all duration-300 ${
                      isActive ? "translate-x-1 text-white" : "text-white/45"
                    }`}
                  >
                    {isActive ? (
                      <em className="font-serif-italic">{item.title}</em>
                    ) : (
                      item.title
                    )}
                  </span>
                  <ArrowIcon
                    className={`text-electric transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <p
          key={active}
          className="animate-quiz-in max-w-[34ch] text-[15px] font-normal text-white/80"
        >
          {services[active].text}
        </p>
      </div>
    </div>
  );
}
