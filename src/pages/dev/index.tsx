import LoginFrom from "@/components/login-form";

export default function DevPage() {
  return (
    <div className="py-6">
      <LoginFrom
        callback={(data) => {
          console.log({ data });
        }}
      />
    </div>
  );
}
