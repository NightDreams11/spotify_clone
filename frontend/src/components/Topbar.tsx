import { SignedOut, UserButton } from "@clerk/clerk-react"
import { LayoutDashboardIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { SignInOAuthButtons } from "./SignInOAuthButtons"
import { useAuthtStore } from "@/stores/useAuthStore"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

export const Topbar = () => {
  const { isAdmin } = useAuthtStore()

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flax gap-2 items-center">
        <img src="/spotify.png" alt="Spotify logo" className="size-8" />
        Spotify
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to={"/admin"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  )
}
