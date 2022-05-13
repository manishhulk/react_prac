import React from 'react'

const UserData = (usersData) => {
  let { users } = usersData;
  return (
    <div>
      <table>
        <tr>
          <th>Index</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        { users.map((user, index) => {
            const {email, password} = user;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{email}</td>
                <td>{password}</td>
              </tr>
            )
          }
        )}
      </table>
    </div>
  )
}

export default UserData