import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: exactly one sentence, 1-200 chars, UTF-8, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "A subscription service that mails your houseplants to a spa for a weekend while you are on holiday, because guilt is the best fertilizer and plant parents pay $29 a month.";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
