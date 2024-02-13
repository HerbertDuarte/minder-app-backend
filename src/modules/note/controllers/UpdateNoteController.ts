import prisma from "@/database/prisma";
import { Response } from "express";
import { UpdateNoteBody } from "../dtos/UpdateNoteDto";
import { RequestWithUser } from "@/interfaces/RequestWithUser";
export class UpdateNoteController {
  async handle(request: RequestWithUser, response: Response) {
    try {
      const { id } = request.params;
      const userId = request.user.id;
      const newData: UpdateNoteBody = request.body;

      const data = await prisma.notes.update({
        where: { id, userId },
        data: {
          ...newData,
        },
      });

      response.json(data);
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao atualizar a nota!",
      });
    }
  }
}
