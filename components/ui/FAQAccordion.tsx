'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/content/faq';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-[#E2DDD8] ${className}`} role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} role="listitem">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left text-[#1C2B3A] font-semibold text-lg hover:text-[#1B3A5C] transition-colors min-h-[44px] cursor-pointer"
            >
              <span>{item.vraag}</span>
              <ChevronDown
                size={22}
                className={`flex-shrink-0 mt-0.5 text-[#C8965A] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'pb-5' : ''
              }`}
            >
              <p className="text-[#64748B] leading-relaxed">{item.antwoord}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
