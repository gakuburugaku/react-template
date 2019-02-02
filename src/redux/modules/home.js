const SHOW_PAGE = 'home/SHOW_PAGE'

// Action
export const showPageDispatch = (dispatch) => {
  return dispatch(showPage())
}

const showPage = () => {
  return {
    type: SHOW_PAGE
  }
}


// Reducer
const initialState = {
  showPage: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PAGE:
      return {...state,showPage: true}
    default:
      return state
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
