"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGON_REDIRECT } from "@/routes";
import { LoginSchema, LoginType } from "@/schemas";
import { AuthError } from "next-auth";

//THIS IS SERVER ACTIONS:
export const login = async (values: LoginType) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGON_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };

        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
