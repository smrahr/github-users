import React from 'react'
import  Spinner  from '../Spinner'
import UserItem from './UserItem'

const Users = ({users , loading}) => {
    if (loading) {
        return <Spinner />;
    }else{
        return (
            <div style={usersStyle}>
                {
                    users.map((user)=> <UserItem key={user.id} user={user} />)
                }
                
            </div>
        )
    }    
}

const usersStyle = {
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent : 'space-between'
}



export default Users
