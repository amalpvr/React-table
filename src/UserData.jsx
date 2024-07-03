const UserData = ({search}) =>{
    
    return(
        <>
        {
            
            search.map((curUser)=>{
                const{id,userId,title,body} = curUser;
                return(
                    <tr>
                        
                        <td>{id}</td>
                        <td>{userId}</td>
                        <td>{title}</td>
                        <td>{body}</td>
                    </tr>
                )
            })
        }
       </>
    )
}

export default UserData