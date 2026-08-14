import React from 'react'

const PaginationButtons = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
        <>
            <div className="mt-5 flex items-center justify-center gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => (prev - 1))}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>



                <span> Page {currentPage} of {totalPages} </span>
                <button
                    onClick={() => setCurrentPage((prev) => (prev + 1))}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default PaginationButtons