import React from 'react'
import { render } from  'react-dom'
import styled from 'styled-components'

export default class Main extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(props){
    this.props.componentDidMount()
  }

  render(){
    return(
      <div>
        Hellow world
      </div>
    )
  }
}
