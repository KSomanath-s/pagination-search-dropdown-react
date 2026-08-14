# 🍎 React Fruit Search & Pagination

A simple React project that demonstrates **search/filter functionality combined with pagination**.

The application displays a list of fruits, allows users to search for a specific fruit, and automatically updates the pagination based on the filtered results.

## 🚀 Features

* 🔍 Search fruits by name
* 📄 Pagination with configurable items per page
* 🔄 Automatically reset to page 1 when searching
* 📊 Dynamic total page calculation
* ❌ Display a message when no matching fruit is found
* ⚛️ Built using React Hooks
* 🎨 Styled using Tailwind CSS

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* React Hooks (`useState`)
* Tailwind CSS
* Vite

## 📂 Project Structure

```text
src/
├── components/
│   └── PaginationButtons.jsx
│
├── Pagination.jsx
└── App.jsx
```

## ⚙️ How It Works

### 1. Search / Filter

The fruit list is filtered based on the user's search term.

The search is **case-insensitive**, so searching for:

```text
apple
```

will also find:

```text
Apple
```

### 2. Pagination

The application displays **4 fruits per page**.

The current page determines which items should be displayed.

```text
startIndex = (currentPage - 1) × itemsPerPage
endIndex = startIndex + itemsPerPage
```

### 3. Filter Before Pagination

The important flow of the application is:

```text
Original Fruits
      ↓
Filter/Search
      ↓
Filtered Fruits
      ↓
Calculate Total Pages
      ↓
Slice Current Page Items
      ↓
Display Results
```

This ensures pagination works correctly with search results.

### 4. Reset Page After Search

Whenever the search input changes, the current page is reset to page 1.

This prevents situations where a user searches while currently on a page that no longer exists in the filtered results.

## 📌 Example

Suppose there are 20 fruits and:

```text
Items per page = 4
```

Then:

```text
20 ÷ 4 = 5 pages
```

If the user searches and only 6 fruits match:

```text
6 ÷ 4 = 2 pages
```

The pagination automatically changes from **5 pages to 2 pages**.

## 💻 Installation

Clone the repository:

```bash
git clone <https://github.com/KSomanath-s/pagination-search-dropdown-react>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

## 📚 What I Learned

This project helped me practice:

* React `useState`
* Controlled inputs
* JavaScript `filter()`
* JavaScript `slice()`
* Dynamic pagination
* Search functionality
* Conditional rendering
* Passing props between components
* Handling page state
* Combining search and pagination

## 🔮 Future Improvements

Possible improvements include:

* Add Previous/Next button validation
* Disable Previous button on the first page
* Disable Next button on the last page
* Add numbered pagination buttons
* Add sorting functionality
* Fetch fruit data from an API
* Add loading and error states
* Make the fruit list dynamic

## 👨‍💻 Author

**Somanath Kakade**

Frontend / React Developer

---

⭐ If you find this project useful, consider giving the repository a star!
