export default function Stars({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const sz = size === "md" ? "text-base" : "text-xs";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`${sz} ${s <= Math.round(rating) ? "text-amber-400" : "text-zinc-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
