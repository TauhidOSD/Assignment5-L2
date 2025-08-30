import bcrypt from "bcrypt";
import { generateToken } from "../../utils/generateToken";
import { User } from "../user/user.model";
import { Types } from "mongoose";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterInput) => {
  const { name, email, password, role } = data;
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, role });
  const token = generateToken((user._id as Types.ObjectId).toString(), user.role);
  return { user, token };
};

export const loginUser = async (data: LoginInput) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) throw new Error("Invalid credentials");

  const token = generateToken((user._id as Types.ObjectId).toString(), user.role);
  return { user, token };
};
