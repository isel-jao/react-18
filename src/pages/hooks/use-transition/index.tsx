import Button from "@/components/button";
import { throttle } from "@/utils";
import { useState, useTransition } from "react";

function Home() {
  return <div className="py-4">home</div>;
}

function About() {
  return <div>about</div>;
}

function SlowPost({ title }: { title: string }) {
  throttle(250);
  return (
    <div className="flex flex-col gap-4 rounded border p-4">
      <h2 className="text-2xl">{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        porro maiores provident itaque reiciendis atque delectus ipsam explicabo
        quam. Atque.
      </p>
    </div>
  );
}

function Posts() {
  return (
    <div className="  flex h-full flex-1 flex-col gap-4 overflow-x-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <SlowPost key={i} title={`post ${i}`} />
      ))}
    </div>
  );
}

export function WithUseTransition() {
  const [active, setActive] = useState(0);
  const [isPending, startTransition] = useTransition();

  const selectTab = (index: number) => {
    startTransition(() => {
      setActive(index);
    });
  };

  return (
    <div className="  flex h-1 flex-1 flex-col gap-4 overflow-scroll pb-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => selectTab(0)}
          variant={active === 0 ? "filled" : "outline"}
        >
          home
        </Button>
        <Button
          onClick={() => selectTab(1)}
          variant={active === 1 ? "filled" : "outline"}
        >
          about
        </Button>
        <Button
          onClick={() => selectTab(2)}
          variant={active === 2 ? "filled" : "outline"}
        >
          posts
        </Button>
      </div>
      {isPending ? (
        <div>loading...</div>
      ) : (
        {
          0: <Home />,
          1: <About />,
          2: <Posts />,
        }[active]
      )}
    </div>
  );
}

export function WithoutUseTransition() {
  const [active, setActive] = useState(0);

  const selectTab = (index: number) => {
    setActive(index);
  };

  return (
    <div className="  flex h-1 flex-1 flex-col gap-4 overflow-scroll pb-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => selectTab(0)}
          variant={active === 0 ? "filled" : "outline"}
        >
          home
        </Button>
        <Button
          onClick={() => selectTab(1)}
          variant={active === 1 ? "filled" : "outline"}
        >
          about
        </Button>
        <Button
          onClick={() => selectTab(2)}
          variant={active === 2 ? "filled" : "outline"}
        >
          posts
        </Button>
      </div>
      {
        {
          0: <Home />,
          1: <About />,
          2: <Posts />,
        }[active]
      }
    </div>
  );
}

export default function UseTransition() {
  return (
    <div className=" flex h-full flex-1 gap-4 ">
      <div className=" flex h-full flex-1 flex-col ">
        <h1 className="py-4 text-xl">with useTransition</h1>
        <WithUseTransition />
      </div>
      <div className="flex h-full flex-1 flex-col">
        <h1 className="py-4 text-xl">without useTransition</h1>
        <WithoutUseTransition />
      </div>
    </div>
  );
}
