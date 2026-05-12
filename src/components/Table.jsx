import React from "react";

const Table = ({ formData, setFormData, filteredData }) => {
  let deleteItem = (id) => {
    if (confirm("Are you sure?") == true) {
      let newArray = formData.filter((item) => {
        return item.id !== id;
      });
      setFormData(newArray);
    }
  };

  return (
    <div>
      {/* <div>
            {formData.map((item, index) => {
                return (
                    <div key={item.id}>
                        <p>{index + 1}</p>
                        <p>{item.product}</p>
                        <p>{item.category}</p>
                        <p>{item.amount}</p>
                        <button onClick={() => {
                            deleteItem(item.id)
                        }} className='btn btn-error'>Delete</button>
                    </div>
                )
            })}
        </div> */}

      <div className="overflow-x-auto rounded-box bg-linear-to-r from-emerald-400 to-pink-800 md:w-[50%] mx-auto mt-10">
        <table className="table">
          <thead className="font-bold text-2xl">
            <tr>
              <th>S/N</th>
              <th>Product</th>
              <th>Category</th>
              <th>(₦) Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="font-semibold text-lg">
            {filteredData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>{item.category}</td>
                  <td>{item.amount}</td>
                  <td
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                    className="btn btn-error"
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
