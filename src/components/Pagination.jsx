import React, { useState } from 'react'
import PaginationButtons from './PaginationButtons';

const Pagination = () => {

    const fruits = [
        "Apple", "Banana", "Mango", "Orange",
        "Grapes", "Papaya", "Kiwi", "Guava",
        "Litchi", "Cherry", "Peach", "Plum",
        "SugarCane", "Watermelon", "sweetPotato", "Stabery",
        "CusterdApple", "Sweet Orange", "Lemon", "Cocunet Water"
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsPerPages, setItemsPerPages] = useState(4);

    // const itemsPerPage = 4;
    const startIndex = (currentPage - 1) * itemsPerPages;
    const endIndex = startIndex + itemsPerPages;


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1)
    }
    const filteredFruits = fruits.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const currentItems = filteredFruits.slice(startIndex, endIndex)

    const totalPages = Math.ceil(filteredFruits.length / itemsPerPages);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPages(Number(e.target.value));
        setCurrentPage(1);
    }



    return (
        <>
            <div className='max-w-md mx-auto text-center flex flex-col sm:flex-row gap-4 my-6 justify-between items-center'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search fruits..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Per page:</label>
                    <select
                        value={itemsPerPages}
                        onChange={handleItemsPerPageChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                    </select>
                </div>

            </div>
            <div className='max-w-lg mx-auto text-center'>
                {
                    filteredFruits.length > 0 ? (
                        currentItems.map((fruit, index) => {
                            return (
                                <div key={index}>
                                    <p className='text-red-500 font-bold py-2'>{fruit}</p>
                                </div>
                            )
                        })
                    ) : (
                        <>
                            <p className="text-gray-400 text-center py-6">No matching results found</p>
                        </>
                    )

                }
            </div>
            {
                currentItems.length > 0 && (
                    <PaginationButtons
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                )
            }

        </>
    )
}

export default Pagination