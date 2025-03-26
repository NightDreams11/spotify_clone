import { axiosInstance } from "@/lib/axios"
import { useAuthtStore } from "@/stores/useAuthStore"
import { useChatStore } from "@/stores/useChatStore"
import { useAuth } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import { disconnect } from "process"
import { FC, useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
}

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"]
  }
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const { getToken, userId } = useAuth()
  const { checkAdminStatus } = useAuthtStore()
  const { initSocket, disconnectSocket } = useChatStore()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken()
        updateApiToken(token)

        if (token) {
          await checkAdminStatus()
          // init socket
          if (userId) {
            initSocket(userId)
          }
        }
      } catch (error) {
        updateApiToken(null)
        console.log("Error in auth provider", error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()

    return () => disconnectSocket()
  }, [getToken, userId, checkAdminStatus, initSocket, disconnectSocket])

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    )
  }

  return <>{children}</>
}
