import { useNavigate } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {

    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <span onClick={() => navigate('/')} className="logo">kelebekbooking</span>
                    {/* {!user && <div className="navItems">
                        <button className="navButton">
                            Register
                        </button>
                        <button className="navButton">
                            Login
                        </button>
                    </div>}
                    {user && <>

                        Welcome Again {user.username}

                    </>} */}

                    {user ?
                        (
                            <>
                                <div className="navItems">

                                    <button>Logout</button>
                                    <span> Welcome Again  {user.username}</span>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <div className="navItems">
                                    <button className="navButton">
                                        Register
                                    </button>
                                    <button className="navButton">
                                        Login
                                    </button>
                                </div>
                            </>
                        )

                    }
                </div>
            </div>

        </>
    )
}

export default Navbar