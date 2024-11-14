import { Request, Response } from "express";
import { addData, readData } from "../utils/files";
import Link from "../models/Link";

export default class RegisterLink {
  async controller(req: Request, res: Response) {
    const { identifier, url } = req.body;

    if (!identifier || !url) {
      return res.status(400).json({
        message: "identifier and url are required ",
      });
    }

    const database = await readData();

    const linkExists = database.find((link) => {
      return link.identifier === identifier;
    });

    if (linkExists) {
      return res.status(400).json({
        message: "Link already exists",
      });
    }

    const newLink = new Link(identifier, url);

    await addData(newLink);

    return res.status(201).json(newLink);
  }
}
