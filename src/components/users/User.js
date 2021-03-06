import React, { useEffect, Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

 
 
 
const User = () => {
    const githubContext = useContext(GithubContext);
    const params = useParams();
        const {user, loading, getUser, getUserRepos, repos} = githubContext;
    useEffect(() => {
        getUser(params.login);
        getUserRepos(params.login);
        //eslint-disable-next-line
    }, []);

      const {
          name,
          avatar_url,
          location,
          bio,
          blog,
          login,
          html_url,
          followers,
          following,
          public_gists,
          public_repos,
          hireable, 
          company

      } = user;
      
    if(loading) return <Spinner />;
    return (
        
        <Fragment>
            <Link to='/' className='btn btn-light'> Back to Search</Link>
            Hireable:{''}
            {hireable ? (
                <i className='fas fa-check text-success' />
            ) : (
                <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
                <div className='all-center'>
                    <img
                        src={avatar_url}
                        className='round-img'
                        alt=''
                        style={{width: '150px'}}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} target="_blank" rel="noreferrer noopener" className='btn btn-dark my-1'>
                        Visit GitHub Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='badge badge-primary'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-dark'>Public Repos: {public_repos}</div>
            <div className='badge badge-light'>Public Gists: {public_gists}</div>
            <Repos repos={repos} />
        
        </Fragment>
      
    )
  
}

// User.propTypes ={
//     repos: PropTypes.array.isRequired,
//     getUserRepos: PropTypes.func.isRequired,
// }

export default User
