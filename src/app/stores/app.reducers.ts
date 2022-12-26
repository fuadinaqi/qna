import * as AppActions from './app.actions'

const initialState: AppActions.AppData = {
  name: '',
  points: 0,
}

export function appReducer(state = initialState, action: AppActions.Login | AppActions.AddPoint) {
  switch (action.type) {
    case AppActions.LOGIN:
      if (!action.payload) return state
      return {
        ...state,
        ...(action.payload as AppActions.AppData),
      }
    case AppActions.ADD_POINT: {
      if (!action.payload) return state
      return {
        ...state,
        points: state.points + (action.payload as number),
      }
    }
    case AppActions.RESET: {
      return {
        name: '',
        points: 0,
      }
    }
    default:
      return state
  }
}
