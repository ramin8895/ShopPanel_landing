/** SVG sprite icon (Tabler subset in /public/assets/icons.svg). */
export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={className ? `i ${className}` : "i"} aria-hidden="true" focusable="false">
      <use href={`/assets/icons.svg#${name}`} />
    </svg>
  );
}
