import { Router } from "express";
import { authGuard } from "./middlewares/AuthGuard";

import { CreateUserController } from "./modules/user/controllers/CreateUserController";
import { ListUsersController } from "./modules/user/controllers/ListUsersController";
import { UpdateUserController } from "./modules/user/controllers/UpdateUserController";
import { DeleteUserController } from "./modules/user/controllers/DeleteUserController";
import { FindUserController } from "./modules/user/controllers/FindUserController";
import { UserAuthController } from "./modules/auth/controllers/UserAuthController";

import { CreateNoteController } from "./modules/note/controllers/CreateNoteController";
import { ListNoteController } from "./modules/note/controllers/ListNotesController";
import { FindNoteController } from "./modules/note/controllers/FindNoteController";
import { UpdateNoteController } from "./modules/note/controllers/UpdateNoteController";
import { DeleteNoteController } from "./modules/note/controllers/DeleteNoteController";

const router = Router();

router.get("/user", authGuard, new ListUsersController().handle);
router.get("/user/:id", authGuard, new FindUserController().handle);
router.put("/user/:id", authGuard, new UpdateUserController().handle);
router.delete("/user/:id", authGuard, new DeleteUserController().handle);
router.post("/user", new CreateUserController().handle);
router.post("/user/auth", new UserAuthController().handle);

router.get("/note", authGuard, new ListNoteController().handle);
router.get("/note/:id", authGuard, new FindNoteController().handle);
router.put("/note/:id", authGuard, new UpdateNoteController().handle);
router.delete("/note/:id", authGuard, new DeleteNoteController().handle);
router.post("/note", authGuard, new CreateNoteController().handler);

export { router };
