import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ formData, setFormData, id, setId }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let addItem = ({ product, category, amount }) => {
    console.log(`clicked!`);
    setFormData([
      ...formData,
      {
        id: id,
        product: product,
        category: category,
        amount: amount,
      },
    ]);

    setId((prev) => {
      return prev + 1;
    });

    reset();
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(addItem)}
          className=" flex flex-col justify-center items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[60%] mx-auto m-8">
            <label className="text-xl font-semibold place-self-center items-center">
              Product
            </label>
            <div>
              <input
                {...register("product", { required: true, minLength: 3 })}
                type="text"
                id="product"
                className="bg-linear-to-r w-full from-emerald-400 to-pink-800 text-black p-2 rounded-lg"
              />
              {errors.product?.type === "required" ? (
                <p className="text-red-600">You must fill this</p>
              ) : (
                ""
              )}
              {errors.product?.type === "minLength" ? (
                <p className="text-red-600">Too Little Characters</p>
              ) : (
                ""
              )}
            </div>
            <label className="text-xl font-semibold place-self-center items-center">
              Category
            </label>
            <div>
              {/* <input
                {...register("category", { required: true, minLength: 3 })}
                type="text"
                id="category"
                className="bg-linear-to-r w-full from-emerald-400 to-pink-800 text-black p-2 rounded-lg"
              />
              {errors.category?.type === "required" ? (
                <p className="text-red-600">You must fill this</p>
              ) : (
                ""
              )}
              {errors.category?.type === "minLength" ? (
                <p className="text-red-600">Too Little Characters</p>
              ) : (
                ""
              )} */}
              <div>
                <select
                  {...register("category", { required: true })}
                  className="bg-linear-to-r w-full from-emerald-400 to-pink-800 text-black p-2 rounded-lg"
                >
                  <option></option>
                  <option>Food</option>
                  <option>Gadgets</option>
                  <option>Fashion</option>
                  <option>Miscellaneous</option>
                </select>

                {errors.category?.type === "required" ? (
                  <p className="text-red-600">Pick an option</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <label className="text-xl font-semibold place-self-center items-center">
              Amount
            </label>
            <div>
              <input
                {...register("amount", { required: true, minLength: 2 })}
                type="number"
                id="amount"
                className="bg-linear-to-r w-full from-emerald-400 to-pink-800 text-black p-2 rounded-lg"
              />
              {errors.amount?.type === "required" ? (
                <p className="text-red-600">You must fill this</p>
              ) : (
                ""
              )}

              {errors.amount?.type === "minLength" ? (
                <p className="text-red-600">Too Little Characters</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <button className="btn btn-outline bg-linear-to-r from-pink-400 to-emerald-800 w-[50%] md:w-[20%] text-xs md:text-lg font-bold">
            Add To List
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
