import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/pro-regular-svg-icons/faBolt'
export default class FARBolt extends React.Component {
  render () {
    return (<FontAwesomeIcon {...this.props} icon={faBolt} />)
  }
}
