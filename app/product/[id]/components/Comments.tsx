import Stars from "./Stars";

export default function Comments({ reviews }: { reviews: ReviewType[] }) {
  const avatarColors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
  };
  return (
    <div className="flex flex-col gap-3">
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-white rounded-2xl border border-zinc-200 p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${avatarColors[r.color]}`}
            >
              {r.initials}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-zinc-800">{r.name}</div>
              <div className="text-xs text-zinc-400">{r.date}</div>
            </div>
            <Stars rating={r.rating} />
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">{r.text}</p>
          {r.verified && (
            <span className="inline-block mt-2 text-xs bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full">
              ✓ خرید تأیید شده
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
