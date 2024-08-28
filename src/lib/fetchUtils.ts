import { toast } from "sonner";
import { unknown } from "zod";
export const BASE_URL = new URL(`${process.env.NEXT_PUBLIC_API_URL}`);

export const serverError =
  "Server is down at the moment please try again later.";

export const checkError = (error: unknown) => {
  console.warn(error);
  if (error instanceof Error) {
    if (
      error.message === "Failed to fetch" ||
      error.message === "fetch failed"
    ) {
      toast.warning(serverError);
      return {
        error: serverError,
      };
    }
    toast.warning(error.message);
    return { error: error.message };
  }
};

export const checkErrorNoToast = (error: unknown) => {
  console.warn(error);
  if (error instanceof Error) {
    if (
      error.message === "Failed to fetch" ||
      error.message === "fetch failed"
    ) {
      return {
        error: serverError,
      };
    }
    return { error: error.message };
  }
};

export const HEADERS = new Headers({
  "Content-Type": "application/json",
});
