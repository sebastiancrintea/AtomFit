import { toast } from "sonner";
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const serverError =
  "Server is down at the moment please try again later.";

export const checkError = (error: unknown) => {
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
