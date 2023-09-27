import Card from "@/components/card";
import DataGrid, { DataGridColumn } from "@/components/data-grid";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  isOnline?: boolean;
};

function generateUsers(num: number): User[] {
  return Array.from({ length: num }, (_, i) => ({
    id: new Date().getTime() + i,
    name: `user ${i + 1}`,
    email: `user-${i + 1}@email.com`,
    phone: `+${new Date().getTime() + i}`,
    website: `https://user${i + 1}.com`,
    isOnline: Math.random() > 0.5,
  }));
}

export default function DevPage() {
  const [users] = useState<User[]>(() => generateUsers(10));

  const columns: DataGridColumn<User>[] = [
    {
      header: "ID",
      label: "id",
      valueGetter: (user) => user.id,
      show: false,
    },
    {
      header: "name",
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
      header: "email",
      label: "email",
      valueGetter: (user) => user.email,
    },
    {
      header: "phone",
      label: "phone",
      valueGetter: (user) => user.phone,
    },
    {
      header: "website",
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

  return (
    <div className="h-full overflow-auto p-4">
      <Card className="w-full min-w-fit overflow-hidden p-0">
        <DataGrid
          className="w-full [&>*>tr>*]:first-letter:normal-case [&>thead]:bg-[#7f7f7f]/10"
          columns={columns}
          rows={users}
        />
      </Card>
    </div>
  );
}
