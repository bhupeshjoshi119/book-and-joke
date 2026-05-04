import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-state">
          <h2>⚠️ Something went wrong</h2>
          <p>Could not load content. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;