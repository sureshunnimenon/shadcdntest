import React from "react";

import { currentUser } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { ReloadIcon } from "@radix-ui/react-icons";

const Homepage = async () => {
  const user = await currentUser();

  return (
    <div className="flex justify-end p-2">
      
      
      
      
    </div>
  );
}

export default Homepage
