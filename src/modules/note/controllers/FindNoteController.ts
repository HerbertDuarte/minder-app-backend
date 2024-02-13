import prisma from "@/database/prisma";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
import { Response } from "express";

export class FindNoteController {
  async handle(request: RequestWithUser, response: Response) {
    try {
      const { id } = request.params;
      const userId = request.user.id;

      const data = await prisma.notes.findUniqueOrThrow({
        where: { id, userId },
      });
      response.json(data);
    } catch (e) {
      if (e.code === "P2025") {
        response.status(404).json({
          ...e,
          message: "A nota não foi encontrada!",
        });
      } else {
        response.status(400).json({
          ...e,
          message: "Erro ao buscar nota!",
        });
      }
    }
  }
}
