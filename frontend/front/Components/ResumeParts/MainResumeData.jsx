import React from 'react'

export const MainResumeData = ({formData, handleChange}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
          </label>
          <input
            id='firstName'
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id='lastName'
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
          </div>
        </div>

        <div>
          <label htmlFor="profssional_title" className="block text-sm font-medium mb-1">
                  Professional Title <span className="text-red-500">*</span>
          </label>
          <input
            id='profssional_title'
            type="text"
            name="profssional_title"
            placeholder="Professional Title"
            value={formData.profssional_title}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>

        <div>
          <label htmlFor="professional_description" className="block text-sm font-medium mb-1">
                  Professional Description
          </label>
          <input
            id='professional_description'
            type="text"
            name="professional_description"
            placeholder="Professional Description"
            value={formData.professional_description}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
          </label>
          <input
            id='email'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
          </label>
          <input
            id='phone'
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
                Address
          </label>
          <input
            id='address'
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
          </label>
          <input
            id='city'
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">
                State
          </label>
          <input
            id='state'
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
        </div>
        <div>
          <label htmlFor="zip_code" className="block text-sm font-medium mb-1">
                  Zip Code
          </label>
          <input
            id='zip_code'
            type="text"
            name="zip_code"
            placeholder="Zip Code"
            value={formData.zip_code}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
          </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country
          </label>
          <input
            id='country'
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded-lg"
            />
          </div>
        </div>

    </div>
  );
}
