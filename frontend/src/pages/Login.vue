<template>
    <div class="bg-[#DFDFDF] grid h-screen grid-cols-2">
        <img class="w-10/12  md:block hidden  m-auto" src="../assets/images/login-image.png" />
        <div class="col-span-2 md:col-span-1">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-[#DFDFDF] md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold leading-tight tracking-tight text-[#6C5DC9] text-center">
                            Login
                        </h1>
                        <form @submit="handleSubmit" class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input :value="username" @input="handleUsername"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-[#e4e2e2]   "
                                    placeholder="username">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input :value="password" @input="handlePassword" type="password" name="password"
                                    id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-[#e4e2e2]   ">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                    </div>
                                </div>
                                <a href="#"
                                    class="text-sm font-medium text-primary-600 hover:underline text-[#6C5DC9]">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-[#6D5DCA] hover:bg-[#6354b8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                                in</button>
                            <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/re"
                                    class="font-medium hover:underline text-[#6C5DC9]">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        handleUsername(e) {
            this.username = e.target.value;
        },
        handlePassword(e) {
            this.password = e.target.value;
        },
        handleSubmit(e) {
            e.preventDefault();
            console.log("submit oldu")
        }
    },
}
</script>


<style></style>