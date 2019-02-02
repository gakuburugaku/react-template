const OPEN_PAGE = 'UI/OPEN_PAGE'
const OPENED_PAGE = 'UI/CLOSE_PAGE'

// Action
export const doOverlay = (dispatch) => {
  dispatch(overlay(),1000)
  return dispatch(overlayed())
}

const overlay = () => {
  return {
    type: OPEN_PAGE
  }
}
const overlayed = () => {
  return {
    type: OPENED_PAGE
  }
}


// Reducer
const initialState = {
  openPage: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPENED_PAGE:
      return {...state,openPage: false}
    case OPEN_PAGE:
      return {...state,openPage: true}
    default:
      return state
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
