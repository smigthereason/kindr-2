import React, { useState } from 'react';
import axios from 'axios';
import worldImage from "../../assets/world2.jpg"; // Assuming you want to keep the same background image

const AddCharity: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        amount: ''
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [documentFile, setDocumentFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (e.target.name === 'image') {
            setImageFile(file || null);
        } else if (e.target.name === 'document') {
            setDocumentFile(file || null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const submissionData = new FormData();
        submissionData.append('first_name', formData.first_name);
        submissionData.append('last_name', formData.last_name);
        submissionData.append('email', formData.email);
        submissionData.append('amount', formData.amount);

        if (imageFile) {
            submissionData.append('image', imageFile);
        }
        if (documentFile) {
            submissionData.append('document', documentFile);
        }

        try {
            const response = await axios.post('https://backend-kindr.onrender.com/charity', submissionData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                setSuccess('Charity added successfully!');
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    amount: ''
                });
                setImageFile(null);
                setDocumentFile(null);
            }
        } catch (error: any) {
            setError('Failed to add charity. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="charity-form-page relative min-h-screen mt-8 w-4/6 ml-[350px]"
            style={{ backgroundImage: `url(${worldImage})` }}>
            <h2 className="text-4xl font-bold mb-4">Add Charity</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="first_name" className="block font-semibold text-2xl">First Name:</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Enter first name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block font-semibold text-2xl">Last Name:</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Enter last name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-2xl">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="block font-semibold text-2xl">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Enter amount"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block font-semibold text-2xl">Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} className="w-full p-2" required />
                </div>
                <div>
                    <label htmlFor="document" className="block font-semibold text-2xl">Document:</label>
                    <input type="file" id="document" name="document" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2" required />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && <div className="text-green-500 mt-2">{success}</div>}
            </form>
        </div>
    );
};

export default AddCharity;
