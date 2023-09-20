import Button from "@/components/button";
import Input from "@/components/input";
import Spinner from "@/components/spinner";
import { AxiosError } from "axios";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Please enter a password of at least 8 characters",
  }),
});

type LoginData = z.infer<typeof loginSchema>;

type Props = {
  className?: string;
  callback: (data: LoginData) => Promise<unknown> | unknown;
};

export default function LoginFrom({ className, callback }: Props) {
  const emailId = useId();
  const passwordId = useId();
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const data = loginSchema.parse(Object.fromEntries(formData));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await callback(data);
      setErrors([]);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.issues.map((issue) => issue.message));
      } else if (
        err instanceof AxiosError &&
        err.response?.status &&
        [404, 401].includes(err.response?.status)
      ) {
        setErrors(["Invalid email or password."]);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <form
      className={twMerge(
        "grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-6",
        className,
      )}
      onSubmit={handleSubmit}
    >
      {errors.length > 0 && (
        <div className="animate-max-height col-span-full max-h-[10rem] overflow-hidden">
          <ul className="flex flex-col gap-3 rounded bg-red-500 p-4 text-white ">
            {errors.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <label htmlFor={emailId}>Email</label>
      <Input id={emailId} type="email" name="email" />
      <label htmlFor={passwordId}>Password</label>
      <Input id={passwordId} type="password" name="password" />
      <div className="col-span-full">
        <Button
          type="submit"
          className="mx-auto flex h-8 w-32  items-center justify-center p-0"
        >
          {isSubmitting ? (
            <Spinner className="h-5 fill-white text-white/50" />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
