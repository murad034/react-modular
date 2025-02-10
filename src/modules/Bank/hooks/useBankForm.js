import { useState } from "react";
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
        active_status: "1",
        created_by: 1,
        updated_by: 1
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (value) => {
        setFormData((prev) => ({ ...prev, active_status: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await createBank(formData);
            console.log("Bank Created:", response);
            alert("Bank created successfully!");
            setFormData({
                name: "",
                bank_code: "",
                email: "",
                phone: "",
                website: "",
                location: "",
                address: "",
                active_status: "1",
                created_by: 1,
                updated_by: 1
            });
        } catch (err) {
            console.error("Error creating bank:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { formData, loading, error, handleChange, handleRadioChange, handleSubmit };
};
