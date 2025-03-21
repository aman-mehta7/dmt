import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { Form as AntForm, Input, InputNumber, Switch } from "antd";
import Button from "../../shared/Button";

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

const RoomForm = () => {
  return (
    <Formik
      initialValues={{
        place_id: 0,
        title: "",
        price: 0,
        stock: 0,
        room_type: "",
        beds: [{ bed_type: "", amount: 1 }],
        isDiscountAvailable: false,
        discount: 0,
        transferService: "",
        extraAmount: 0,
      }}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <AntForm layout="vertical" onFinish={() => {}}>
          <h1 className="font-bold text-3xl mb-3 text-center">Create a Room</h1>
          <Form>
            <AntForm.Item className="error mb-2" label="Place ID" help={<ErrorMessage name="place_id" component="div" />}>
              <Field className="input-design" as={InputNumber} name="place_id" onChange={(value: number | null) => setFieldValue("place_id", value ?? 0)} />
            </AntForm.Item>

            <AntForm.Item label="Title" help={<ErrorMessage name="title" component="div" className="error" />}>
              <Field as={Input} name="title" className="input-design" />
            </AntForm.Item>

            <AntForm.Item label="Price" help={<ErrorMessage name="price" component="div" className="error" />}>
              <Field className="input-design" as={InputNumber} name="price" onChange={(value: number | null) => setFieldValue("price", value ?? 0)} />
            </AntForm.Item>

            <AntForm.Item label="Stock" help={<ErrorMessage name="stock" component="div" className="error" />}>
              <Field className="input-design" as={InputNumber} name="stock" onChange={(value: number | null) => setFieldValue("stock", value ?? 0)} />
            </AntForm.Item>

            <AntForm.Item label="Room Type" help={<ErrorMessage name="room_type" component="div" className="error" />}>
              <Field className="input-design" as={Input} name="room_type" />
            </AntForm.Item>

            <FieldArray name="beds">
              {({ push, remove }) => (
                <>
                  {values.beds.map((_, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <AntForm.Item className="w-full error" label="Bed Type" help={<ErrorMessage name={`beds.${index}.bed_type`} component="div" />}>
                        <Field className="input-design" as={Input} name={`beds.${index}.bed_type`} />
                      </AntForm.Item>
                      <AntForm.Item className="error w-full" label="Amount" help={<ErrorMessage name={`beds.${index}.amount`} component="div"  />}>
                        <Field
                        className="input-design"
                          as={InputNumber}
                          name={`beds.${index}.amount`}
                          onChange={(value: number | null) => setFieldValue(`beds.${index}.amount`, value ?? 1)}
                        />
                      </AntForm.Item>
                      {values.beds.length > 1 && (
                        <button className="border p-3 border-danger text-danger rounded-md" onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                    </div>
                  ))}
                  <Button className="mb-2" onClick={() => push({ bed_type: "", amount: 1 })} title="+ Add Bed"></Button>
                </>
              )}
            </FieldArray>

            <AntForm.Item label="Discount Available">
              <Switch checked={values.isDiscountAvailable} onChange={(checked) => setFieldValue("isDiscountAvailable", checked)} />
            </AntForm.Item>

            {values.isDiscountAvailable && (
              <AntForm.Item label="Discount" help={<ErrorMessage name="discount" component="div" className="error" />}>
                <Field className="input-design" as={InputNumber} name="discount" onChange={(value: number | null) => setFieldValue("discount", value ?? 0)} />
              </AntForm.Item>
            )}

            <AntForm.Item label="Transfer Service" help={<ErrorMessage name="transferService" component="div" className="error" />}>
              <Field className="input-design" as={Input} name="transferService" />
            </AntForm.Item>

            <AntForm.Item label="Extra Amount" help={<ErrorMessage name="extraAmount" component="div" className="error" />}>
              <Field className="input-design" as={InputNumber} name="extraAmount" onChange={(value: number | null) => setFieldValue("extraAmount", value ?? 0)} />
            </AntForm.Item>

            <Button type="submit" title="Submit" variant="filled">
            </Button>
          </Form>
        </AntForm>
      )}
    </Formik>
  );
};

export default RoomForm;
