import fs from "fs/promises";
import Link from "../models/Link";
import { read } from "fs";

const dataBasePath = "src/database.json";

export async function readData(): Promise<Link[]> {
  const datas = await fs.readFile(dataBasePath);
  const parse = JSON.parse(datas.toString());

  return parse;
}

export async function addData(link: Link) {
  const datas = await readData();
  datas.push(link);

  await fs.writeFile(dataBasePath, JSON.stringify(datas, null, "\t"));
}
