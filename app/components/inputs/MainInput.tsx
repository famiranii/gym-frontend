import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type BaseProps = {
  label: string;
  error?: string;
  textarea?: boolean;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const MainInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps | TextareaProps
>(({ label, error, textarea = false, className = "", ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-neutral-900">
        {label}
      </label>

      {textarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as TextareaProps)}
          className={`min-h-32 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-neutral-500 ${className}`}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          {...(props as InputProps)}
          className={`h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-neutral-900 outline-none transition focus:border-black focus:ring-4 focus:ring-black/5 placeholder:text-neutral-500 ${className}`}
        />
      )}

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

MainInput.displayName = "MainInput";

export default MainInput;