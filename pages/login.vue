<template>
  <div>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input id="email" v-model="email" type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input id="password" v-model="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="login">
        Log In
      </button>

      <!-- Success Message -->
      <div v-if="successMsg">
        <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
          <span class="font-medium">Well done! </span>{{ successMsg }}
        </p>
      </div>

      <!-- Error message -->
      <div v-if="errorMsg">
        <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
          <span class="font-medium">Login failed: </span>{{ errorMsg }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const email = useState(() => null)
const password = useState(() => null)
const successMsg = useState(() => false)
const errorMsg = useState(() => false)

if (user.value) {
  await navigateTo('/')
}

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    successMsg.value = null
    errorMsg.value = error.message
    return
  }

  errorMsg.value = null
  successMsg.value = 'Redirecting...'
  setTimeout(async () => {
    successMsg.value = null
    await navigateTo('/')
  }, 2000)
}
</script>
