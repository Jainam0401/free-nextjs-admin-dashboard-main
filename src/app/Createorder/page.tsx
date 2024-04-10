"use client";
import React, { useState } from "react";
import { Label, Checkbox } from "flowbite-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
const formdataSchema = z.object({
  fullName: z.string().min(1, "full is required").max(2),
  pickupAddress: z.string().max(100).min(5),
  mobileNumber: z
    .string()
    .length(10)
    .regex(/^\d{10}$/),
  pincode: z
    .string()
    .length(6)
    .regex(/^[1-9][0-9]{5}$/),
  state: z.string().min(2).max(30),
  address: z.string().max(100).min(5),
  // date: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
  country: z.string().min(2).max(30),
  cityName: z.string().min(2).max(30),
  landmark: z.string().or(z.literal("")),
  // others: z.string({required_error: "Others is required"}).max(15).min(1),
  // gstin: z.string().length(15),
  // companyName: z.string({required_error: "Company Name is required"}).min(1).max(80)
  productName: z.string(),
  quantity: z.string(),
  unitprice: z.string(),
  deatweight: z.string(),
});

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formdataSchema) });

  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = (e: any) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = (e: any) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = (formData: any) => {
    try {
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <DefaultLayout>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-2 rounded-lg px-4">
          <div className=" py-2 px-4">
            <div className="">
              <p className="py-2 font-bold text-gray-700">Pick Up From</p>
              <div className="grid grid-cols-1  py-2 gap-4 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="pickupAddress"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Where is the order being sent from?
                  </label>
                  <input
                    type="text"
                    id="pickupAddress"
                    {...register("pickupAddress")}
                    className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="Search your pickup address"
                  />
                  {errors.pickupAddress && (
                    <span className="text-red-500">
                      Pickup Address required
                    </span>
                  )}
                  <p className="block py-2 mt-2 text-xs font-small text-purple-700">
                    {" "}
                    + Add another pickup address{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="">
              <p className="py-3 font-bold text-gray-700">
                Add Buyer's Details
              </p>
              <div>
                <p className="block mb-2 text-sm font-medium text-gray-700">
                  To whom is the order being delivered?{" "}
                  <span className="text-sm font-normal text-stone-300">
                    {" "}
                    (Buyer’s Info)
                  </span>
                </p>
                <div className="grid grid-cols-1  py-2 gap-4 md:grid-cols-3">
                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Mobile number
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="Enter your mobile number"
                      {...register("mobileNumber")}
                    />
                    {errors.mobileNumber && (
                      <span className="text-red-500">
                        Mobile Number is required
                      </span>
                    )}
                  </div>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <span className="text-red-500">
                        Full Name is required
                      </span>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        Email is not in proper fromat
                      </span>
                    )}
                  </div>
                </div>
                <p className="block py-2 mt-2 text-xs font-small text-purple-700">
                  + Add Alternative mobile number, Reseller Name, Buyer GSTIN{" "}
                  <span className="text-xs font-small text-stone-300">
                    (Optional)
                  </span>
                </p>
              </div>
              <div className="mt-2">
                <p className="block mb-2 text-sm font-medium text-gray-700">
                  Where is the order being delivered?{" "}
                  <span className="text-sm font-normal text-stone-300">
                    {" "}
                    (Buyer’s Address)
                  </span>
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full lg:w-1/2 md:w-full">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Complete Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="House/Floor No., Building Name or Street, Locally"
                      {...register("address")}
                    />
                    {errors.address && (
                      <span className="text-red-500">Address is required</span>
                    )}
                  </div>
                  <div className="w-full lg:w-1/2 md:w-full">
                    <label
                      htmlFor="landmark"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder=" Any nearby post office, market, Hospital as the landmark "
                      {...register("landmark")}
                    />
                    {errors.landmark && (
                      <span className="text-red-500">Landmark is required</span>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <div className="w-full lg:w-1/4 md:w-full">
                    <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="Enter your Pin Code"
                      {...register("pincode")}
                    />
                    {errors.pincode && (
                      <span className="text-red-500">Pin Code is required</span>
                    )}
                  </div>
                  <div className="w-full lg:w-1/4 md:w-full">
                    <label
                      htmlFor="cityName"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      City Name
                    </label>
                    <input
                      type="text"
                      id="cityName"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="Enter your City Name"
                      {...register("cityName")}
                    />
                    {errors.cityName && (
                      <span className="text-red-500">
                        City Name is required
                      </span>
                    )}
                  </div>
                  <div className="w-full lg:w-1/4 md:w-full">
                    <label
                      htmlFor="state"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your State"
                      {...register("state")}
                    />
                    {errors.state && (
                      <span className="text-red-500">State is required</span>
                    )}
                  </div>
                  <div className="w-full lg:w-1/4 md:w-full">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your Country"
                      {...register("country")}
                    />
                    {errors.country && (
                      <span className="text-red-500">Country is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex mt-2 items-center gap-2 p-2 mb-2">
                <Checkbox id="billing-address" />
                <Label htmlFor="billing-address">
                  Billing address is same as the shipping address
                </Label>
              </div>
            </div>
            <hr />
            <div className="mb-2 p-2">
              <p className="py-2 font-bold text-gray-700">Order Details</p>
              <div className="flex flex-col md:flex-row gap-4 ">
                <div className="w-full lg:w-1/2 md:w-full">
                  <label
                    htmlFor="productName"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="Enter your product name"
                    {...register("productName")}
                  />
                  {errors.productName && (
                    <span className="text-red-500">
                      Product Name is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-1/2 md:w-full">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Quantity
                  </label>
                  <div className="flex items-center border rounded-md border-gray-300">
                    <button
                      className="px-3 py-1.5 bg-stone-100 text-black rounded-l-lg "
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="quantity"
                      value={quantity}
                      className=" text-gray-900 bg-white text-center text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                      {...register("quantity")}
                    />

                    <button
                      className="px-3 py-1.5 bg-stone-100 text-black rounded-r-lg"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 md:w-full">
                  <label
                    htmlFor="unitprice"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Unit Price
                  </label>
                  <input
                    type="number"
                    id="unitprice"
                    className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="₹"
                    {...register("unitprice")}
                  />
                  {errors.unitprice && (
                    <span className="text-red-500">
                      Product Name is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-1/2 md:w-full">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Total Price
                  </label>
                  <input
                    type="number"
                    id="fullName"
                    className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="₹"
                    {...register("totalPrice")}
                  />
                  {errors.totalPrice && (
                    <span className="text-red-500">
                      Total Price is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-4 mb-4">
              <button
                type="submit"
                className=" w-[200px] rounded-sm px-2 text-sm bg-purple-200 text-purple-500 py-1"
              >
                + Add Another product
              </button>
            </div>
            <hr />
            <div className="mb-2 p-2">
              <p className="py-2 font-bold text-gray-700">Package Details</p>
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-col px-5">
                  <label
                    htmlFor="deadweight"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    {" "}
                    Dead Weight
                  </label>
                  <input
                    type="number"
                    id="deadweight"
                    className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="0.00"
                    {...register("deadweight")}
                  />
                  {errors.deadweight && (
                    <span className="text-red-500">
                      Dead Weight is required
                    </span>
                  )}
                  <p className="block text-xs py-2 text-gray-500">
                    {" "}
                    (Max. 3 digits after decimal place){" "}
                  </p>
                  <p className="block text-xs text-gray-500">
                    Note: The minimum chargeable weight is 0.50 Kg
                  </p>
                </div>
                <div>
                  <p className="block mb-2 text-sm font-medium text-gray-500">
                    {" "}
                    Enter package dimensions (L*B*H) to calculate Volumetric
                    Weight
                  </p>
                  <div className="flex flex-col md:flex-row gap-4  ">
                    <input
                      type="number"
                      id="length"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="0.00 (cm)"
                      {...register("length")}
                    />
                    {errors.length && (
                      <span className="text-red-500">length is required</span>
                    )}
                    <input
                      type="number"
                      id="breadth"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="0.00 (cm)"
                      {...register("breadth")}
                    />
                    {errors.breadth && (
                      <span className="text-red-500">breadth is required</span>
                    )}
                    <input
                      type="number"
                      id="width"
                      className="border border-gray-300 text-gray-900 bg-stone-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="0.00 (cm)"
                      {...register("width")}
                    />
                    {errors.width && (
                      <span className="text-red-500">width is required</span>
                    )}
                  </div>
                  <p className="block text-xs py-2 text-gray-500">
                    {" "}
                    Note: Dimension should be in centimeters only, & values
                    should be greater than 0.50 cm.
                  </p>
                </div>
              </div>
              <div className="mt-2 mb-2 p-2 w-full rounded-md bg-indigo-50 text-black">
                <p className="block text-sm font-medium text-gray-500 p-2">
                  {" "}
                  Volumetric Weight
                  <span className="px-2 md:px-6"> 0.00 Kg</span>
                </p>
              </div>
              <div className="mt-2 mb-2 p-2 w-full rounded-md bg-cyan-50 text-black">
                <p className="block text-sm font-medium text-gray-500 p-2">
                  {" "}
                  Applicable Weight
                  <span className="px-2 md:px-6"> 0.00 Kg</span>
                </p>
                <p className="block text-xs font-medium text-gray-300 px-2">
                  {" "}
                  *Applicable weight is the heavier among the two weights that
                  is Dead Weight V/s the Volumetric Weight, basis on which
                  freight charges are calculated.
                </p>
                <p className="block text-xs font-medium text-gray-300 px-2">
                  {" "}
                  *Final chargeable weight will be based on the weight slab of
                  the courier selected before shipping
                </p>
              </div>
            </div>
            <hr />
            <div>
              <p className="p-2 font-bold text-gray-700">Payment Details</p>
              <p className="px-2 text-sm font-medium text-gray-600">
                {" "}
                Select Mode of Payment that your buyer has chosen for the order{" "}
                <div className="flex items-center mb-4">
                  <div className="flex p-2 flex-col md:flex-row">
                    <div className="px-2">
                      <input
                        checked={selectedOption === "option1"}
                        onChange={handleRadioChange}
                        id="disabled-radio-1"
                        type="radio"
                        defaultValue="option1"
                        name="disabled-radio"
                        className="w-4 h-4 px-2 text-violet-600 bg-gray-100 border-gray-300 focus:ring-violet-500 dark:focus:ring-violet-600"
                      />
                      <label
                        htmlFor="disabled-radio-2"
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        Disabled checked
                      </label>
                    </div>
                    <div className="px-2">
                      <input
                        checked={selectedOption === "option2"}
                        onChange={handleRadioChange}
                        id="disabled-radio-2"
                        type="radio"
                        defaultValue="option2"
                        name="disabled-radio"
                        className="w-4 h-4 px-2 text-violet-600 bg-gray-100 border-gray-300 focus:ring-violet-500 dark:focus:ring-violet-600"
                      />
                      <label
                        htmlFor="disabled-radio-2"
                        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                      >
                        Disabled checked
                      </label>
                    </div>
                  </div>
                </div>
              </p>
            </div>
            <div className="mt-2 mb-2 p-2 w-full rounded-md bg-indigo-50 text-black">
              <p className="block text-sm font-medium text-gray-500 p-2">
                {" "}
                Total Order
                <span className="px-2 md:px-6 float-right"> 0.00 </span>
              </p>
            </div>
            <div className="mt-2 mb-2 p-2 w-full rounded-md bg-orange-50 text-black">
              <p className="block text-sm font-medium text-orange-200 p-2">
                {" "}
                Note: In case a shipment gets lost, the amount above will be
                refunded to your account, capped at ₹ 2500
              </p>
            </div>
          </div>
          <div className="flex float-right items-center space-y-5  md:space-x-5 md:space-y-0 md:p-4">
            <button
              type="submit"
              className="w-[150px] rounded-md bg-stone-200 text-stone-400 py-2"
            >
              Select courier
            </button>
          </div>
        </div>
      </form>
    </div>
    </DefaultLayout>
  );
}

export default page;
