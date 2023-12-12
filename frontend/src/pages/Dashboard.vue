<template>
    <div>
        <Navbar />


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
                <ul class="mt-20 space-y-2 font-medium">
                    <li class="text-white text-center">
                        <button class="bg-green-600 py-2 px-4 rounded-lg w-3/4 text-sm font-bold hover:bg-green-700">Created
                            Project</button>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

  
<script>
import Navbar from '../components/Navbar.vue';

export default {
    methods: {
        toggleSidebar() {
            const sidebar = document.getElementById("default-sidebar");
            const isOpen = sidebar.getAttribute("data-drawer-open") === "true";
            sidebar.setAttribute("data-drawer-open", String(!isOpen));
        },
    },
    beforeRouteEnter(to, from, next) {
        const userToken = localStorage.getItem("userToken");
        // LocalStorage'e kaydedilen token'ı kontrol ediyor. Token değeri boşsa register sayfasına yönlendiriyor.
        if (!userToken) {
            next("/register");
        }
        else {
            // Eğer token değeri doluysa bu sayfada devam etmesini söylüyoruz.
            next();
        }
    },
    components: { Navbar }
};
</script>
  