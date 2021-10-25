import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import ensureAuttheticated from "./middleware/ensureAuttheticated"

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuttheticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuttheticated, new ProfileUserController().handle);


export { router }