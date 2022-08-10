import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddNewUserAction } from "../../Store/Actions/AddUserAction";

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [data, setData] = useState({
    company:"",
    name:"",
    email:"",
    gender: "",
    address:"",
    mobile:"",
    bank:"",
    type:"",
  });

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
    // console.log(data)
    dispatch(AddNewUserAction(data), setData(""));
    navigate("/list");
  };

  return (
    <>
      <form className="w-50 m-auto" onSubmit={onFormSubmit}>
        <h1> Welcome to Form Page </h1>

        <div className="mb-3">
          <label for="company" className="form-label">
            Represents Company
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            id="company"
            name="company"
            required={true}
            autoComplete="off"
            value={data.company}
            onChange={onHandleInput}
          >
            <option selected>represents company</option>
            <option >8848 Digital LLP</option>
            <option >Wayne Enterprises</option>
            <option >Showbiz Pizza Place</option>
            <option >The Lawn Guru</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required={true}
            autoComplete="off"
            aria-describedby="emailHelp"
            value={data.name}
            onChange={onHandleInput}
          />
        </div>


        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required={true}
            autoComplete="off"
            value={data.email}
            onChange={onHandleInput}
          />
        </div>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>


        <div className="mb-3">
          <label for="company" className="form-label">
            Gender
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            id="gender"
            name="gender"
            required={true}
            autoComplete="off"
            value={data.gender}
            onChange={onHandleInput}
          >
            <option selected>gender</option>
            <option >Male</option>
            <option >Female</option>
          </select>
        </div>


        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="small text"
            className="form-control"
            id="address"
            name="address"
            required={true}
            autoComplete="off"
            aria-describedby="address"
            value={data.address}
            onChange={onHandleInput}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Mobile No
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            required={true}
            autoComplete="off"
            aria-describedby="address"
            value={data.mobile}
            onChange={onHandleInput}
          />
        </div>

        <div className="mb-3">
          <label for="company" className="form-label">
            Bank
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            id="bank"
            name="bank"
            required={true}
            autoComplete="off"
            value={data.bank}
            onChange={onHandleInput}
          >
            <option selected>bank</option>
            <option >Goldman Sachs</option>
            <option >Citigroup Inc</option>
            <option >Wells Fargo</option>
            <option >Bank of America</option>
            <option >HDFC</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="company" className="form-label">
            Type
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            id="type"
            name="type"
            required={true}
            autoComplete="off"
            value={data.type}
            onChange={onHandleInput}
          >
            <option selected>Customer Type</option>
            <option >Company</option>
            <option >Individual</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="company" className="form-label">
            Territory
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            id="territory"
            name="territory"
            required={true}
            autoComplete="off"
            value={data.territory}
            onChange={onHandleInput}
          >
            <option selected>territory</option>
            <option >East</option>
            <option >West</option>
            <option >North</option>
            <option >South</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary my-4">
          Save
        </button>
      </form>

      
    </>
  );
};

export default FormPage;
