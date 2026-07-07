// Predefined list of suggestions
const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yellow watermelon",
    "Zucchini"
  ];
  
  const searchBar = document.getElementById("search-bar");
  const suggestionsDropdown = document.getElementById("suggestions-dropdown");
  
  // Debounce function to limit API calls
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Function to filter suggestions
  function filterSuggestions(query) {
    return suggestions.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Function to display suggestions
  function displaySuggestions(filteredSuggestions) {
    if (filteredSuggestions.length > 0) {
      suggestionsDropdown.innerHTML = filteredSuggestions
        .map(
          (item) =>
            `<div class="suggestion-item">${highlightMatch(item, searchBar.value)}</div>`
        )
        .join("");
      suggestionsDropdown.style.display = "block";
    } else {
      suggestionsDropdown.style.display = "none";
    }
  }
  
  // Function to highlight matching text
  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
  }
  
  // Event listener for input
  searchBar.addEventListener(
    "input",
    debounce(() => {
      const query = searchBar.value.trim();
      if (query) {
        const filteredSuggestions = filterSuggestions(query);
        displaySuggestions(filteredSuggestions);
      } else {
        suggestionsDropdown.style.display = "none";
      }
    }, 300)
  );
  
  // Event listener for arrow key navigation
  searchBar.addEventListener("keydown", (e) => {
    const suggestionItems = suggestionsDropdown.querySelectorAll(".suggestion-item");
    let currentIndex = Array.from(suggestionItems).findIndex((item) =>
      item.classList.contains("active")
    );
  
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex < suggestionItems.length - 1) {
        if (currentIndex !== -1) {
          suggestionItems[currentIndex].classList.remove("active");
        }
        suggestionItems[currentIndex + 1].classList.add("active");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex > 0) {
        suggestionItems[currentIndex].classList.remove("active");
        suggestionItems[currentIndex - 1].classList.add("active");
      }
    } else if (e.key === "Enter") {
      const activeItem = suggestionsDropdown.querySelector(".suggestion-item.active");
      if (activeItem) {
        searchBar.value = activeItem.textContent;
        suggestionsDropdown.style.display = "none";
      }
    }
  });
  
  // Event listener for clicking on suggestions
  suggestionsDropdown.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion-item")) {
      searchBar.value = e.target.textContent;
      suggestionsDropdown.style.display = "none";
    }
  });