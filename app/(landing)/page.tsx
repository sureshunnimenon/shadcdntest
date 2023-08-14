import { Button } from "@/components/ui/button";
// import { ReloadIcon } from "@radix-ui/react-icons";

import Link from "next/link";
export default async function Home() {
  return (
    <>
      <h1 className="text-xl font-bold text-blue-800"> Testing Shadcdn! </h1>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>

      <Link href="/sign-up">
        <Button> Register</Button>
      </Link>
    </>
  );
}
