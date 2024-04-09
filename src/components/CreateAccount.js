import { Link } from "react-router-dom";
const CreateAccount = ()=>{
    return(
        <>
        <h1>Create your <span>PopX Account</span></h1>
        <div>
        <label for="inputField" style={{color:"blue"}}>Full Name</label>
        <input type="text" id="inputField" placeholder=" " style={{display:"block"}}/>
        <label for="inputField" style={{color:"blue"}}>Phone Number</label>
        <input type="text" id="inputField" placeholder=" " style={{display:"block"}}/>
        <label for="inputField" style={{color:"blue"}}>Email address</label>
        <input type="text" id="inputField" placeholder=" " style={{display:"block"}}/>
        <label for="inputField" style={{color:"blue"}}>Password</label>
        <input type="text" id="inputField" placeholder=" " style={{display:"block"}}/>
        <label for="inputField" style={{color:"blue"}}>Company Name</label>
        <input type="text" id="inputField" placeholder=" " style={{display:"block"}}/>
        
        <span style={{display:"block"}}>Are you an Agency?<span style={{color:"red"}}>*</span></span>
       
        <input type="radio" id="yes" name="selection" style={{accentColor:"#070EF9"}} />
        <label for="yes">yes</label>
       
        <input type="radio" id="no" name="selection" style={{accentColor:"#070EF9"}}/>
        <label for="no">no</label>
        </div>
        <div style={{textAlign:"center",position:"absolute",bottom:"0",width:"70%"}}>

        
        <Link to="/accountSettings"><button style={{display:"block",margin:"auto",border:"1px solid #070EF9",background:"#070EF9",width:"70%",padding:"0.5rem",borderRadius:"0.5rem",textDecoration:"none",color:"white",cursor:"pointer",textDecoration:"none"}}>Create Account</button></Link>
        </div>
        </>
    )
}

export default CreateAccount;