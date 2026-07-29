import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  disabled,
  ...props
}: Props) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full py-3 bg-neutral-900 text-[#F5F0E8] text-[13px] hover:opacity-80 transition-opacity mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
}