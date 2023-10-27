import {Navigate} from 'react-router-dom';

const ProtectedRoute=({Component}) => {
    const user= localStorage.getItem("user_login");
    return user ? <Component/> : <Navigate to="/"/>;

}
export default ProtectedRoute;