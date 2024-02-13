import { Response, response } from "express";
import prisma from "@/database/prisma";
import { CreateNoteBody } from "../dtos/CreateNoteDto";
import { RequestWithUser } from "@/interfaces/RequestWithUser";

export class CreateNoteController {
  async handler(request: RequestWithUser, response: Response) {
    try {
      const body : CreateNoteBody = request.body;
      console.log(body)
      const createdNote = await prisma.notes.create({
        data: {
          ...body,
          userId : request.user.id
        },
      });
      console.log(createdNote)
      response.json(createdNote)

    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao criar nota!",
      });
    }
  }
}
