/* eslint-disable class-methods-use-this */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

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
      if (this.state.error?.message) {
        return (
          <div className="flex flex-col mt-12 gap-12 items-center justify-center w-screen">
            <img
              src="/assets/images/backgroundimage.png"
              alt="backgroundimage"
              className="w-60 h-60 object-cover"
            />
            <h1 className="text-3xl font-bold text-brand-color">
              뭔가 문제가 생겼어요..
            </h1>
            <h2 className="text-2xl font-bold">{this.state.error.message}</h2>
            <Link
              to="/"
              className="border flex items-center justify-center box-border border-brand-color border-2 bg-brand-color text-white rounded-md w-20 py-1 hover:bg-white hover:text-brand-color transition duration-300 ease-in-out"
            >
              홈으로
            </Link>
          </div>
        );
      }
      return (
        <div className="flex flex-col mt-12 gap-12 items-center justify-center w-screen">
          <h1 className="text-3xl font-bold text-brand-color">
            뭔가 문제가 생겼어요..
          </h1>
          <h2 className="text-2xl font-bold">
            해결 중에 있습니다. 다시 한 번 시도해주세요!
          </h2>
          <Link
            to="/"
            className="border flex items-center justify-center box-border border-brand-color border-2 bg-brand-color text-white rounded-md w-20 py-1 hover:bg-white hover:text-brand-color transition duration-300 ease-in-out"
          >
            홈으로
          </Link>
        </div>
      ); // 에러 메시지도 없고 fallback도 없으면 그냥 에러 메시지 출력
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
