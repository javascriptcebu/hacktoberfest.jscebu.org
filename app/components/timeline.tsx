import React from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-500 via-zinc-400 to-zinc-500 md:transform md:-translate-x-1/2" />
      
      {events.map((event, index) => (
        <div key={index} className="relative mb-12 last:mb-0">
          <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
              <div className="ml-20 md:ml-0">
                <div className="inline-block">
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{event.date}</span>
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mt-1 mb-2">
                  {event.icon && <span className="mr-2">{event.icon}</span>}
                  {event.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
            
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-2 border-zinc-400 rounded-full z-10">
              <div className="absolute inset-0 bg-zinc-400 rounded-full animate-ping opacity-20" />
            </div>
            
            <div className="flex-1 hidden md:block" />
          </div>
        </div>
      ))}
    </div>
  );
}