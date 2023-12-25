import { FC } from "react";
import { iPropsButton } from "../Utils/Interface";
import { diffButton } from "../Utils/choiceSizes";
import { cn } from "../Utils/cn";

const GlobalButton: FC<iPropsButton> = ({
  buttonName,
  className,
  choice,
  size,
  ...props
}) => {
  return (
    <button {...props} className={cn(diffButton({ choice, size }), className)}>
      {buttonName}
    </button>
  );
};

export default GlobalButton;
