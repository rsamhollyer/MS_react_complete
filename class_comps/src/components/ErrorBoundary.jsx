import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
