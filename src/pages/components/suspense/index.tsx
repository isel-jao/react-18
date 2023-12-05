import Card from "@/components/card";
import DataGrid, { DataGridColumn } from "@/components/data-grid";
import { Suspense, useState } from "react";
import { twMerge } from "tailwind-merge";
import useSWR, { useSWRConfig } from "swr";
import Button from "@/components/button";
import { CustomError } from "@/utils";
import ErrorBoundary from "@/components/error-boundry";
import Spinner from "@/components/spinner";
import { set } from "zod";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  isOnline?: boolean;
};

function generateUsers(num: number): User[] {
  if (num < 1) throw new Error("num must be greater than 0");
  return Array.from({ length: num }, (_, i) => ({
    id: new Date().getTime() + i,
    name: `user ${i + 1}`,
    email: `user-${i + 1}@email.com`,
    phone: `+${new Date().getTime() + i}`,
    website: `https://user${i + 1}.com`,
    isOnline: Math.random() > 0.5,
  }));
}

async function fetchUsers(): Promise<User[]> {
  console.log("fetchUsers");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = Math.random() > 0.5;
      if (isError)
        reject(
          new CustomError(
            (
              <div className=" flex h-[30rem] items-center justify-center text-3xl text-red-500 first-letter:uppercase">
                ka-boom!
              </div>
            ),
          ),
        );
      else resolve(generateUsers(10));
    }, 1000);
  });
}

const columns: DataGridColumn<User>[] = [
  {
    header: "ID",
    label: "id",
    valueGetter: (user) => user.id,
    show: false,
  },
  {
    header: "Name",
    label: "name",
    valueGetter: (user) => (
      <div
        className={twMerge(
          "flex items-center gap-2",
          user.isOnline ? "text-green-500" : "text-red-500",
        )}
      >
        <span
          className={twMerge(
            "aspect-square w-3 rounded-full ",
            user.isOnline ? "bg-green-500" : "bg-red-500",
          )}
        ></span>
        <span>{user.name}</span>
      </div>
    ),
  },
  {
    header: "Email",
    label: "email",
    valueGetter: (user) => user.email,
  },
  {
    header: "Phone",
    label: "phone",
    valueGetter: (user) => user.phone,
  },
  {
    header: "Website",
    label: "website",
    valueGetter: (user) => (
      <a
        href={user.website}
        target="_"
        className="text-sky-500 hover:text-sky-600"
      >
        {user.website}
      </a>
    ),
  },
];

function UsersTable() {
  const {
    data: users,
    isValidating,
    error,
  } = useSWR<User[]>("users", fetchUsers, {
    suspense: true,
  });

  if (error) throw error;

  return (
    <div className="flex flex-col gap-4 overflow-auto p-4 ">
      <Card className="relative w-full min-w-fit overflow-hidden p-0">
        {isValidating && (
          <div className=" absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#7f7f7f]/10">
            <Spinner className="h-20 w-20 fill-primary-500" />
          </div>
        )}
        <DataGrid
          className="w-full [&>*>tr>*]:first-letter:normal-case [&>thead]:bg-[#7f7f7f]/10"
          columns={columns}
          rows={users || []}
        />
      </Card>
    </div>
  );
}

export default function SuspenseExample() {
  const { mutate } = useSWRConfig();
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-8">
        <Button
          onClick={() => {
            mutate("users");
          }}
        >
          invalidate
        </Button>
        <Button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          inc
        </Button>
        <span>
          count: <span className="text-primary-500">{count}</span>
        </span>
      </div>

      <ErrorBoundary
        fallback={
          <div className="flex h-[30rem] items-center justify-center first-letter:uppercase">
            couldn't fetch data!
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="flex h-[30rem] items-center justify-center capitalize">
              <Spinner className="h-20 w-20 fill-primary-500" />
            </div>
          }
        >
          <UsersTable />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
