
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <h1 className="text-xl font-bold text-blue-800"> Testing Shadcdn! </h1>
    <div>
      <Button variant="destructive" size="sm" disabled>Please wait
      <ReloadIcon className="ml-3 mr-2 h-4 w-4 animate-spin" />
      </Button>
    </div>
    <UserButton afterSignOutUrl="/"/>
    </>
  )
}
