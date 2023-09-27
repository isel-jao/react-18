import Card from "@/components/card";
import DataGrid, { DataGridColumn } from "@/components/data-grid";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import useSWR, { useSWRConfig } from "swr";
import Button from "@/components/button";

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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateUsers(10));
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
  const { data: users, mutate } = useSWR<User[]>("users", fetchUsers, {
    suspense: true,
  });
  // const { mutate } = useSWRConfig();

  return (
    <div className="flex flex-col gap-4 overflow-auto p-4 ">
      <Button
        onClick={() => {
          mutate(undefined, false);
        }}
      >
        invalidate
      </Button>
      <Card className="w-full min-w-fit overflow-hidden p-0">
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
  return (
    <ErrorBoundary fallback={<div>Couldn't fetch data!</div>}>
      <Suspense fallback={<div className="relative">loading...</div>}>
        <UsersTable />
      </Suspense>
    </ErrorBoundary>
  );
}
