import { useSelector } from "react-redux";

function ListingPage() {
  const todoList = useSelector((state) => {
    return state.addUserReducer;
  });

  return (
    <>
      <div>
        <ol>
          {todoList.length > 0 ? (
            <>
              {todoList.map((value, index) => {
                return (
                  <>
                    <li key={index}>
                      <p>{value.company}</p>
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
}

export default ListingPage;
