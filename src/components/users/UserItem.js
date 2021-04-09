import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user:{login , html_url , avatar_url} })=> {
    
        // const {login , html_url , avatar_url}=props.user;
        return (
            <div className='card text-center' style={userItemStyle}>
                <img 
                    className='round-img'
                    src={avatar_url}
                    alt=''
                    style={{width:50}}
                />
                <h3>{login}</h3>
                <div className='my-1'>
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>More</Link>
                </div>
            </div>
        )
}

const userItemStyle = {
    width : '33%'
}
export default UserItem
