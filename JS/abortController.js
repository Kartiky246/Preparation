class ApiManager {
    constructor() {
        this.controllers = {}; // Store AbortControllers for ongoing requests
    }

    async fetchWithCancel(endpoint, options = {}) {
        // Cancel any ongoing request for the same endpoint
        if (this.controllers[endpoint]) {
            this.controllers[endpoint].abort();
        }

        // Create a new AbortController
        const controller = new AbortController();
        this.controllers[endpoint] = controller;

        try {
            // Add the AbortSignal to the fetch options
            const response = await fetch(endpoint, {
                ...options,
                signal: controller.signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            // Clear the controller once the request is successful
            delete this.controllers[endpoint];
            return await response.json();
        } catch (error) {
            if (error.name === "AbortError") {
                console.warn(`Request to ${endpoint} was cancelled.`);
            } else {
                throw error;
            }
        }
    }
}

// Example usage
const apiManager = new ApiManager();

// Simulate calling the same endpoint multiple times
(async () => {
    try {
        apiManager.fetchWithCancel("https://dummyjson.com/products");
        apiManager.fetchWithCancel("https://dummyjson.com/products"); // Cancels the first call
        const data = await apiManager.fetchWithCancel("https://dummyjson.com/products");
        console.log("Final call data:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
