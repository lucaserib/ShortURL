import { Request, Response } from "express";
import { addData, countVisits, readData } from "../utils/files";
import Link from "../models/Link";

export default class GetLink {
  async controller(req: Request, res: Response) {
    const { identifier } = req.params;

    const database = await readData();

    const linkExists = database.find((link) => {
      return link.identifier === identifier;
    });

    if (!linkExists) {
      return res.status(404).json({
        message: "Link dont exist",
      });
    }

    await countVisits(linkExists.identifier);

    return res.json({
      url: linkExists.url,
    });
  }
}
