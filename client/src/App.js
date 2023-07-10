import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Dashboard from './Dashboard'

//get the access code from the url
const accessCode = new URLSearchParams(window.location.search).get('code')
function App() {
  // if we have an access code, render the dashboard otherwise render the login page
  return accessCode ? <Dashboard accessCode={accessCode} /> : <Login />
}

export default App;
