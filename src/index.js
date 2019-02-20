import React from 'react'

const DefaultOnSSR = React.Fragment ? () => <React.Fragment /> : <span />

class NoSSR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canRender: false
    }
  }

  componentDidMount() {
    this.setState({ canRender: true })
  }

  render() {
    const { children, onSSR = <DefaultOnSSR /> } = this.props
    const { canRender } = this.state

    return canRender ? children : onSSR
  }
}

export default NoSSR
