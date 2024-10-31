"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { type NavItem, navItems } from './navItems';
import QuickAddModal from '../quickAddModal/quick-add-modal';
import { usePathname } from 'next/navigation';

export default function FloatingNavbar ({
  className,
}: {
  className?: string;
}) {
  const { scrollYProgress, scrollY } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const isCurrentRoute = (route: string) => route === pathname;

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollY.get() < 6 ) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className='fixed bottom-10 max-w-fit inset-x-0 mx-auto'>
        <motion.div
          animate={{ y: visible ? 0 : 80, }}
          className='w-full inline-flex justify-end'
        >
          <QuickAddModal />
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : 100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: NavItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              {isCurrentRoute(navItem.link) ? (
                <span className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                  <span>{navItem.name} </span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </span>
              ) : (
                <span>
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">{navItem.name}</span>
                </span>
              )}

            </Link>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
