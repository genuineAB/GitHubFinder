import React from 'react';
import User from './components/users/User'; 
import Alert from './components/Layout/Alert';
import Navbar from './components/Layout/Navbar';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import NotFound  from './components/Pages/NotFound';
import './App.css';  
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
// import userAlert from './components/users/userAlert'; 

const App = () => {
  // const [alert, setAlert] = useState([null]);

  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: [],
  // }
  // async componentDidMount(){
    
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   try{ 
  //     this.setState({loading: true});
  //     const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
       
  //     this.setState({users: response.data, loading: false});
  //   }catch(error){
  //     console.error(error);
  //   }
    
  //   console.log('Got here');
  // }
  //Search GitHub Users
  // const searchUsers = async text => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

  //Get Single GitHub User
  // const getUser = async (username) => {
  //   setLoading(true); 
  
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_sceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
 
  //   setUser(res.data);
  //   setLoading(false);
  // }

  //GEt User Repos
  // const getUserRepos = async (username) => {
  //   setLoading(true);
  
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&client_sceret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
 
  //   setRepos(res.data);
  //   setLoading(false);
  // }

  //Clear Users from State
  // const clearUsers = () => {
  //   console.log('Got Here');
  //   setUsers([]);
  //   setLoading(false);
  // };
  
  //Set Alert
  // const showAlert = (msg, type) => {
  //   setAlert({msg, type});
  //   setTimeout(() => setAlert(null), 5000);
  // }
  
  return (
    <GithubState>
      <AlertState>
      <Router>
      <div className="App">
         <Navbar  />
         <div className='container'>
           <Alert /> 
           {/* <userAlert usersSearched={this.state.usersSearched} /> */}
           <Routes>
             <Route exact path='/' element = {<Home />}
              />  
              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:login' element={<><User  /></>} />
              <Route element= {NotFound} />
           </Routes>
           
           
         </div>
      </div> 
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
