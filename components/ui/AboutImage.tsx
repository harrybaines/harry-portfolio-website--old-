"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface AboutImageProps {
  src: StaticImageData | string;
  alt: string;
  caption: string;
}

export default function AboutImage({ src, alt, caption }: AboutImageProps) {
  // <motion.div
  //   whileHover={{ scale: 1.15 }}
  //   transition={{ type: "spring", stiffness: 300, damping: 25 }}
  // >
  return (
    <>
      <div className="flex flex-col w-[200px] h-[275px]">
        <Image
          {...{
            src,
            alt,
          }}
          className="w-full h-full object-cover shadow-lg pointer-events-none rounded-2xl"
          priority
        />
      </div>
      <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm text-center">
        {caption}
      </p>
    </>
  );
  // </motion.div>
}
