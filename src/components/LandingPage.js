import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return(
        <>  
        <div style={{textAlign:"center",position:"absolute",bottom:"0"}}>
            <h1 style={{fontWeight:"bolder"}}>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        
            

            
            <Link to="/createAccount"><button style={{display:"block",margin:"auto",border:"1px solid #070EF9",background:"#070EF9",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",color:"white",cursor:"pointer"}}>Create Account</button></Link>
            <Link to="/login"><button style={{display:"block",margin:"auto",marginTop:"1.5rem",border:"1px solid white",background:"white",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",cursor:"pointer"}}>Already Registered? Login</button></Link>
            
            
        </div>
        </>
    )
}

export default LandingPage;