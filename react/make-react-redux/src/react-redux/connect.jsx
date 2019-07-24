import React, { Component } from 'react';
import { Consumer } from './context'

export default (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class ConnectdComponent extends Component {
    render() {
      return (
        <Consumer>
          {
            (store) => {
              const state = store.state
              const dispatch = store.dispatch
              let filterProps = {}   //放着所有的props
              if (typeof mapDispatchToProps === 'function') {
                Object.assign(filterProps, mapDispatchToProps(dispatch))
                //类似{...a, a: 1}
              }
              if(typeof mapStateToProps === 'function'){
                Object.assign(filterProps, mapStateToProps(state))
              }

              return (
                <WrappedComponent {...filterProps} {...this.props} />
                //props传递
              )
            }
          }
        </Consumer>
      )
    }
  }
  return ConnectdComponent
}