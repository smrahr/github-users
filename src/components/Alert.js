import React from 'react'

const Alert = ({alert}) => {
    return (
        <div className={`alert alert-${alert.type}`}>
            <i className={`fa fa-exclamation-circle`}></i>
            {alert.msg}
        </div>
    )
}

export default Alert;
