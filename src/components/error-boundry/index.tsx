import { CustomError } from "@/utils";
import React from "react";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error: CustomError | null }
> {
  state = { hasError: false, error: null as CustomError | null };

  static getDerivedStateFromError(error: CustomError) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.state.error?.displayMessage || this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
