<template>
    <div class="grid h-screen grid-cols-2">
        <div class="m-auto">
        </div>

        <div class="">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-7xl font-bold leading-tight tracking-tight text-gray-900 text-center ">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-[#D9D9D9]   "
                                    placeholder="username">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-[#D9D9D9]   ">
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
                                class="w-full text-white bg-primary-600 hover:bg-blue-700 bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                                in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#"
                                    class="font-medium hover:underline text-[#6C5DC9]">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  