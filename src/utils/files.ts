import fs from "fs/promises";
import Link from "../models/Link";
import { read } from "fs";
import { stringify } from "querystring";

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

export async function countVisits(identifier: string) {
  const datas = await readData();

  const link = datas.find((link) => {
    return link.identifier === identifier;
  });

  const linkVisits: Link = {
    identifier: link!.identifier,
    url: link!.url,
    visits: link!.visits + 1,
  };

  const index = datas.findIndex((index) => {
    return index.identifier === identifier;
  });

  datas.splice(index, 1, linkVisits);

  await fs.writeFile(dataBasePath, JSON.stringify(datas, null, "\t"));
}
