import prisma from "@/database/prisma";
import { Request, Response } from "express";
export class DeleteNoteController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await prisma.notes.delete({
        where: { id },
      });

      response.json({
        message: "Nota deletada com sucesso",
      });
    } catch (e) {
      response.status(400).json({
        ...e,
        message: "Erro ao deletar a nota!",
      });
    }
  }
}
