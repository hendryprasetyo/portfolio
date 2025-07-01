import React, { Component, ErrorInfo } from 'react'
import maintance from '../../assets/maintance.png'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <div className="bg-gray-50">
            <div className="flex h-screen">
              <div className="m-auto text-center">
                <div>
                  <img src={maintance} alt="maintance" />
                </div>
                <p className="text-Base my-6 p-2 text-slate-500 md:text-base">
                  Something Went Wrong
                </p>
              </div>
            </div>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
