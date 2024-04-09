import { Link } from "react-router-dom";

const Login = ()=>{
    return(
        <div>
            <h1>Signin to your</h1> <h1 style={{fontWeight:"bolder"}}>PopX account</h1>
            <p style={{margin:"auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div style={{marginTop:"2rem"}}>
            <input type="text" id="inputField" placeholder=" " style={{position:"relative",top:"2rem",width:"70%",height:"1.5rem"}}/>
            <label for="inputField" style={{position:"absolute",left:"0.5rem",bottom:"195px"}}>Email Address</label>
<hr style={{position:"relative",top:"3rem",width:"60%",right:"5rem"}}></hr>
            <input type="text" id="inputField" placeholder=" " style={{position:"relative",top:"3rem",width:"70%",height:"1.5rem",borderTop:"1px solid white",outlineStyle:"none"}}/>
            <label for="inputField" style={{position:"absolute",left:"0.5rem",bottom:"9.2rem"}}>Password</label>
            

      
           
            <Link to="/accountSettings"><button style={{display:"block",margin:"auto"}}>Login</button></Link>
            </div>
        </div>
    )
}

export default Login;