
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
import { UserButton, UserProfile } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <>
    <h3 className="text-yellow-400 font-semibold italic"> Hello {user?.firstName}!</h3>
    <h1 className="text-xl font-bold text-blue-800"> Testing Shadcdn! </h1>
    <div>
      <Button variant="destructive" size="xl" disabled>Please wait
      <ReloadIcon className="ml-3 mr-2 h-4 w-4 animate-spin" />
      </Button>
    </div>
    <UserButton afterSignOutUrl="/"/>
    <UserProfile />
    </>
  )
}
