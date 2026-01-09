import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-2 sm:px-4 lg:px-6",
        "max-w-screen-xl", // 1280px max width
        className
      )}
    >
      {children}
    </div>
  );
}
