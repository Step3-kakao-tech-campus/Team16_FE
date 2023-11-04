/* eslint-disable class-methods-use-this */
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode; // Define a fallback prop
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback; // fallback이 있으면 fallback을 보여줌
      }
      if (this.state.error) {
        return <h1>{this.state.error.message}</h1>; // throw error에 들어간 메시지를 보여줌
      }
      return <h1>There was an error</h1>; // 에러 메시지도 없고 fallback도 없으면 그냥 에러 메시지 출력
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
