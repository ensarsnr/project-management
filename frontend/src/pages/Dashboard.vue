<template>
    <div>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <h1 class="text-white text-2xl">Project Management</h1>
                    </div>
                    <div class="">
                        <ul class="flex justify-between">
                            <li>
                                <button
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            @click="toggleSidebar">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>
        <aside id="default-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">

                </ul>
            </div>
        </aside>


    </div>
</template>

  
<script>
export default {
    methods: {
        toggleSidebar() {
            const sidebar = document.getElementById("default-sidebar");
            const isOpen = sidebar.getAttribute("data-drawer-open") === "true";
            sidebar.setAttribute("data-drawer-open", String(!isOpen));
        },
        signOut() {
            // Implement sign-out logic here
        },
    },
    beforeRouteEnter(to, from, next) {
        // Check if the user token exists in local storage
        const userToken = localStorage.getItem("userToken");

        // If the token does not exist, redirect to the register page
        if (!userToken) {
            next("/register");
        } else {
            // Continue with the navigation
            next();
        }
    },
};
</script>
  