import Router from 'koa-router';
import { User } from '../models';

const userRoutes = new Router();

userRoutes.post("/createUser", createUser)
