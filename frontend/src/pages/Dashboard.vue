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
                        <button @click="openModal"
                            class="bg-green-600 py-2 px-4 rounded-lg w-3/4 text-sm font-bold hover:bg-green-700">Created
                            Project</button>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="pt-10 sm:pt-20 sm:pl-80 w-full sm:w-11/12">
            <!-- Card 1 -->
            <a v-for="project in projects" :key="project._id"
                class="mb-4 rounded-sm w-2/2 grid grid-cols-12 bg-white shadow p-3 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
                href="#">

                <!-- Icon -->
                <div class="col-span-12 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="#2563eb">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                </div>

                <!-- Title -->
                <div class="col-span-10 xl:-ml-5">
                    <p class="text-blue-600 font-semibold"> {{ project.name }}</p>
                </div>

                <div class="col-span-1">
                    <button class=" w-full   rounded-lg py-2 bg-red-500 text-white font-bold hover:bg-red-600">X</button>
                </div>

                <!-- Description -->
                <div class="md:col-start-2 col-span-11 xl:-ml-5">
                    <p class="text-sm text-gray-800 font-light"> {{ project.desc }} </p>
                </div>


            </a>

        </div>
    </div>c
    <Modal />
</template>

  
<script>
import Modal from '../components/Modal.vue';
import Navbar from '../components/Navbar.vue';
import services from '../services';

export default {

    data() {
        return {
            projects: [],
        }
    },
    mounted() {
        this.getProjects();
    },

    methods: {
        toggleSidebar() {
            const sidebar = document.getElementById("default-sidebar");
            const isOpen = sidebar.getAttribute("data-drawer-open") === "true";
            sidebar.setAttribute("data-drawer-open", String(!isOpen));
        },
        openModal() {
            const modal = document.getElementById("authentication-modal");
            modal.classList.remove("hidden");
            modal.classList.add("flex")
            document.body.classList.add("overflow-hidden");
        },
        async getProjects() {
            try {
                const response = await services.getProjects();
                this.projects = response.data.projects;
                console.log(response.data.projects);
            } catch (error) {
                console.log("Fetch error: ", error);
            }
        }
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
    components: { Navbar, Modal }
};
</script>
  


<style>
body {
    background-color: rgb(61, 58, 58);
}
</style>