import { useSelector } from "react-redux";

function ListingPage() {
  const todoList = useSelector((state) => {
    return state.addUserReducer;
  });

  return (
    <>
      <div>
        {/* <ol> */}
        {todoList.length > 0 ? (
          <>
            {todoList.map((value, index) => {
              return (
                <>
                  <table class="table table-bordered w-75 mx-auto text-align-center" key={index}>
                    <h2>USER DATA</h2>
                    <tbody>
                      <tr>
                        <th scope="row" >1</th>
                        <td>Represents Company</td>
                        <td>{value.company}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Full Name</td>
                        <td>{value.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Email</td>
                        <td>{value.email}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Gender</td>
                        <td>{value.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Address</td>
                        <td>{value.address}</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Mobile No</td>
                        <td>{value.mobile}</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Bank</td>
                        <td>{value.bank}</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Type</td>
                        <td>{value.type}</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>Territory</td>
                        <td>{value.territory}</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              );
            })}
          </>
        ) : (
          <h3>No Data Found</h3>
        )}
        {/* </ol> */}
      </div>
    </>
  );
}

export default ListingPage;
