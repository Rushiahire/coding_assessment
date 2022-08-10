import React,{useState} from "react";
import { loginUser , logoutUser } from '../../Auth/FirebaseConfig';


function LoginPage() {

    const [data , setData] = useState({
        email:'',
        password:''
    });
    // const [password , setPassword] = useState("");
    
    
    const onHandleInput = (event) => {
        const { name, value } = event.target;
        // console.log(name,value)
        setData({
          ...data,
          [name]: value,
        });
      };

    
      const onFormSubmit = (event) => {
        event.preventDefault();
        loginUser(data.email,data.password);
      }



    return (
    <>
      <form className="w-25 m-auto" onSubmit={onFormSubmit}>
        <h2>Login page</h2>
        <div classNameNam="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            required={true}
            autoComplete="off"
            onChange={onHandleInput}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required={true}
            autoComplete="off"
            value={data.password}
            onChange={onHandleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginPage;
