import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="w-50 p-4 rounded mx-auto shadow" >
                We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?
            </h1>
            <Link to="/author/new"> Add an author </Link>
        </div>
    );
}

export default NotFound;