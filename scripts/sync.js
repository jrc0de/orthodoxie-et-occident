import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";

const db = await mysql.createConnection(process.env.DATABASE_URL);

const dirs = {
  "vies-breves": "v_short",
  "vies-longues": "v_long",
  "vies-liturgiques": "v_liturgy",
};

for (const [dir, col] of Object.entries(dirs)) {
  const files = fs.readdirSync(`docs/synaxaire/${dir}`).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const id = path.basename(file, ".md");
    const content = fs.readFileSync(`docs/synaxaire/${dir}/${file}`, "utf-8");

    await db.execute(`UPDATE synaxaire SET ${col} = ? WHERE vies_id = ?`, [content, id]);
  }

  console.log(`✓ ${files.length} ${dir} synchronisées`);
}

await db.end();
