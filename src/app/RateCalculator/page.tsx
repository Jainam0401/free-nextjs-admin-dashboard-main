'use client'
import { useForm , SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";

interface RateCalculator {
    pincode: string;
    delivery_pincode: string;
    actual_weight : number;
    length: number;
    width: number;
    height: number;
    shipment_value: number;
    returnOrForward: boolean;
    paymentType:string;
    shipping_dangerous_goods: boolean;
}


const Page : React.FC = () => {

    const rateCalculatorZodSchema = z.object({
        pincode: z.string().min(6, { message: "Pincode must be at least 6 characters long" }).refine(value => /^\d+$/.test(value), {
            message: "Pincode must contain only numeric characters"
        }),
        delivery_pincode: z.string().min(6, { message: "Pincode must be at least 6 characters long" }).refine(value => /^\d+$/.test(value), {
            message: "Pincode must contain only numeric characters"
        }),
        actual_weight: z.number().positive({ message: "Actual Weight must be a positive number" }),
        length: z.number().positive({ message: "Length must be a positive number" }),
        width: z.number().positive({ message: "Width must be a positive number" }),
        height: z.number().positive({ message: "Height must be a positive number" }),
        shipment_value: z.number().positive({ message: "Shipment Value must be a positive number" }),
        returnOrForward: z.string().refine(value => value === 'return' || value === 'forward', {
            message: "Invalid value for returnOrForward. Must be 'return' or 'forward'."
        }),
        paymentType: z.string().refine(value => value === 'COD' || value === 'prepaid', {
            message: "Invalid value for returnOrForward. Must be 'COD' or 'Prepaid'."
        }),
        shipping_dangerous_goods: z.string().refine(value => value === 'dg' || value === 'not_dg', {
            message: "Invalid value for returnOrForward. Must be 'Dangerous Goods' or 'Not Dangerous Goods'."
        }),
      });

    //   type FormData = z.infer<typeof rateCalculatorZodSchema>;

 const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
 } = useForm({
    resolver: zodResolver(rateCalculatorZodSchema),
 });

 const onSubmit10: SubmitHandler<RateCalculator> = (data) => {
    console.log(data)
}

    return (
        
        <form className="w-full  p-4" onSubmit={handleSubmit(onSubmit10)}>
        <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="md:w-[80%] rounded-md bg-white p-2">
                    <p className="text-center text-base font-semibold md:text-start">Shipment types</p>
                    <div className="flex md:flex-row justify-center space-x-5 md:space-x-28 py-3 md:justify-start">
                        <div className="flex space-x-2">
                        <input
                            type="radio"
                            id="forward"
                            value="forward"
                            {...register("returnOrForward")}
                        />
                            <label htmlFor="forward">Forward</label>
                        </div>
                        <div className="flex space-x-2">
                        <input
                            type="radio"
                            id="return"
                            value="return"
                            {...register("returnOrForward")}
                        />
                            <label htmlFor="return">Return</label>
                        </div>
                        {/* Error message */}
                    </div>
                    {errors.returnOrForward && (
                            <p role="alert" className="text-red text-center text-sm md:text-left">{errors.returnOrForward.message}</p>
                        )}
                    <div className="flex w-[100%] flex-col  md:w-[100%] md:flex-row md:space-x-4">
                        <div className="flex w-[100%] flex-col items-center py-3 md:w-[50%] md:items-start">
                            <p className="text-base font-semibold">Pickup Pincode</p>
                            <div className="mt-2 w-[100%] max-w-[450px] relative">
                            <input
                            className="w-[100%] py-2 pl-2 text-xs lg:text-base  rounded-md border-[1px] border-black"
                            {...register('pincode')} // Register the input field with react-hook-forms
                            type="text"
                            placeholder="Enter 6 digit pickup area code"
                            />
                            {errors.pincode ? (<p role="alert" className="text-red  text-sm text-center md:text-left mt-2">{errors.pincode.message}</p>) : null}
                                            
                            </div>
                        </div>
                        <div className="flex w-[100%] flex-col items-center py-3 md:w-[50%] md:items-start">
                            <p className="text-base font-semibold">Delivery Pincode</p>
                            <input className="mt-2 py-2 pl-2 text-xs lg:text-base w-[100%] max-w-[450px] rounded-md border-[1px] border-black" 
                            {...register('delivery_pincode')}
                            type="text" 
                            placeholder="Enter 6 digit pickup area code" />
                            {errors.delivery_pincode ? (<p role="alert" className="text-red  text-sm text-center md:text-left mt-2">{errors.delivery_pincode.message}</p>) : null}
                        </div>
                    </div>

                    <div className="flex lg:flex-row md:flex-col flex-col lg:space-x-2  mt-4">
                        <div className="lg:w-[50%] md:w-[100%] flex flex-col items-center lg:items-start md:items-start">
                            <p className="text-base font-semibold">Actual Weight</p>
                            <div className="w-[100%] max-w-[450px] relative">
                                <input className="w-[100%] relative py-2 pl-2 text-xs lg:text-base  border-[1px] border-black rounded-md my-2" 
                                {...register('actual_weight', {valueAsNumber: true})}
                                type='number' 
                                placeholder='0.00' />
                                <span className="absolute right-1 top-3  bg-violet-200 px-2 lg:py-1">KG</span>
                                {errors.actual_weight ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.actual_weight.message}</p>) : null}
                            </div>
                        </div>
                        <div className="lg:w-[50%] md:w-[100%]">
                            <p className="text-center text-base font-semibold md:text-left lg:text-left">Dimensions <span>(Optional)</span></p>
                            <div className="flex flex-col md:flex-row lg:flex-row my-2 space-y-3 md:space-x-3 md:space-y-0">
                                <div className="w-[100%] md:w-[33%] lg:w-[33%] flex flex-col items-center">
                                    <div className="w-[100%] max-w-[450px] relative">
                                        <input className="w-[100%] relative py-2 pl-2 text-xs lg:text-base  border-[1px] border-black rounded-md my-2 md:my-0" 
                                         {...register('length', {valueAsNumber: true})}
                                        type='number' 
                                        placeholder='L' />
                                        <span className="absolute right-1 top-3 md:top-1  bg-violet-200 px-2 lg:py-1">CM</span>
                                        {errors.length ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.length.message}</p>) : null}
                                    </div>
                                </div>
                                <div className="w-[100%] md:w-[33%] lg:w-[33%] flex flex-col items-center">
                                    <div className="w-[100%] max-w-[450px] relative">
                                        <input className="w-[100%] relative py-2 pl-2 text-xs lg:text-base  border-[1px] border-black rounded-md my-2 md:my-0" 
                                        {...register('width', {valueAsNumber: true})}
                                        type='number' placeholder='W' />
                                        <span className="absolute right-1 top-3 md:top-1  bg-violet-200 px-2 lg:py-1">CM</span>
                                        {errors.width ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.width.message}</p>) : null}
                                    </div>
                                </div>
                                <div className="w-[100%] md:w-[33%] lg:w-[33%] flex flex-col items-center">
                                    <div className="w-[100%] max-w-[450px] relative">
                                        <input className="w-[100%] relative py-2 pl-2 text-xs lg:text-base  border-[1px] border-black rounded-md my-2 md:my-0" type='number' 
                                         {...register('height', {valueAsNumber: true})}
                                        placeholder='H' />
                                        <span className="absolute right-1 top-3 md:top-1  bg-violet-200 px-2 lg:py-1">CM</span>
                                        {errors.height ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.height.message}</p>) : null}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-center md:text-left">Note: Dimensional value should be greater than 0.5cm</p>
                        </div>
                    </div>

                    <div className="w-[100%] flex flex-col md:flex-row lg:flex-row mt-4">
                        <div className="w-[100%] md:w-[50%] lg:w-[50%]">
                            <p className="text-center text-base font-semibold md:text-left">Payment Types</p>
                            <div className="flex justify-center md:justify-start space-x-9 my-2">
                                <div className="flex space-x-2">
                                    <input type="radio" {...register('paymentType')} value="COD" id="cod" />
                                    <label htmlFor="cod">Cash on Delivery</label>
                                </div>
                                <div className="flex space-x-2">
                                    <input type="radio" {...register('paymentType')} value="prepaid" id="prepaid" />
                                    <label htmlFor="prepaid">Prepaid</label>
                                </div>
                            </div>
                            {errors.paymentType ? <p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.paymentType.message}</p> : null}
                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[50%] flex flex-col items-center md:items-start">
                            <p className="text-center text-base font-semibold md:text-left">Shipment Value ($)</p>
                            <input className="w-[100%] py-2 pl-2 text-xs lg:text-base max-w-[450px] border-[1px] border-black rounded-md my-2" 
                            type='number' 
                            {...register('shipment_value', {valueAsNumber: true})} 
                            placeholder="Enter the shipment value" />
                            {errors.shipment_value ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.shipment_value.message}</p>) : null}
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] mt-4">
                        <p className="text-center md:text-left text-base font-semibold">Shipping Dangerous Goods?<span className="text-xs px-1 ml-2 bg-slate-500 text-white rounded-[50%]">?</span></p>
                        <div className="flex justify-center md:justify-start space-x-9 my-2">
                            <div className="flex space-x-2">
                                <input type="radio" {...register('shipping_dangerous_goods')} value="dg" id="dgy" />
                                <label htmlFor="dgy">Yes</label>
                            </div>
                            <div className="flex space-x-2">
                                <input type="radio" {...register('shipping_dangerous_goods')} value="not_dg" id="dgn" />
                                <label htmlFor="dgn">No</label>
                            </div>
                        </div>
                        {errors.shipping_dangerous_goods ? (<p role="alert" className="text-red text-sm text-center md:text-left my-2">{errors.shipping_dangerous_goods.message}</p>) : null}
                        {/* <p role="alert" className="text-red text-sm text-center md:text-left my-2">Neel Chalke</p> */}
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 mt-4">
                        <button type="submit" className="w-[150px] h-[40px] bg-violet-600 text-white font-bold  rounded">
                            Calculate
                        </button>
                        <button className="w-[150px] h-[40px] border-2 border-violet-600 text-violet-600 font-bold  rounded">
                            <span>Reset</span>
                        </button>
                    </div>

                </div>
                <div className="md:w-[20%] rounded-md bg-white p-2">
                    <p className="text-center my-2">Pickup location</p>
                    <div className="w-[70%] relative py-3 rounded-md border-t-2 border-b-2 border-dotted border-violet-500  bg-violet-300 mx-auto">
                        <p className="text-center text-slate-500">City,</p>
                        <p className="text-center text-slate-500">State</p>
                    </div>
                    <div className="h-[100px] w-2 border-l border-dotted my-2 border-black mx-auto"></div>
                    <p className="text-center my-2">Delivery location</p>
                    <div className="w-[70%] relative py-3 rounded-md border-t-2 border-b-2 border-dotted border-violet-500  bg-violet-300 mx-auto">
                        <p className="text-center text-slate-500">City,</p>
                        <p className="text-center text-slate-500">State</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-4 p-4 bg-white rounded-md">
                <p className="font-bold my-2">Terms & Conditions</p>
                <ul className="list-disc px-2">
                    <li className="mb-2">United States - The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America.</li>
                    <li className="mb-2">Canada - Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean.</li>
                    <li className="mb-2">United Kingdom - The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country located off the north-western coast of the European mainland.</li>
                    <li className="mb-2">Australia - Australia, officially known as the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.</li>
                    <li className="mb-2">Germany - Germany, officially the Federal Republic of Germany, is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union.</li>
                    <li className="mb-2">France - France, officially the French Republic, is a transcontinental country spanning Western Europe and overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian Oceans.</li>
                    <li className="mb-2">Japan - Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.</li>
                    <li className="mb-2">China - China, officially the People's Republic of China (PRC), is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.</li>
                    <li className="mb-2">Brazil - Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America.</li>
                    <li className="mb-2">India - India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.</li>
                </ul>
            </div>
        </form>
       
    );
}

export default Page;