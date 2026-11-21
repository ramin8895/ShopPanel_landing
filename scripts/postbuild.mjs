// Next's static export also writes /404/ and /_not-found/ as normal pages (HTTP 200 if deployed).
// The real 404 is out/404.html (served by nginx `error_page 404`), so drop the duplicates
// to avoid soft-404 URLs.
import { rmSync } from "node:fs";
for (const d of ["out/404", "out/_not-found"]) rmSync(d, { recursive: true, force: true });
console.log("postbuild: removed duplicate 404 routes");
