import { Badge } from "../../../shared/ui/Badge";
import { Card, CardContent, CardHeader } from "../../../shared/ui/Card";
import { pickText, type Locale } from "../../../shared/i18n";
import type { ExperienceEntry } from "../types/experience";
import { formatPeriod } from "../utils";

type ExperienceCardProps = {
  entry: ExperienceEntry;
  locale: Locale;
};

export function ExperienceCard({ entry, locale }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <p className="font-semibold">{pickText(entry.role, locale)}</p>
          <p className="text-sm text-neutral-600">
            {entry.org} · {entry.location} ·{" "}
            {formatPeriod(entry.start, entry.end)}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-800">
            {entry.highlights.map((h, idx) => (
              <li key={idx}>{pickText(h, locale)}</li>
            ))}
          </ul>

          {entry.stack && entry.stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
