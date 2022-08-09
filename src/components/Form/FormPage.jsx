import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddNewUserAction } from "../../Store/Actions/AddUserAction";

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todoList = useSelector((state) => {
    return state.addUserReducer;
  });

  const [data, setData] = useState({
    email: "",
    password: "",
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
    navigate("/");
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
            value={data.password}
            onChange={onHandleInput}
          >
            <option selected>represents company</option>
            <option value="1">8848 Digital LLP</option>
            <option value="2">Wayne Enterprises</option>
            <option value="3">Showbiz Pizza Place</option>
            <option value="4">The Lawn Guru</option>
          </select>

          {/* <input
            type="select"
            className="form-control"
            id="company"
            name="company"
            required={true}
            autoComplete='off'
            // value={data.password}
            onChange={onHandleInput}
          /> */}
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
            value={data.password}
            onChange={onHandleInput}
          >
            <option selected>gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
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
            value={data.password}
            onChange={onHandleInput}
          >
            <option selected>bank</option>
            <option value="1">Goldman Sachs</option>
            <option value="2">Citigroup Inc</option>
            <option value="3">Wells Fargo</option>
            <option value="4">Bank of America</option>
            <option value="5">HDFC</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="company" className="form-label">
            Type
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            value={data.password}
            onChange={onHandleInput}
          >
            <option selected>Customer Type</option>
            <option value="1">Company</option>
            <option value="2">Individual</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="company" className="form-label">
            Territory
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            value={data.password}
            onChange={onHandleInput}
          >
            <option selected>territory</option>
            <option value="1">East</option>
            <option value="2">West</option>
            <option value="2">North</option>
            <option value="2">South</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>

      <div>
        <ol>
          {todoList.length > 0 ? (
            <>
              {todoList.map((value, index) => {
                return (
                  <>
                    <li key={index}>
                      <h3>{value.email}</h3>
                      <h4>{value.password}</h4>
                    </li>
                  </>
                );
              })}
            </>
          ) : null}
        </ol>
      </div>
    </>
  );
};

export default FormPage;
