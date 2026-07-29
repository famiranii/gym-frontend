export default function Input({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-1 [&_input]:w-full [&_input]:pb-1.5 [&_input]:text-sm [&_input]:bg-transparent [&_input]:border-b [&_input]:border-[#c8c2b6] [&_input]:text-neutral-900 [&_input]:outline-none [&_input]:placeholder-[#bbb] [&_input:focus]:border-neutral-900 [&_input]:transition-colors">
      <label className="block text-[11px] text-neutral-400 ">{label}</label>
      {children}
    </div>
  );
}
