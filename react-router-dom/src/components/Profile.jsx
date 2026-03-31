import { useParams } from 'react-router-dom'

function Profile() {
    let data = useParams();

    return (<>
        <h1>Hello user {data.username} </h1>
    </>)
}

export default Profile;