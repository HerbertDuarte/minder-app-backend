import prisma from "@/database/prisma";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import { Response } from "express";

export class ListNoteController {
  async handle(request: RequestWithUser, response: Response) {
    try {
      const userId = request.user.id;
      const data = await prisma.notes.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      response.json(data);
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao listar as notas!",
      });
    }
  }
}
