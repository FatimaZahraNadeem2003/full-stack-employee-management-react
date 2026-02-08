import { Link } from "react-router-dom";

export const EntryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Management System</h1>
                    <p className="text-gray-600">Select your role to continue</p>
                </div>
                
                <div className="space-y-4">
                    <Link 
                        to="/auth/employee/login"
                        className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-center transition duration-200"
                    >
                        Employee Login
                    </Link>
                    
                    <div className="relative flex items-center py-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    
                    <Link 
                        to="/auth/HR/login"
                        className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium text-center transition duration-200"
                    >
                        HR Login
                    </Link>
                </div>
                
                <div className="pt-4 text-center text-sm text-gray-600">
                    <p>New user? Register as:</p>
                    <div className="flex gap-2 mt-2 justify-center">
                        <Link 
                            to="/auth/employee/signup"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Employee
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link 
                            to="/auth/HR/signup"
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            HR
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};