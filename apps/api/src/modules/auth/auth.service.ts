import { z } from "zod";
import { HttpError } from "../../lib/http";
import { hashPassword, signToken, verifyPassword } from "../../lib/auth";

const users = new Map<string, { id: string; email: string; name: string; passwordHash: string }>();

export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function signup(input: z.infer<typeof signupSchema>) {
  if (users.has(input.email)) {
    throw new HttpError(409, "Email is already registered");
  }
  const user = {
    id: `user-${Date.now()}`,
    email: input.email,
    name: input.name,
    passwordHash: await hashPassword(input.password)
  };
  users.set(user.email, user);
  const token = signToken({ sub: user.id, email: user.email });
  return { token, user: { id: user.id, email: user.email, name: user.name } };
}

export async function login(input: z.infer<typeof loginSchema>) {
  if (input.email === "demo@market.local" && input.password === "password123") {
    const user = { id: "demo-user", email: input.email, name: "Demo Researcher" };
    return { token: signToken({ sub: user.id, email: user.email }), user };
  }

  const user = users.get(input.email);
  if (!user || !(await verifyPassword(input.password, user.passwordHash))) {
    throw new HttpError(401, "Invalid email or password");
  }
  const token = signToken({ sub: user.id, email: user.email });
  return { token, user: { id: user.id, email: user.email, name: user.name } };
}

export function profile(email: string) {
  const user = users.get(email);
  if (!user) {
    return { id: "mock-user", email, name: "Market Researcher" };
  }
  return { id: user.id, email: user.email, name: user.name };
}
