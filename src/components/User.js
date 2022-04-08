import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
    }, [id])

    const idCount = (parseInt(id) + 1) > 10 ? 1 :(parseInt(id) + 1);

    return (
        <div>
            <h1>User Details</h1>
            {loading && <div>Loading...</div>}
            {!loading && <code>{<ul className='userDetails'>
                <li>{`${user.id}) ${user.name}`}</li>
                <li>{`User Name: ${user.username}`}</li>
                <li>{`Email: ${user.email}`}</li>
                </ul>}</code>}

            <br />
            <br />

            <Link to={`/users/${idCount}`}>Next User ({idCount})</Link>
        </div>
    )
}

export default User