import React from "react";
import { UserButton, UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default async function Homepage() {
  const user = await currentUser();

  return (
    <>
      <h3 className="text-yellow-400 font-semibold italic">
        {" "}
        Hello {user?.firstName}!
      </h3>
      <div>This is perotected home page!</div>

      <div>
        <Button variant="destructive" size="xl" disabled>
          Please wait
          <ReloadIcon className="ml-3 mr-2 h-4 w-4 animate-spin" />
        </Button>
      </div>
      <UserButton afterSignOutUrl="/" />
      <UserProfile />
    </>
  );
}
