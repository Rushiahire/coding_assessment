import { useSelector } from "react-redux";

function ListingPage() {
  const todoList = useSelector((state) => {
    return state.addUserReducer;
  });

  return (
    <>
    <h2>USER DATA</h2>
      <div>
        <ol>
          {todoList.length > 0 ? (
            <>
              {todoList.map((value, index) => {
                return (
                  <>
                    <div key={index}>
                    <li >
                      <h6><h4>Represents Company :</h4> {value.company}</h6>
                    </li>
                    <li >
                      <h6><h4>Full name :</h4> {value.name}</h6>
                    </li>
                    <li>
                      <h6><h4>Email :</h4> {value.email}</h6>
                    </li>
                    <li>
                      <h6><h4>Gender :</h4> {value.gender}</h6>
                    </li>
                    <li>
                      <h6><h4>Address :</h4> {value.address}</h6>
                    </li>
                    <li >
                      <h6><h4>Mobile No :</h4> {value.mobile}</h6>
                    </li>
                    <li >
                      <h6><h4>Bank :</h4> {value.bank}</h6>
                    </li>
                    <li >
                      <h6><h4>Type :</h4> {value.type}</h6>
                    </li>
                    <li >
                      <h6><h4>Territory :</h4> {value.territory}</h6>
                    </li>
                    </div>
                  </>
                );
              })}
            </>
          ) : null}
        </ol>
      </div>
    </>
  );
}

export default ListingPage;
