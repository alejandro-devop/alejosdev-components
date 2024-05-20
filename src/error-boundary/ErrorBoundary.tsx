import React from 'react'

interface ErrorBoundaryProps {
    children?: React.ReactNode
    fallback?: React.ReactNode
}

interface ErrorBoundaryState {
    hasError?: boolean
    errorInfo?: any
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: any): void {
        this.setState({
            errorInfo: { error, info: errorInfo }
        })
    }

    render() {
        const { children, fallback } = this.props
        if (this.state.hasError) {
            return fallback || <p>Error rendering component</p>
        }
        return children
    }
}

export default ErrorBoundary
