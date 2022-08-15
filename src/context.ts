import React from "react";

export type ErrorContent = {
    error: string,
    setError: (error: string) => void
}

const ErrorContext = React.createContext<ErrorContent>({
    error: '',
    setError: () => {}
})

export default ErrorContext