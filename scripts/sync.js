import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";

const db = await mysql.createConnection(process.env.DATABASE_URL);

const dirs = {
  "vies-breves": "vie_b",
  "vies-longues": "vita_long",
  "vies-liturgiques": "vita_liturgy",
};

for (const [dir, col] of Object.entries(dirs)) {
  const files = fs.readdirSync(`docs/synaxaire/${dir}`).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const id = path.basename(file, ".md");
    const content = fs.readFileSync(`docs/synaxaire/${dir}/${file}`, "utf-8");

    await db.execute(`UPDATE vies SET ${col} = ? WHERE id = ?`, [content, id]);
  }

  console.log(`✓ ${files.length} ${dir} synchronisées`);
}

await db.end();
