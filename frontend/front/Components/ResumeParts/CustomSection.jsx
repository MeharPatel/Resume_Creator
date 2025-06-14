import React, { useState } from 'react';
import { PlusIcon, PencilIcon, XIcon } from 'lucide-react';
import { toast } from 'sonner';

export const CustomSection = ({ formData, setFormData, handleChange }) => {
    const [currentSection, setCurrentSection] = useState({
        title: '',
        items: [],
    });
    const [currentItem, setCurrentItem] = useState('');
    const [editItemIndex, setEditItemIndex] = useState(null);
    const [editSectionIndex, setEditSectionIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentSection((prev) => ({ ...prev, [name]: value }));
    };

    const handleItemInputChange = (e) => {
        setCurrentItem(e.target.value);
    };

    const handleAddOrUpdateItem = () => {
        if (!currentItem.trim()) {
            toast.error('Item content is required');
            return;
        }
        setCurrentSection((prev) => {
            const newItems = [...prev.items];
            if (editItemIndex !== null) {
                newItems[editItemIndex] = currentItem.trim();
                toast.success('Item updated successfully');
            } else {
                newItems.push(currentItem.trim());
                toast.success('Item added successfully');
            }
            return { ...prev, items: newItems };
        });
        setCurrentItem('');
        setEditItemIndex(null);
    };

    const handleEditItem = (index) => {
        setCurrentItem(currentSection.items[index]);
        setEditItemIndex(index);
    };

    const handleDeleteItem = (index) => {
        setCurrentSection((prev) => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index),
        }));
        if (editItemIndex === index) {
            setCurrentItem('');
            setEditItemIndex(null);
        }
        toast.success('Item deleted successfully');
    };

    const handleSaveSection = () => {
                
        if (!currentSection.title.trim()) {
            toast.error("Section name is required");
            return;
        }
        const newSection = { title: currentSection.title.trim(), items: [...currentSection.items] }; 
        

        if (editSectionIndex !== null) {
            setFormData((prev) => ({
                ...prev,
                customSections: prev.customSections.map((section, i) => (i === editSectionIndex ? newSection : section)),
            }));
            toast.success("Section updated successfully");
            setEditSectionIndex(null);
            } else {
                setFormData((prev) => ({
                    ...prev,
                    customSections: [...prev.customSections, newSection],
                }));
                toast.success("Section added successfully");
            }
            setCurrentSection({ title: "", items: [] });
        };

    const handleDeleteSection = (index) => {
                setFormData((prev) => ({
                    ...prev,
                    customSections: prev.customSections.filter((_, i) => i !== index),
                }));
                if (editSectionIndex === index) {
                    setCurrentSection({ title: "", items: [] });
                    setEditSectionIndex(null);
                }
                toast.success("Section deleted successfully");
            };

    const handleEditSection = (index) => {
        setCurrentSection(formData.customSections[index]);
        setEditSectionIndex(index);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Custom Sections</h2>

            <div className="mb-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Section Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Section Title"
                        value={currentSection.title}
                        onChange={handleInputChange}
                        className="border p-2 mb-4 w-full rounded-lg"
                    />
                </div>

                <div>
                    <label htmlFor="item" className="block text-sm font-medium mb-1">
                        Item <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 mb-4">
                        <input
                            id="item"
                            type="text"
                            placeholder="Item Content"
                            value={currentItem}
                            onChange={handleItemInputChange}
                            className="border p-2 flex-1 rounded-lg"
                        />
                        <button
                            onClick={handleAddOrUpdateItem}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                            {editItemIndex !== null ? 'Update Item' : 'Add Item'}
                        </button>
                    </div>
                    <ul className="mb-4">
                        {currentSection.items.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm text-gray-600 mb-1 flex justify-between items-center"
                            >
                                <span>- {item}</span>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => handleEditItem(index)}
                                        className="h-5 w-5 text-gray-500 hover:text-resume-primary"
                                    >
                                        <PencilIcon className="h-3 w-3" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteItem(index)}
                                        className="h-5 w-5 text-gray-500 hover:text-red-500"
                                    >
                                        <XIcon className="h-3 w-3" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleSaveSection}
                    className="primary-button text-white px-4 py-2 rounded-md mb-4"
                >
                    <PlusIcon className="h-4 w-4 inline mr-1" /> { editSectionIndex !== null ? "Update Section" : "Add Section" } 
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {formData.customSections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl flex items-center justify-between w-full mb-2"
                    >
                        <div>
                            <h4 className="font-medium">{section.title}</h4>
                            <ul className="text-xs text-gray-600">
                                {section.items.map((item, i) => (
                                    <li key={i}>- {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-1">
                            <button
                            onClick={() => handleEditSection(index)}
                                className="h-7 w-7 text-gray-500 hover:text-resume-primary"
                            >
                                <PencilIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                                onClick={() => handleDeleteSection(index)}
                                className="h-7 w-7 text-gray-500 hover:text-red-500"
                            >
                                <XIcon className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}