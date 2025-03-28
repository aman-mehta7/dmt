// import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
// // import * as Yup from "yup";
// import { Form as AntForm, Input, InputNumber, Switch } from "antd";
// import Button from "../../shared/Button";

// const validationSchema = Yup.object().shape({
//   place_id: Yup.number().required("Place ID is required"),
//   title: Yup.string().required("Title is required"),
//   price: Yup.number().required("Price is required").min(0, "Price must be positive"),
//   stock: Yup.number().required("Stock is required").min(0, "Stock must be positive"),
//   room_type: Yup.string().required("Room type is required"),
//   beds: Yup.array().of(
//     Yup.object().shape({
//       bed_type: Yup.string().required("Bed type is required"),
//       amount: Yup.number().required("Amount is required").min(1, "Must have at least 1 bed"),
//     })
//   ),
//   isDiscountAvailable: Yup.boolean(),
//   discount: Yup.number().when("isDiscountAvailable", {
//     is: true,
//     then: (schema) => schema.required("Discount is required").min(1, "Discount must be at least 1"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   transferService: Yup.string().required("Transfer service is required"),
//   extraAmount: Yup.number().min(0, "Extra amount must be positive"),
// });

// import { FC, useEffect, useState } from "react";
// import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
// import { Select, Input, InputNumber, Switch, Form as AntForm } from "antd";
// import { Button } from "../../../components";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelectors";
// import { RootAppState } from "../../../redux/store";
// import { getPlaces } from "../../../redux/actions/places"; // Import getPlaces API

// const RoomForm: FC = () => {
//   const dispatch = useAppDispatch();
//   const { sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
//   const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

//   // Fetch properties on component mount
//   useEffect(() => {
//     dispatch(getPlaces());
//   }, [dispatch]);

//   return (
//     <Formik
//       initialValues={{
//         place_id: 0,
//         title: "",
//         price: 0,
//         stock: 0,
//         room_type: "",
//         beds: [{ bed_type: "", amount: 1 }],
//         isDiscountAvailable: false,
//         discount: 0,
//         transferService: "",
//         extraAmount: 0,
//       }}
//       onSubmit={(values) => {
//         console.log("Form Submitted", values);
//       }}
//     >
//       {({ values, setFieldValue }) => (
//         <AntForm layout="vertical">
//           <h1 className="font-bold text-3xl mb-3 text-center">Create a Room</h1>
//           <Form>
//             {/* Property Dropdown */}
//             <AntForm.Item className="error mb-2" label="Select Property">
//               <Select
//                 className="w-full"
//                 placeholder="Select a property"
//                 value={selectedPlace}
//                 onChange={(value) => {
//                   setSelectedPlace(value);
//                   setFieldValue("place_id", value);
//                 }}
//               >
//                 {sellerPlaces.map((place) => (
//                   <Select.Option key={place.id} value={place.id}>
//                     {place.title}
//                   </Select.Option>
//                 ))}
//               </Select>
//               <ErrorMessage name="place_id" component="div" />
//             </AntForm.Item>

//             <AntForm.Item label="Title">
//               <Field as={Input} name="title" className="input-design" />
//               <ErrorMessage name="title" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Price">
//               <Field as={InputNumber} name="price" className="input-design" />
//               <ErrorMessage name="price" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Stock">
//               <Field as={InputNumber} name="stock" className="input-design" />
//               <ErrorMessage name="stock" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Room Type">
//               <Field as={Input} name="room_type" className="input-design" />
//               <ErrorMessage name="room_type" component="div" className="error" />
//             </AntForm.Item>

//             <FieldArray name="beds">
//               {({ push, remove }) => (
//                 <>
//                   {values.beds.map((_, index) => (
//                     <div key={index} className="flex gap-3 items-center">
//                       <AntForm.Item className="w-full error" label="Bed Type">
//                         <Field as={Input} name={`beds.${index}.bed_type`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.bed_type`} component="div" />
//                       </AntForm.Item>
//                       <AntForm.Item className="w-full error" label="Amount">
//                         <Field as={InputNumber} name={`beds.${index}.amount`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.amount`} component="div" />
//                       </AntForm.Item>
//                       {values.beds.length > 1 && (
//                         <button className="border p-3 border-danger text-danger rounded-md" onClick={() => remove(index)}>
//                           -
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                   <Button className="mb-2" onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
//                 </>
//               )}
//             </FieldArray>

//             <AntForm.Item label="Discount Available">
//               <Switch checked={values.isDiscountAvailable} onChange={(checked) => setFieldValue("isDiscountAvailable", checked)} />
//             </AntForm.Item>

//             {values.isDiscountAvailable && (
//               <AntForm.Item label="Discount">
//                 <Field as={InputNumber} name="discount" className="input-design" />
//                 <ErrorMessage name="discount" component="div" className="error" />
//               </AntForm.Item>
//             )}

//             <AntForm.Item label="Transfer Service">
//               <Field as={Input} name="transferService" className="input-design" />
//               <ErrorMessage name="transferService" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Extra Amount">
//               <Field as={InputNumber} name="extraAmount" className="input-design" />
//               <ErrorMessage name="extraAmount" component="div" className="error" />
//             </AntForm.Item>

//             <Button type="submit" title="Submit" variant="filled"></Button>
//           </Form>
//         </AntForm>
//       )}
//     </Formik>
//   );
// };

// export default RoomForm;

// import { FC, useEffect, useState } from "react";
// import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
// import { Select, Input, InputNumber, Switch, Form as AntForm } from "antd";
// import { Button } from "../../../components";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelectors";
// import { RootAppState } from "../../../redux/store";
// import { getPlaces, getPlaceRooms, createRoom } from "../../../redux/actions/places";
// import * as Yup from "yup"; //  Validation

// const RoomForm: FC = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
//   const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

//   //  Fetch properties on mount
//   useEffect(() => {
//     dispatch(getPlaces());
//   }, [dispatch]);

//   //  Validation Schema
//   const validationSchema = Yup.object().shape({
//     place_id: Yup.number().required("Please select a property"),
//     title: Yup.string().required("Title is required"),
//     price: Yup.number().required("Price is required").min(1, "Price must be greater than 0"),
//     stock: Yup.number().required("Stock is required").min(1, "Stock must be at least 1"),
//     room_type: Yup.string().required("Room type is required"),
//     beds: Yup.array()
//       .of(
//         Yup.object().shape({
//           bed_type: Yup.string().required("Bed type is required"),
//           amount: Yup.number().required("Amount is required").min(1, "Must have at least 1 bed"),
//         })
//       )
//       .min(1, "At least one bed is required"),
//   });

//   return (
//     <Formik
//       initialValues={{
//         place_id: 0,
//         title: "",
//         price: 0,
//         stock: 0,
//         room_type: "",
//         beds: [{ bed_type: "", amount: 1 }],
//         isDiscountAvailable: false,
//         discount: 0,
//         transferService: "",
//         extraAmount: 0,
//       }}
//       validationSchema={validationSchema} //  Added validation
//       onSubmit={async (values, { setSubmitting }) => {
//         console.log("Submitting Room Data:", values);

//         if (!values.place_id) {
//           // message.error("Please select a property!");
//           setSubmitting(false);
//           return;
//         }

//         try {
//           const success = await dispatch(createRoom(values)); //  Send request with body
//           if (success) {
//             dispatch(getPlaceRooms(values.place_id)); //  Refresh rooms
//             navigate("/app/rooms"); //  Redirect
//           }
//         } catch (error) {
//           console.error("Room creation failed:", error);
//         } finally {
//           setSubmitting(false);
//         }
//       }}
//     >
//       {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
//         <AntForm layout="vertical" onFinish={handleSubmit}>
//           <h1 className="font-bold text-3xl mb-3 text-center">Create a Room</h1>
//           <Form>
//             {/*  Property Dropdown */}
//             <AntForm.Item className="error mb-2" label="Select Property">
//               <Select
//                 className="w-full"
//                 placeholder="Select a property"
//                 value={selectedPlace}
//                 onChange={(value) => {
//                   setSelectedPlace(value);
//                   setFieldValue("place_id", value);
//                 }}
//               >
//                 {sellerPlaces.map((place) => (
//                   <Select.Option key={place.id} value={place.id}>
//                     {place.title}
//                   </Select.Option>
//                 ))}
//               </Select>
//               <ErrorMessage name="place_id" component="div" />
//             </AntForm.Item>

//             <AntForm.Item label="Title">
//               <Field as={Input} name="title" className="input-design" />
//               <ErrorMessage name="title" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Price">
//               <Field as={InputNumber} name="price" className="input-design" />
//               <ErrorMessage name="price" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Stock">
//               <Field as={InputNumber} name="stock" className="input-design" />
//               <ErrorMessage name="stock" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Room Type">
//               <Field as={Input} name="room_type" className="input-design" />
//               <ErrorMessage name="room_type" component="div" className="error" />
//             </AntForm.Item>

//             <FieldArray name="beds">
//               {({ push, remove }) => (
//                 <>
//                   {values.beds.map((_, index) => (
//                     <div key={index} className="flex gap-3 items-center">
//                       <AntForm.Item className="w-full error" label="Bed Type">
//                         <Field as={Input} name={`beds.${index}.bed_type`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.bed_type`} component="div" />
//                       </AntForm.Item>
//                       <AntForm.Item className="w-full error" label="Amount">
//                         <Field as={InputNumber} name={`beds.${index}.amount`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.amount`} component="div" />
//                       </AntForm.Item>
//                       {values.beds.length > 1 && (
//                         <button type="button" className="border p-3 border-danger text-danger rounded-md" onClick={() => remove(index)}>
//                           -
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                   <Button className="mb-2" onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
//                 </>
//               )}
//             </FieldArray>

//             <AntForm.Item label="Discount Available">
//               <Switch checked={values.isDiscountAvailable} onChange={(checked) => setFieldValue("isDiscountAvailable", checked)} />
//             </AntForm.Item>

//             {values.isDiscountAvailable && (
//               <AntForm.Item label="Discount">
//                 <Field as={InputNumber} name="discount" className="input-design" />
//                 <ErrorMessage name="discount" component="div" className="error" />
//               </AntForm.Item>
//             )}

//             <AntForm.Item label="Transfer Service">
//               <Field as={Input} name="transferService" className="input-design" />
//               <ErrorMessage name="transferService" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Extra Amount">
//               <Field as={InputNumber} name="extraAmount" className="input-design" />
//               <ErrorMessage name="extraAmount" component="div" className="error" />
//             </AntForm.Item>

//             <Button type="submit" title="Submit" variant="filled" disabled={isSubmitting}></Button>
//           </Form>
//         </AntForm>
//       )}
//     </Formik>
//   );
// };

// export default RoomForm;
// import { FC, useEffect, useState } from "react";
// import { Formik, Field, Form, FieldArray, ErrorMessage,FieldProps } from "formik";
// import { Select, Input, InputNumber, Form as AntForm } from "antd";
// import { Button } from "../../../components";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelectors";
// import { RootAppState } from "../../../redux/store";
// import { getPlaces, getPlaceRooms, createRoom } from "../../../redux/actions/places";
// // import * as Yup from "yup"; //  Validation

// const RoomForm: FC = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
//   const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
// // Define allowed transfer service values
// enum TransferServiceOptions {
//   NOT_INCLUDED = "NOT_INCLUDED",
//   INCLUDED = "INCLUDED",
//   EXTRA_COST = "EXTRA_COST",
// }

//   //  Fetch properties on mount
//   useEffect(() => {
//     dispatch(getPlaces());
//   }, [dispatch]);

//   //  Validation Schema
//   // const validationSchema = Yup.object().shape({
//   //   place_id: Yup.number().required("Please select a property"),
//   //   title: Yup.string().required("Title is required"),
//   //   price: Yup.number().required("Price is required").min(1, "Price must be greater than 0"),
//   //   stock: Yup.number().required("Stock is required").min(1, "Stock must be at least 1"),
//   //   room_type: Yup.string().required("Room type is required"),
//   //   beds: Yup.array()
//   //     .of(
//   //       Yup.object().shape({
//   //         bed_type: Yup.string().required("Bed type is required"),
//   //         amount: Yup.number().required("Amount is required").min(1, "Must have at least 1 bed"),
//   //       })
//   //     )
//   //     .min(1, "At least one bed is required"),
//   //   transferService: Yup.string().required("Transfer service is required"),
//   //   extraAmount: Yup.number().required("Extra amount is required"),
//   // });

//   return (
//     <Formik
//       initialValues={{
//         place_id: 0,
//         title: "",
//         price: 0,
//         stock: 0,
//         room_type: "",
//         beds: [{ bed_type: "", amount: 1 }],
//         isDiscountAvailable: false,
//         discount: 0,
//         transferService: "",
//         extraAmount: 0,
//       }}
//       // validationSchema={validationSchema} //  Added validation
//       onSubmit={async (values, { setSubmitting }) => {
//         console.log("Submitting Room Data:", values);

//         if (!values.place_id) {
//           // message.error("Please select a property!");
//           setSubmitting(false);
//           return;
//         }

//         try {
//           const success = await dispatch(createRoom(values)); //  Send as JSON
//           if (success) {
//             dispatch(getPlaceRooms(values.place_id)); //  Refresh rooms
//             navigate("/app/rooms"); //  Redirect after creation
//           }
//         } catch (error) {
//           console.error("Room creation failed:", error);
//         } finally {
//           setSubmitting(false);
//         }
//       }}
//     >
//       {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
//         <AntForm
//           layout="vertical"
//           onSubmitCapture={(e) => {
//             e.preventDefault(); //  Prevent default form submission
//             handleSubmit();
//           }}
//         >
//           <h1 className="font-bold text-3xl mb-3 text-center">Create a Room</h1>
//           <Form>
//             {/*  Property Dropdown */}
//             <AntForm.Item className="error mb-2" label="Select Property">
//               <Select
//                 className="w-full"
//                 placeholder="Select a property"
//                 value={selectedPlace}
//                 onChange={(value) => {
//                   setSelectedPlace(value);
//                   setFieldValue("place_id", value);
//                 }}
//               >
//                 {sellerPlaces.map((place) => (
//                   <Select.Option key={place.id} value={place.id}>
//                     {place.title}
//                   </Select.Option>
//                 ))}
//               </Select>
//               <ErrorMessage name="place_id" component="div" />
//             </AntForm.Item>

//             <AntForm.Item label="Title">
//               <Field as={Input} name="title" className="input-design" />
//               <ErrorMessage name="title" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Price">
//               <Field as={InputNumber} name="price" className="input-design" />
//               <ErrorMessage name="price" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Stock">
//               <Field as={InputNumber} name="stock" className="input-design" />
//               <ErrorMessage name="stock" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Room Type">
//               <Field as={Input} name="room_type" className="input-design" />
//               <ErrorMessage name="room_type" component="div" className="error" />
//             </AntForm.Item>

//             <FieldArray name="beds">
//               {({ push, remove }) => (
//                 <>
//                   {values.beds.map((_, index) => (
//                     <div key={index} className="flex gap-3 items-center">
//                       <AntForm.Item className="w-full error" label="Bed Type">
//                         <Field as={Input} name={`beds.${index}.bed_type`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.bed_type`} component="div" />
//                       </AntForm.Item>
//                       <AntForm.Item className="w-full error" label="Amount">
//                         <Field as={InputNumber} name={`beds.${index}.amount`} className="input-design" />
//                         <ErrorMessage name={`beds.${index}.amount`} component="div" />
//                       </AntForm.Item>
//                       {values.beds.length > 1 && (
//                         <button type="button" className="border p-3 border-danger text-danger rounded-md" onClick={() => remove(index)}>
//                           -
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                   <Button className="mb-2" onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
//                 </>
//               )}
//             </FieldArray>

//             {/* <AntForm.Item label="Transfer Service">
//               <Field as={Input} name="transferService" className="input-design" />
//               <ErrorMessage name="transferService" component="div" className="error" />
//             </AntForm.Item> */}

// <AntForm.Item label="Transfer Service">
//   <Field name="transferService">
//     {({ field, form }: FieldProps) => (
//       <Select
//         {...field}
//         className="w-full input-design"
//         placeholder="Select Transfer Service"
//         onChange={(value: string) => form.setFieldValue(field.name, value)}
//       >
//         {Object.values(TransferServiceOptions).map((option) => (
//           <Select.Option key={option} value={option}>
//             {option.replace("_", " ")} {/* Formats text properly */}
//           </Select.Option>
//         ))}
//       </Select>
//     )}
//   </Field>
//   <ErrorMessage name="transferService" component="div" className="error" />
// </AntForm.Item>
//             <AntForm.Item label="Extra Amount">
//               <Field as={InputNumber} name="extraAmount" className="input-design" />
//               <ErrorMessage name="extraAmount" component="div" className="error" />
//             </AntForm.Item>

//             <Button type="submit" title="Submit" variant="filled" disabled={isSubmitting}></Button>
//           </Form>
//         </AntForm>
//       )}
//     </Formik>
//   );
// };

// export default RoomForm;
// import { FC, useEffect, useState } from "react";
// import { Formik, Field, Form, FieldArray, ErrorMessage, FieldProps } from "formik";
// import { Select, Input, InputNumber, Upload, Switch, Form as AntForm, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { Button } from "../../../components";
// import { useNavigate,useParams,useSearchParams  } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelectors";
// import { RootAppState } from "../../../redux/store";
// import { getPlaces, getPlaceRooms, createRoom, getRoom } from "../../../redux/actions/places";

// //  Enums for Room Options (Ensuring TransferServiceOptions is included)
// const TransferServiceOptions = ["NOT_INCLUDED", "INCLUDED", "EXTRA_COST"] as const;
// const RoomTypeOptions = ["SINGLE", "DOUBLE", "SUITE", "DELUXE"] as const;
// const BedTypeOptions = ["SINGLE_BED", "DOUBLE_BED", "QUEEN_BED", "KING_BED", "SOFA_BED"] as const;

// const RoomForm: FC = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
//   const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
//   const { roomId } = useParams(); //  Get roomId from URL
//   const [searchParams] = useSearchParams();
//   const placeId = searchParams.get("placeId");

//   useEffect(() => {
//     dispatch(getPlaces()); //  Fetch list of places
  
//     if (roomId && placeId) {
//       dispatch(getRoom(Number(placeId), Number(roomId))); //  Convert placeId & roomId to numbers
//     }
//   }, [dispatch, placeId, roomId]);
 

//   return (
//     <Formik
//     // enableReinitialize
//     // initialValues={initialValues}

//       initialValues={{
//         place_id: 0,
//         title: "",
//         price: 0,
//         stock: 0,
//         room_type: "",
//         beds: [{ bed_type: "", amount: 1 }],
//         isDiscountAvailable: false,
//         discount: 0,
//         transferService: "",
//         extraAmount: 0,
//         images: [] as File[],
//       }}
//       // validate={(values) => {
//       //   const errors: any = {};
//       //   if (!values.place_id) errors.place_id = "Property selection is required.";
//       //   if (!values.title) errors.title = "Title is required.";
//       //   if (!values.room_type) errors.room_type = "Room type is required.";
//       //   if (!values.transferService) errors.transferService = "Transfer service selection is required.";
//       //   if (values.beds.length === 0) errors.beds = "At least one bed must be added.";
//       //   if (values.images.length === 0) errors.images = "At least one image is required.";
//       //   return errors;
//       // }}
//       onSubmit={async (values, { setSubmitting }) => {
//         console.log("Submitting Room Data:", values);

//         const formData = new FormData();
//         formData.append("place_id", String(values.place_id));
//         formData.append("title", values.title);
//         formData.append("price", String(values.price));
//         formData.append("stock", String(values.stock));
//         formData.append("room_type", values.room_type);
//         formData.append("transferService", values.transferService);
//         formData.append("isDiscountAvailable", values.isDiscountAvailable ? "true" : "false");

//         if (values.isDiscountAvailable && values.discount > 0) {
//           formData.append("discount", String(values.discount));
//         }

//         values.beds.forEach((bed, index) => {
//           formData.append(`beds[${index}][bed_type]`, bed.bed_type);
//           formData.append(`beds[${index}][amount]`, String(bed.amount));
//         });

//         values.images.forEach((file) => {
//           formData.append("images", file);
//         });

//         console.log(" FormData being sent:");
//         Array.from(formData.entries()).forEach(([key, value]) => {
//           console.log(`🔹 ${key}:`, value);
//         });

//         try {
//           const success = await dispatch(createRoom(formData));
//           if (success) {
//             dispatch(getPlaceRooms(values.place_id));
//             navigate("/app/rooms");
//           }
//         } catch (error) {
//           console.error("Room creation failed:", error);
//         } finally {
//           setSubmitting(false);
//         }
//       }}
//     >
//       {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
//         <AntForm
//           layout="vertical"
//           onSubmitCapture={(e) => {
//             e.preventDefault();
//             handleSubmit();
//           }}
//         >
//           {/* <h1 className="font-bold text-3xl mb-3 text-center">Create a Room</h1> */}
//           <h1 className="font-bold text-3xl mb-3 text-center">
//             {roomId ? "Edit Room" : "Create a Room"} 
//           </h1> {/*  Dynamically update heading */}

//           <Form>
//             {/* Property Selection */}
//             <AntForm.Item label="Select Property">
//               <Select
//                 className="w-full"
//                 placeholder="Select a property"
//                 value={selectedPlace}
//                 onChange={(value) => {
//                   setSelectedPlace(value);
//                   setFieldValue("place_id", value);
//                 }}
//               >
//                 {sellerPlaces.map((place) => (
//                   <Select.Option key={place.id} value={place.id}>
//                     {place.title}
//                   </Select.Option>
//                 ))}
//               </Select>
//               <ErrorMessage name="place_id" component="div" className="error" />
//             </AntForm.Item>

//             <AntForm.Item label="Title">
//               <Field as={Input} name="title" className="input-design" />
//               <ErrorMessage name="title" component="div" className="error" />
//             </AntForm.Item>
//             <AntForm.Item label="Price">
//               <InputNumber className="input-design" value={values.price} onChange={(value) => setFieldValue("price", value)} />
//             </AntForm.Item>
//             <AntForm.Item label="Stock">
//               <InputNumber className="input-design" value={values.stock} onChange={(value) => setFieldValue("stock", value)} />
//             </AntForm.Item>
//             {/* <AntForm.Item label="Transfer Service"> */}
//               {/* <Field name="transferService">
//                 {({ field, form }: FieldProps) => (
//                   <Select
//                     {...field}
//                     className="w-full input-design"
//                     placeholder="Select Transfer Service"
//                     onChange={(value) => form.setFieldValue(field.name, value)}
//                   >
//                     {TransferServiceOptions.map((option) => (
//                       <Select.Option key={option} value={option}>
//                         {option}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 )}
//               </Field>
//             </AntForm.Item>
//              {/* Extra Amount (Shown if Transfer Service is EXTRA_COST) */}
//              {/* {values.transferService === "EXTRA_COST" && (
//               <AntForm.Item label="Extra Amount">
//                 <Field as={InputNumber} name="extraAmount" className="input-design" />
//               </AntForm.Item>
//             )} */} 
//              <AntForm.Item label="Transfer Service">
//               <Field name="transferService">
//                 {({ field, form }: FieldProps) => (
//                   <Select
//                     {...field}
//                     className="w-full input-design"
//                     placeholder="Select Transfer Service"
//                     onChange={(value) => form.setFieldValue(field.name, value)}
//                   >
//                     {TransferServiceOptions.map((option) => (
//                       <Select.Option key={option} value={option}>
//                         {option}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 )}
//               </Field>
//             </AntForm.Item>

//             {/* Extra Amount (Shown if Transfer Service is EXTRA_COST) */}
//             {values.transferService === "EXTRA_COST" && (
//               <AntForm.Item label="Extra Amount">
//                 <Field as={InputNumber} name="extraAmount" className="input-design" />
//               </AntForm.Item>
//             )}
//             <AntForm.Item label="Room Type">
//               <Field name="room_type">
//                 {({ field, form }: FieldProps) => (
//                   <Select
//                     {...field}
//                     className="w-full input-design"
//                     placeholder="Select Room Type"
//                     onChange={(value) => form.setFieldValue(field.name, value)}
//                   >
//                     {RoomTypeOptions.map((option) => (
//                       <Select.Option key={option} value={option}>
//                         {option}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 )}
//               </Field>
//             </AntForm.Item>
//             <AntForm.Item label="Is Discount Available?">
//               <Switch
//                 checked={values.isDiscountAvailable}
//                 onChange={(checked) => setFieldValue("isDiscountAvailable", checked)}
//               />
//             </AntForm.Item>

//             {/* Discount Field */}
//             {/* {values.isDiscountAvailable && (
//               <AntForm.Item label="Discount">
//                 <Field as={InputNumber} name="discount" className="input-design" />
//               </AntForm.Item>
//             )} */}
//   {/* {values.isDiscountAvailable && (
//               <AntForm.Item label="Discount">
//                 <Field 
//                   as={InputNumber} 
//                   name="discount" 
//                   className="input-design" 
//                   value={values.discount} 
//                   onChange={(value) => setFieldValue("discount", value)} 
//                 />
//               </AntForm.Item>
//             )} */}
// {values.isDiscountAvailable && (
//   <AntForm.Item label="Discount">
//     <Field name="discount">
//       {({ field, form }: FieldProps) => (
//         <InputNumber
//           {...field}
//           className="input-design"
//           value={field.value}
//           onChange={(value) => form.setFieldValue("discount", value || 0)}
//         />
//       )}
//     </Field>
//   </AntForm.Item>
// )}
//             <AntForm.Item label="Upload Images (Max 7)">
//               <Upload
//                 multiple
//                 listType="picture"
//                 beforeUpload={() => false}
//                 onChange={({ fileList }) => {
//                   if (fileList.length > 7) {
//                     message.error("You can only upload up to 7 images.");
//                     return;
//                   }
//                   setFieldValue(
//                     "images",
//                     fileList.map((file) => file.originFileObj as File)
//                   );
//                 }}
//               >
//                 <Button icon={<UploadOutlined />} title="Select Images" />
//               </Upload>
//               <ErrorMessage name="images" component="div" className="error" />
//             </AntForm.Item>

//             {/* Beds Section */}
  //           <FieldArray name="beds">
  //             {({ push, remove }) => (
  //               <>
  //                 {values.beds.map((_, index) => (
  //                   <div key={index} className="flex gap-3 items-center">
  //                     <AntForm.Item label="Bed Type">
  //                       <Field name={`beds.${index}.bed_type`}>
  //                         {({ field, form }: FieldProps) => (
  //                           <Select
  //                             {...field}
  //                             className="w-full input-design"
  //                             placeholder="Select Bed Type"
  //                             onChange={(value) => form.setFieldValue(field.name, value)}
  //                           >
  //                             {BedTypeOptions.map((option) => (
  //                               <Select.Option key={option} value={option}>
  //                                 {option}
  //                               </Select.Option>
  //                             ))}
  //                           </Select>
  //                         )}
  //                       </Field>
  //                     </AntForm.Item>
  //                     {/* <AntForm.Item label="Amount">
  //                       <Field as={InputNumber} name={`beds.${index}.amount`} className="input-design" />
  //                     </AntForm.Item> */}
  //                       <AntForm.Item label="Amount">
  //   <Field name={`beds.${index}.amount`}>
  //     {({ field, form }: FieldProps) => (
  //       <InputNumber
  //         {...field}
  //         className="input-design"
  //         value={field.value}
  //         onChange={(value) => form.setFieldValue(`beds.${index}.amount`, value || 1)}
  //       />
  //     )}
  //   </Field>
  // </AntForm.Item>
  //                     {values.beds.length > 1 && <button type="button" onClick={() => remove(index)}> - </button>}
  //                   </div>
  //                 ))}
  //                 <Button onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
  //               </>
  //             )}
  //           </FieldArray>

//             <Button type="submit" title="Submit" variant="filled" disabled={isSubmitting}></Button>
//           </Form>
//         </AntForm>
//       )}
//     </Formik>
//   );
// };

// export default RoomForm;
import { FC, useEffect, useState } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage, FieldProps } from "formik";
import { Select, Input, InputNumber, Upload, Switch, Form as AntForm, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "../../../components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelectors";
import { RootAppState } from "../../../redux/store";
import { getPlaces, getPlaceRooms, createRoom, getRoom, updateRoom } from "../../../redux/actions/places";
// import { Room } from "../../../lib/types/stays";
const TransferServiceOptions = ["NOT_INCLUDED", "INCLUDED", "EXTRA_COST"] as const;
const RoomTypeOptions = ["SINGLE", "DOUBLE", "SUITE", "DELUXE"] as const;
const BedTypeOptions = ["SINGLE_BED", "DOUBLE_BED", "QUEEN_BED", "KING_BED", "SOFA_BED"] as const;

const RoomForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const placeId = searchParams.get("placeId");

  const [initialValues, setInitialValues] = useState({
    place_id: placeId ? Number(placeId) : 0,
    title: "",
    price: 0,
    stock: 0,
    room_type: "",
    beds: [{ bed_type: "", amount: 1 }],
    isDiscountAvailable: false,
    discount: 0,
    transferService: "",
    extraAmount: 0,
    images: [] as File[],
  });

  // useEffect(() => {
  //   dispatch(getPlaces());

  //   if (roomId && placeId) {
  //     dispatch(getRoom(Number(placeId), Number(roomId))).then((room: Room | undefined) => {
  //       if (room) {
  //         setInitialValues({
  //           place_id: room.place_id,
  //           title: room.title,
  //           price: room.price,
  //           stock: room.stock,
  //           room_type: room.room_type,
  //           beds: room.beds || [{ bed_type: "", amount: 1 }],
  //           isDiscountAvailable: room.isDiscountAvailable,
  //           discount: room.discount || 0,
  //           transferService: room.transferService,
  //           extraAmount: room.extraAmount || 0,
  //           images: room.images || [], //  Ensures existing URLs are handled
  //         });
  //       }
  //     });
  //   }
  // }, [dispatch, placeId, roomId]);
  useEffect(() => {
    dispatch(getPlaces());
  
    if (roomId && placeId) {
      const fetchRoom = async () => {
        try {
          const room = await dispatch(getRoom({ placeId: Number(placeId), roomId: Number(roomId) })).unwrap()
          console.log(room,'roommmmmm')

          //  Unwrap ensures correct data
          if (room) {
            setInitialValues({
              place_id: room.place_id,
              title: room.title || "",
              price: room.price ?? 0,
              stock: room.stock ?? 0,
              room_type: room.room_type || "SINGLE",
              beds: room.beds?.length > 0 ? room.beds : [{ bed_type: "", amount: 1 }],
              isDiscountAvailable: room.isDiscountAvailable ?? false,
              discount: room.discount ?? 0,
              transferService: room.transferService || "NOT_INCLUDED",
              extraAmount: room.extraAmount ?? 0,
              // imageUrls: room.images || [],
              images: room.images,
            });
          }
        } catch (error) {
          console.error("Failed to fetch room:", error);
        }
      };
  
      fetchRoom();
    }
  }, [dispatch, placeId, roomId]);
  
  console.log(initialValues,'initialValues')
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      // onSubmit={async (values, { setSubmitting }) => {
      //   const formData = new FormData();
      //   formData.append("place_id", String(values.place_id));
      //   formData.append("title", values.title);
      //   formData.append("price", String(values.price));
      //   formData.append("stock", String(values.stock));
      //   formData.append("room_type", values.room_type);
      //   formData.append("transferService", values.transferService);
      //   formData.append("isDiscountAvailable", values.isDiscountAvailable ? "true" : "false");

      //   if (values.isDiscountAvailable && values.discount > 0) {
      //     formData.append("discount", String(values.discount));
      //   }

      //   values.beds.forEach((bed, index) => {
      //     formData.append(`beds[${index}][bed_type]`, bed.bed_type);
      //     formData.append(`beds[${index}][amount]`, String(bed.amount));
      //   });

      //   values.images.forEach((file) => {
      //     formData.append("images", file);
      //   });

      //   try {
      //     if (roomId) {
      //       await dispatch(
      //         updateRoom({
      //           roomId: Number(roomId), // ✅ Convert to number
      //           body: formData,         // ✅ Pass the request body
      //           files: [],              // ✅ If you have image files, pass them here
      //         })
      //       );
      //       // message.success("Room updated successfully!");
            
      //     // dispatch(getPlaceRooms(values.place_id));
      //     // navigate("/app/rooms");
      //     } else {
      //       await dispatch(createRoom(formData));
      //       message.success("Room created successfully!");
            
      //     dispatch(getPlaceRooms(values.place_id));
      //     navigate("/app/rooms");
      //     }

      //     // dispatch(getPlaceRooms(values.place_id));
      //     // navigate("/app/rooms");
      //   } catch (error) {
      //     message.error("Operation failed!");
      //     console.error("Error:", error);
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
      // onSubmit={async (values, { setSubmitting }) => {
      //   const formData = new FormData();
      //   formData.append("place_id", String(values.place_id));
      //   formData.append("title", values.title);
      //   formData.append("price", String(values.price));
      //   formData.append("stock", String(values.stock));
      //   formData.append("room_type", values.room_type);
      //   formData.append("transferService", values.transferService);
      //   formData.append("isDiscountAvailable", values.isDiscountAvailable ? "true" : "false");
      
      //   if (values.isDiscountAvailable && values.discount > 0) {
      //     formData.append("discount", String(values.discount));
      //   }
      
      //   values.beds.forEach((bed, index) => {
      //     formData.append(`beds[${index}][bed_type]`, bed.bed_type);
      //     formData.append(`beds[${index}][amount]`, String(bed.amount));
      //   });
      
      //   values.images.forEach((file) => {
      //     formData.append("images", file);
      //   });
      
      //   try {
      //     if (roomId) {
      //       console.log(formData,'formData')
      //       await dispatch(updateRoom({
      //         roomId: Number(roomId),
      //         body: formData,
      //         files: values.images,
      //       }));
      //       message.success("Room updated successfully!");
      //     } else {
      //       await dispatch(createRoom(formData));
      //       message.success("Room created successfully!");
      //     }
      
      //     dispatch(getPlaceRooms(values.place_id));
      //     navigate("/app/rooms");
      //   } catch (error) {
      //     message.error("Operation failed!");
      //     console.error("Error:", error);
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
      // onSubmit={async (values, { setSubmitting }) => {
      //   const formData = new FormData();
      //   formData.append("place_id", String(values.place_id));
      //   formData.append("title", values.title);
      //   formData.append("price", String(values.price));
      //   formData.append("stock", String(values.stock));
      //   formData.append("room_type", values.room_type);
      //   formData.append("transferService", values.transferService);
      //   formData.append("isDiscountAvailable", values.isDiscountAvailable ? "true" : "false");
      
      //   if (values.isDiscountAvailable && values.discount > 0) {
      //     formData.append("discount", String(values.discount));
      //   }
      
      //   // Append beds
      //   values.beds.forEach((bed, index) => {
      //     formData.append(`beds[${index}][bed_type]`, bed.bed_type);
      //     formData.append(`beds[${index}][amount]`, String(bed.amount));
      //   });
      
      //   // Append images
      //   values.images.forEach((file) => {
      //     formData.append("images", file);
      //   });
      
      //   // Log FormData content
      //   for (const [key, value] of formData.entries()) {
      //     console.log(`${key}: ${value}`);
      //   }
      
      //   try {
      //     if (roomId) {
      //       console.log(formData, "FormData being sent");
      //       await dispatch(updateRoom({
      //         roomId: Number(roomId),
      //         body: formData,
      //         files: values.images,
      //       }));
      //       message.success("Room updated successfully!");
      //     } else {
      //       await dispatch(createRoom(formData));
      //       message.success("Room created successfully!");
      //     }
      
      //     dispatch(getPlaceRooms(values.place_id));
      //     navigate("/app/rooms");
      //   } catch (error) {
      //     message.error("Operation failed!");
      //     console.error("Error:", error);
      //   } finally {
      //     setSubmitting(false);
      //   }
      // }}
      onSubmit={async (values, { setSubmitting }) => {
        const formData = new FormData();
      
        // Append fields to formData
        formData.append("place_id", String(values.place_id));
        formData.append("title", values.title);
        formData.append("price", String(values.price));
        formData.append("stock", String(values.stock));
        formData.append("room_type", values.room_type);
        formData.append("transferService", values.transferService);
        formData.append("isDiscountAvailable", values.isDiscountAvailable ? "true" : "false");
      
        if (values.isDiscountAvailable && values.discount > 0) {
          formData.append("discount", String(values.discount));
        }
      
        // Append beds data
        values.beds.forEach((bed, index) => {
          formData.append(`beds[${index}][bed_type]`, bed.bed_type);
          formData.append(`beds[${index}][amount]`, String(bed.amount));
        });
      
        // Append images (ensure these are file objects, not URLs)
        values.images.forEach((file) => {
          // Ensure `file` is a File object. This assumes `values.images` is an array of files (not URLs)
          formData.append("images", file);
        });
      
        // Log FormData content to check its contents
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      
        try {
          // Dispatch the appropriate action (update or create)
          if (roomId) {
            console.log("FormData being sent", formData);
            await dispatch(updateRoom({
              roomId: Number(roomId),
              body: formData,
              files: values.images,  // Pass files if needed
            }));
            message.success("Room updated successfully!");
          } else {
            await dispatch(createRoom(formData));
            message.success("Room created successfully!");
          }
      
          dispatch(getPlaceRooms(values.place_id));
          navigate("/app/rooms");
        } catch (error) {
          message.error("Operation failed!");
          console.error("Error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
      
    >
      {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
        <AntForm
          layout="vertical"
          onSubmitCapture={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h1 className="font-bold text-3xl mb-3 text-center">{roomId ? "Edit Room" : "Create a Room"}</h1>

          <Form>
            <AntForm.Item label="Select Property">
              <Select
                className="w-full"
                placeholder="Select a property"
                value={values.place_id}
                onChange={(value) => setFieldValue("place_id", value)}
              >
                {sellerPlaces.map((place) => (
                  <Select.Option key={place.id} value={place.id}>
                    {place.title}
                  </Select.Option>
                ))}
              </Select>
              <ErrorMessage name="place_id" component="div" className="error" />
            </AntForm.Item>

            <AntForm.Item label="Title">
              <Field as={Input} name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </AntForm.Item>

            <AntForm.Item label="Price">
              <InputNumber value={values.price} onChange={(value) => setFieldValue("price", value)} />
            </AntForm.Item>

            <AntForm.Item label="Stock">
              <InputNumber value={values.stock} onChange={(value) => setFieldValue("stock", value)} />
            </AntForm.Item>

            <AntForm.Item label="Transfer Service">
              <Field name="transferService">
                {({ field, form }: FieldProps) => (
                  <Select {...field} onChange={(value) => form.setFieldValue(field.name, value)}>
                    {TransferServiceOptions.map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Field>
            </AntForm.Item>

            {values.transferService === "EXTRA_COST" && (
              <AntForm.Item label="Extra Amount">
                <Field as={InputNumber} name="extraAmount" />
              </AntForm.Item>
            )}
              <AntForm.Item label="Room Type">
               <Field name="room_type">
                 {({ field, form }: FieldProps) => (
                   <Select
                     {...field}
                     className="w-full input-design"
                     placeholder="Select Room Type"
                     onChange={(value) => form.setFieldValue(field.name, value)}
                   >
                     {RoomTypeOptions.map((option) => (
                       <Select.Option key={option} value={option}>
                         {option}
                       </Select.Option>
                     ))}
                   </Select>
                 )}
               </Field>
             </AntForm.Item>

 {/* Discount Field */}
 <AntForm.Item label="Is Discount Available?">
               <Switch
                 checked={values.isDiscountAvailable}
                 onChange={(checked) => setFieldValue("isDiscountAvailable", checked)}
               />
             </AntForm.Item>
              {/* {values.isDiscountAvailable && (
               <AntForm.Item label="Discount">
                 <Field as={InputNumber} name="discount" className="input-design" />
               </AntForm.Item>
             )} */}
             
   {values.isDiscountAvailable && (
              <AntForm.Item label="Discount">
              <Field name="discount">
                {({ field, form }: FieldProps) => (
                  <InputNumber
                    {...field}
                    className="input-design"
                    value={field.value}
                    onChange={(value) => form.setFieldValue("discount", value || 0)}
                  />
                )}
              </Field>
              </AntForm.Item>
             )}
             
            <AntForm.Item label="Upload Images (Max 7)">
              <Upload
                multiple
                listType="picture"
                beforeUpload={() => false}
                onChange={({ fileList }) => {
                  if (fileList.length > 7) {
                    message.error("You can only upload up to 7 images.");
                    return;
                  }
                  setFieldValue("images", fileList.map((file) => file.originFileObj as File));
                }}
              >
                <Button icon={<UploadOutlined />} title="Select Images" />
              </Upload>
              <ErrorMessage name="images" component="div" className="error" />
            </AntForm.Item>

            {/* <FieldArray name="beds">
              {({ push, remove }) => (
                <>
                  {values.beds.map((_, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <AntForm.Item label="Bed Type">
                        <Field name={`beds.${index}.bed_type`}>
                          {({ field, form }: FieldProps) => (
                            <Select {...field} onChange={(value) => form.setFieldValue(field.name, value)}>
                              {BedTypeOptions.map((option) => (
                                <Select.Option key={option} value={option}>
                                  {option}
                                </Select.Option>
                              ))}
                            </Select>
                          )}
                        </Field>
                      </AntForm.Item>

                      {values.beds.length > 1 && <button type="button" onClick={() => remove(index)}> - </button>}
                    </div>
                  ))}
                  <Button onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
                </>
              )}
            </FieldArray> */}
              {/* <FieldArray name="beds">
              {({ push, remove }) => (
                <>
                  {values.beds.map((_, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <AntForm.Item label="Bed Type">
                        <Field name={`beds.${index}.bed_type`}>
                          {({ field, form }: FieldProps) => (
                            <Select
                              {...field}
                              className="w-full input-design"
                              placeholder="Select Bed Type"
                              onChange={(value) => form.setFieldValue(field.name, value)}
                            >
                              {BedTypeOptions.map((option) => (
                                <Select.Option key={option} value={option}>
                                  {option}
                                </Select.Option>
                              ))}
                            </Select>
                          )}
                        </Field>
                      </AntForm.Item>
                      {/* <AntForm.Item label="Amount">
                        <Field as={InputNumber} name={`beds.${index}.amount`} className="input-design" />
                      </AntForm.Item> */}
                        {/* <AntForm.Item label="Amount">
    <Field name={`beds.${index}.amount`}>
      {({ field, form }: FieldProps) => (
        <InputNumber
          {...field}
          className="input-design"
          value={field.value}
          onChange={(value) => form.setFieldValue(`beds.${index}.amount`, value || 1)}
        />
      )}
    </Field>
  </AntForm.Item>
                      {values.beds.length > 1 && <button type="button" onClick={() => remove(index)}> - </button>}
                    </div>
                  ))}
                  <Button onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
                </>
              )}
            </FieldArray> */} 
            <FieldArray name="beds">
  {({ push, remove }) => (
    <>
      {values.beds.map((bed, index) => (
        <div key={index} className="flex gap-3 items-center">
          <AntForm.Item label="Bed Type">
            <Field name={`beds.${index}.bed_type`}>
              {({ field, form }: FieldProps) => (
                <Select
                  {...field}
                  className="w-full input-design"
                  placeholder="Select Bed Type"
                  onChange={(value) => form.setFieldValue(`beds.${index}.bed_type`, value)}
                >
                  {BedTypeOptions.map((option) => (
                    <Select.Option key={option} value={option}>
                      {option}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Field>
          </AntForm.Item>
          <AntForm.Item label="Amount">
            <Field name={`beds.${index}.amount`}>
              {({ field, form }: FieldProps) => (
                <InputNumber
                  {...field}
                  className="input-design"
                  value={field.value}
                  onChange={(value) => form.setFieldValue(`beds.${index}.amount`, value || 1)}
                />
              )}
            </Field>
          </AntForm.Item>
          {values.beds.length > 1 && (
            <button type="button" onClick={() => remove(index)}>
              Remove Bed
            </button>
          )}
        </div>
      ))}
      <Button onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed" />
    </>
  )}
</FieldArray>


            <Button type="submit" title={roomId ? "Update Room" : "Submit"} disabled={isSubmitting} />
          </Form>
        </AntForm>
      )}
    </Formik>
  );
};

export default RoomForm;
