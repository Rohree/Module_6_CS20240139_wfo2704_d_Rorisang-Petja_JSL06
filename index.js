// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryEl = document.createElement("h3");
        // Set the text content of the category element to the category name
        categoryEl.textContent = category;
        // Append the category element to the menu container
        menuEl.appendChild(categoryEl);

        // Create an element to represent a list of items
        const itemListEl = document.createElement("ul");
        // Append the list of items element to the menu container
        menuEl.appendChild(itemListEl);

        // Loop through the items in the category and create list items
        menu[category].forEach((item) => {
            // Create a list item element
            const itemEl = document.createElement("li");
            // Set the text content of the list item element to the item name
            itemEl.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemEl.addEventListener("click", () => {
                addToOrder(item);
            });

            // Append the list item to the list of items
            itemListEl.appendChild(itemEl);
        });
    }
}

// Function to add an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsEl = document.getElementById("order-items");
    const orderTotalEl = document.getElementById("order-total");

    // Create a list item for the order
    const orderItemEl = document.createElement("li");
    // Set the text content of the list item to the item name
    orderItemEl.textContent = itemName;
    // Append the list item to the order items list
    orderItemsEl.appendChild(orderItemEl);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalEl.textContent) || 0;
    const newTotal = currentTotal + 120; 
    // Update the text content of the order total element with the new total
    orderTotalEl.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
