import { Formik, Form as FormikForm, Field } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { Checkbox } from "../../../../components/Checkbox";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Zolulogo } from "../../../../components/Zolulogo";
import { useEmployeeCreds } from "../../../../hooks/useEmployeeCreds";
import { useTransactionStore } from "../../../../stores/TransactionStore";
import { employeeLogin } from "../../../Login/Form";

export const SuspendModal = () => {
  const initialValues: employeeLogin = { fullName: "", pin: "" };
  const [showPassword, setShowPassword] = useState(false);
  const transactionStore = useTransactionStore();
  const employee = useEmployeeCreds();

  const doAuthenticate = (values: employeeLogin) => {
    if (employee.data?.fullName != values.fullName)
      toast.error("Invalid full name");
    else if (employee.data?.pin != parseInt(values.pin))
      toast.error("Invalid pin");
    else transactionStore.setShouldShowSusModal(false);
  };

  return (
    <Modal isOpen={transactionStore.shouldShowSusModal} className="">
      <div className="border-2rounded-lg py-8 px-6 flex">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="logo">
            <Zolulogo />
          </div>
          <span className="text-lg font-bold">Unlock</span>
          <div className="flex flex-col gap-[10px] mt-9">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values: employeeLogin) => {
                doAuthenticate(values);
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm>
                  <div className="flex flex-col gap-[10px]">
                    <Field
                      as={Input}
                      name="fullName"
                      placeholder="Full Name"
                      type="text"
                      className="w-96"
                    />
                    <Field
                      as={Input}
                      name="pin"
                      placeholder="Pin"
                      type={showPassword ? "text" : "password"}
                      className="w-96"
                    />
                    <div className="flex gap-2 items-center">
                      <Checkbox
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <span>Show Password</span>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full pt-[10px] pb-[10px] mt-9"
                    isLoading={false}
                  >
                    Submit
                  </Button>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
};
