import { connect } from 'react-redux'
import App from '../components/App'

// transform the current Redux store state into the props
const mapStateToProps = (state) => {  
  return {
  }
}

// return callback props to inject into the presentational component
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

