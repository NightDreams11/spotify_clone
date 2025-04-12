import { useSignIn } from "@clerk/clerk-react"
import { Button } from "./ui/button"

export const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn()

  if (!isLoaded) {
    return null
  }

  const signInWithGoole = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    })
  }

  return (
    <Button
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-11"
      onClick={signInWithGoole}
    >
      <img src="/google.png" alt="Google" className="size-5" />
      Continue with Google
    </Button>
  )
}
