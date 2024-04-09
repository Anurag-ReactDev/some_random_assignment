const CreateAccount = ()=>{
    return(
        <>
        <h1>Create your <span>PopX Account</span></h1>
        <div>
        <input type="text" id="inputField" placeholder=" "/>
        <label for="inputField">Full Name</label>
        <input type="text" id="inputField" placeholder=" "/>
        <label for="inputField">Phone Number</label>
        <input type="text" id="inputField" placeholder=" "/>
        <label for="inputField">Email address</label>
        <input type="text" id="inputField" placeholder=" "/>
        <label for="inputField">Password</label>
        <input type="text" id="inputField" placeholder=" "/>
        <label for="inputField">Company Name</label>
        <span>Are you an Agency?*</span>
        <label for="yes">yes</label>
        <input type="radio" id="yes" name="selection"/>
        <label for="no">no</label>
        <input type="radio" id="no" name="selection"/>
        </div>
        
        </>
    )
}

export default CreateAccount;