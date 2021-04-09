import React, {useState , Fragment} from 'react'
import Navbar from './components/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'
import Alert  from './components/Alert'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import About from './components/pages/About'
import User from './components/users/User'

const App = (props)=> {

  

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  
  

  // async componentDidMount(){
  //   this.setState({loading:true})
  //   const response = await axios.get(`https://api.github.com/users?client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_sECRET}`)
  //   this.setState({loading:false , users : response.data})
  // }

  // Get users from github
  const onSearchHandler = async(text) => {
    // this.setState({loading:true})
    setLoading(true);
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_sECRET}`)
    // this.setState({loading:false , users : response.data.items})
    setLoading(false);
    setUsers(response.data.items);

  }

  // Get user from github
  const getUser = async(username) => {
    // this.setState({loading:true})
    setLoading(true);
    const response = await axios.get(`https://api.github.com/users/${username}?client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_sECRET}`)
    // this.setState({loading:false , user : response.data})
    setLoading(false);
    setUser(response.data);

  }

  // Get user ripo
  const getUserRepos = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({ loading: false, repos: response.data });
    setLoading(false);
    setRepos(response.data);

  };

 

  const clearUsers = (e) => {
    // this.setState({loading:false , users : []})
    setLoading(true);
    setUsers([]);



  }

  const showAlert = (msg , type) => {
    setAlert({msg , type});
    setTimeout(()=>setAlert(null) , 4000)
  }

  
    
    return (
      <Router>

      <div className="App">
       <Navbar />
       {alert && <Alert alert={alert}/>}
       <div className="container">
       <Switch>
          <Route exact path="/" render={(props)=> (
            <Fragment >
              <Search onSearchHandler={onSearchHandler} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} showAlert={showAlert}/>
              <Users users={users} loading={loading} />
            </Fragment>
            )} 
          />
          <Route exact path="/about" component={About} />
          <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    loading={loading}
                    user={user}
                    repos={repos}
                    getUserRepos={getUserRepos}
                  />
                )}
              />
       </Switch>
       </div>
       
       
      </div>
      </Router>
    );
  
  
}

export default App;
