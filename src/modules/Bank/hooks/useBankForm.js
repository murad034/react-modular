import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { createBank } from "@modules/Bank/services/bankService";

export const useBankForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    bank_code: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    address: "",
    active_status: 1,
    created_by: 1,
    updated_by: 1,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await createBank(formData);

      toaster.success({
        title: "Success",
        description: "Bank created successfully!",
        duration: 3000,
        isClosable: true,
      });

      setFormData({
        name: "",
        bank_code: "",
        email: "",
        phone: "",
        website: "",
        location: "",
        address: "",
        active_status: 1,
        created_by: 1,
        updated_by: 1,
      });
    } catch (error) {
      // console.error("Error creating bank:", error);

      //  if (error.response?.data?.errors) {
      //   setErrors(error.response.data.errors);
      // }

      if (error?.missingFields) {
        const missingFieldsArray = error.missingFields;
        const formattedErrors = missingFieldsArray.reduce((acc, field) => {
          acc[field] = ["This field is required."];
          return acc;
        }, {});
        setErrors(formattedErrors);
      }

      toaster.create({
        title: "Error",
        type: "error",
        description: error?.message || "Something went wrong!",
        duration: 3000,
        // isClosable: true,
        // placement: "top-end",
        overlap: true,
        // offsets: { left: "20px", top: "0px", right: "20px", bottom: "20px" },
      });
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, errors, handleChange, handleSubmit };
};
