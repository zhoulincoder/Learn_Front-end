import React, {Component} from 'react'
import withLogin from './WithLogin'

@withLogin
export default class LoginStatus extends Component {
  render() {
    return (
      <button>
        已经登录
      </button>
    )
  }
}

LoginStatus.displayName = 'LoginStatus'