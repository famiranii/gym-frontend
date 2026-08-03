import { RatingBarType } from "@/types/productType";

export default function RatingBar({rate}:{rate:RatingBarType}) {
  return (
    <div key={rate.stars} className="flex items-center gap-2 text-xs text-zinc-500">
      <span className="w-3">{rate.stars}</span>
      <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full"
          style={{ width: `${rate.pct}%` }}
        />
      </div>
      <span className="w-4 text-left">{rate.count}</span>
    </div>
  );
}
