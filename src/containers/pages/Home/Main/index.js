import React from 'react'
import { connect } from 'react-redux'

import {showPageDispatch} from '~/src/redux/modules/home';

import Main from './Main'

const mapStateToProps = (state) => {
  return {
    showPage: state.home.showPage
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  componentDidMount: () => {
    dispatch(showPageDispatch(dispatch))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Main)
