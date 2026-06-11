import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export type JwtUser = {
  sub: string;
  email: string;
};

export function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(user: JwtUser) {
  const options: SignOptions = { expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"] };
  return jwt.sign(user, env.JWT_SECRET, options);
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as JwtUser;
}
