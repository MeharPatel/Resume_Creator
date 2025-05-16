import React from 'react'

export const MainResumeData = ({formData, handleChange}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Personal Information
      </h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded-lg"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded-lg"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded-lg"
      />

    </div>
  );
}
