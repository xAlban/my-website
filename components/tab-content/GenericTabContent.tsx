import React, { ReactNode } from "react";

interface GenericTabContentProps {
  children: ReactNode;
  title?: string;
  titleClassName?: string;
  containerClassName?: string;
}

export default function GenericTabContent(props: GenericTabContentProps) {
  const { children, title, titleClassName, containerClassName } = props;
  return (
    <div className="w-full flex flex-col gap-y-5 text-left py-4">
      {title && (
        <h2 className={`text-custom-purple text-3xl ${titleClassName}`}>
          {title}
        </h2>
      )}
      <div className={containerClassName}>{children}</div>
    </div>
  );
}
