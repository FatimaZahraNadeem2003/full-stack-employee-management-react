import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface VerifyEmailProps {
    image: string
    handleverifyemailform: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleverifyemailsubmit: (e: React.FormEvent) => void
    targetedstate: any
    statevalue: any
    resendverification?: () => void
}

export const VerifyEmail = ({ image, handleverifyemailform, handleverifyemailsubmit, targetedstate, statevalue, resendverification }: VerifyEmailProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={image} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Verify your email
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please enter the verification code sent to your email address.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleverifyemailsubmit}>
                    <div>
                        <Label htmlFor="verification-code" className="sr-only">
                            Verification Code
                        </Label>
                        <Input
                            id="verification-code"
                            name="verificationcode"
                            type="text"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter verification code"
                            value={statevalue.verificationcode}
                            onChange={handleverifyemailform}
                        />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <Button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Verify Email
                        </Button>
                        
                        {resendverification && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={resendverification}
                                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Resend Verification Code
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}