import React , {useEffect} from "react";
import { useForm } from "react-hook-form";


const Form = ({ setData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };


useEffect(() => {
  let creditNumber = document.getElementById("cardNumber");
   
      creditNumber.addEventListener("input", function (e) {
       e.target.value = e.target.value
         .replace(/[^\dA-Z]/g, "")
         .replace(/(.{4})/g, "$1 ")
         .trim();
     });  
  
}, []);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group ">
          <label className="mb-2">CARDHOLDER NAME</label>
          <input
            type="text"
            className={errors.nameCard ?"form-control box" : "form-control"}
            placeholder="e.g Jane Appleseed"
            {...register("nameCard", {
              required: true,
              pattern:/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/
            })}
          />
          {errors.nameCard?.type === "required" && (
            <p className="validation-errors">  Can't be blank </p>
          )}
          {errors.nameCard?.type === "pattern" && (
            <p className="validation-errors">  Wrong format, letters only </p>
          )}
         
        </div>
        <div className="form-group mt-4">
          <label className="mb-2">CARD NUMBER</label>
          <input
            id="cardNumber"
            type="text"
            className={errors.numberCard  ? "form-control box" : "form-control "}
            placeholder="e.g 1234 5678 9123"
            {...register("numberCard", {
              required: true,
              pattern: /^[0-9\s]+$/g,
              maxLength: 19,
              minLength: 19,
            })}
          />
          {errors.numberCard?.type === "required" && (
            <p className="validation-errors"> Can't be blank </p>
          )}
          {errors.numberCard?.type === "pattern" && (
            <p className="validation-errors"> Wrong format, number only </p>
          )}
          {errors.numberCard?.type === "maxLength" && (
            <p className="validation-errors"> Wrong format, 16 numbers only </p>
          )}
          {errors.numberCard?.type === "minLength" && (
            <p className="validation-errors"> Wrong format, 16 numbers only </p>
          )}
        </div>
        <div className="form-group-row d-flex mt-4 ">
          <div className="col-3  ">
            <label className="mb-2">EXP. DATE </label>
            <input
              type="number"
              className={errors.mm   ? "form-control col-3 expDate box" : "form-control col-3 expDate"}
              placeholder="MM"
              {...register("mm", {
              required: true,
              pattern: /^[0-9\s]+$/g,
              maxLength: 2,
              minLength: 2,
            })}
            />
             {errors.mm?.type === "required" && (
            <p className="validation-errors-min"> Can't be blank </p>
          )}
          {errors.mm?.type === "pattern" && (
            <p className="validation-errors-min"> Wrong format, number only </p>
          )}
          {errors.mm?.type === "maxLength" && (
            <p className="validation-errors-min"> Wrong format, 2 numbers only </p>
          )}
          {errors.mm?.type === "minLength" && (
            <p className="validation-errors-min"> Wrong format, 2 numbers only </p>
          )}
          </div>
          <div className="col-3  ">
            <label className="mb-2">(MM/YY) </label>
            <input
              type="number"
              className={errors.yy  ? "form-control col-3 yy box" : "form-control col-3 yy"}
              placeholder="YY"
              {...register("yy", {
              required: true,
              pattern: /^[0-9\s]+$/g,
              minLength: 2,
              maxLength : 2,
            })}
            />
              {errors.yy?.type === "required" && (
            <p className="validation-errors-min"> Can't be blank </p>
          )}
          {errors.yy?.type === "pattern" && (
            <p className="validation-errors-min"> Wrong format, number only </p>
          )}
          {errors.yy?.type === "minLength" && (
            <p className="validation-errors-min"> Wrong format, 2 numbers only </p>
          )}
          {errors.yy?.type === "maxLength" && (
            <p className="validation-errors-min"> Wrong format, 2 numbers only </p>
          )}
          </div>
          <div className="col-6 ">
            <label className="mb-2">CVC </label>
            <input
              type="number"
              className={errors.cvc ? "form-control  cvc  box " : "form-control  cvc "}
              placeholder="e.g 123"
              {...register("cvc", {
              required: true,
              pattern: /^[0-9\s]+$/g,
              minLength: 3,
              maxLength: 3,
            })}
            />
              {errors.cvc?.type === "required" && (
            <p className="validation-errors-min"> Can't be blank </p>
          )}
          {errors.cvc?.type === "pattern" && (
            <p className="validation-errors-min"> Wrong format, number only </p>
          )}
          {errors.cvc?.type === "minLength" && (
            <p className="validation-errors-min"> Wrong format, 3 numbers only </p>
          )}
          {errors.cvc?.type === "maxLength" && (
            <p className="validation-errors-min"> Wrong format, 3 numbers only </p>
          )}
          </div>
        </div>

        <button type="submit" className="btn mt-4">
          Confirm
        </button>
      </form>
    </>
  );
};

export default Form;
