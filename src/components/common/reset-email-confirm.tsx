import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ResetEmailConfirmProps {
    image: string
    message: string
    onLoginRedirect: () => void
}

export const ResetEmailConfirm = ({ image, message, onLoginRedirect }: ResetEmailConfirmProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={image} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Check your email
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {message}
                    </p>
                </div>
                <div className="mt-8">
                    <Button
                        onClick={onLoginRedirect}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Back to Login
                    </Button>
                </div>
            </div>
        </div>
    )
}