const location = (state = {lat: 44.979225, lng: -93.266945}, action) => {
    if (action.type === 'SET_LOCATION') {
        return action.payload
      } else
      return state;
}

export default location;