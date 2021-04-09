import React, { useEffect , Fragment } from 'react';
import  Spinner  from '../Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';


const User = ({getUser,getUserRepos, match,user , loading , repos })=> {

    // componentDidMount() {
    //     this.props.getUser(this.props.match.params.login);
    //     this.props.getUserRepos(this.props.match.params.login);
    //   }

    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
        }
    ,[])
    
    
        const {name, avatar_url, location , bio, followers, following, hireable, html_url, login, public_gists, public_repos, company , blog} = user;

        if (loading) {
            return <Spinner />
        }
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Search</Link>
                <span>
                    hireable : {hireable ? <i className='fa fa-check text-success'></i> : <i className='fa fa-times text-danger'></i>}
                </span>
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} alt={name} className='round-img' style={{width: '150px'}}/>
                        <span>{name}</span>
                        <span>{location}</span>
                    </div>
                    <div>
                        {bio && (<Fragment>
                            <h3>bio:</h3>
                            <p>{bio}</p>
                            <a className='btn btn-dark my-1' href={html_url}>visit github page</a>
                            <ul>
                                {login && (
                                <li>
                                    <span>login: {login}</span>
                                </li>
                                )}
                                 {company && (
                                <li>
                                    <span>company: {company}</span>
                                </li>
                                )}
                                {blog && (
                                <li>
                                    <span>website: {blog}</span>
                                </li>
                                )}
                                
                            </ul>
                        </Fragment>)}
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers:{followers}</div>
                    <div className='badge badge-light'>Following:{following}</div>
                    <div className='badge badge-success'>Public repos:{public_repos}</div>
                    <div className='badge badge-dark'>Public gists:{public_gists}</div>

                </div>
                <Repos repos={repos} />
            </Fragment>
        )
    
}

export default User;
