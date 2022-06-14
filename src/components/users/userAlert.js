import React from 'react'

function userAlert(usersSearched) {
  return (
    usersSearched !== null &&(
        
        <div className ={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' />{alert.msg}
            
        </div>
    )
  )
}

export default userAlert
