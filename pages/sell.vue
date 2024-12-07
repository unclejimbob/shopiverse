<template>
  <div>
    <br><br>
    <form class="max-w-lg  mx-auto">
      <div class="mb-5">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
        <input id="small-input" v-model="productTitle" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <div class="mb-5">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category</label>
        <input id="small-input" v-model="productCategory" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <div class="mb-5">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
        <input id="small-input" v-model="productPrice" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>

      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
      <textarea id="message" v-model="productDescription" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your product description here..." />

      <br>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload a product image</label>
      <input id="user_avatar" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file" @change="handleFileChange">
      <div id="user_avatar_help" class="mt-1 text-sm text-gray-500 dark:text-gray-300">
        A good product image will help you sell more
      </div>

      <!-- Success Message -->
      <div v-if="imageUploadSuccessMsg">
        <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
          <span class="font-medium">Well done! </span>{{ imageUploadSuccessMsg }}
        </p>
      </div>

      <!-- Error message -->
      <div v-if="imageUploadErrorMsg">
        <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
          <span class="font-medium">There was a problem! </span>{{ imageUploadErrorMsg }}
        </p>
      </div>

      <br>

      <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" @click="uploadImage">
        Upload Image
      </button>

      <br><br>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>

      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="createProduct">
        Submit Product
      </button>

      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" @click="clearEveryThing">
        Clear Everything
      </button>

      <!-- Success Message -->
      <div v-if="productCreationSuccessMsg">
        <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">
          <span class="font-medium">Well done! </span>{{ productCreationSuccessMsg }}
        </p>
      </div>

      <!-- Error message -->
      <div v-if="productCreationErrorMsg">
        <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
          <span class="font-medium">There was a problem! </span>{{ productCreationErrorMsg }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

if (!user.value) await navigateTo('/login')

const productTitle = useState(() => null)
const productDescription = useState(() => null)
const productPrice = useState(() => null)
const productCategory = useState(() => null)
const productImage = useState(() => null)
const productImageUrl = useState(() => null)
const imageUploadSuccessMsg = useState(() => null)
const imageUploadErrorMsg = useState(() => null)
const productCreationSuccessMsg = useState(() => null)
const productCreationErrorMsg = useState(() => null)

const clearEveryThing = () => {
  productTitle.value = null
  productDescription.value = null
  productPrice.value = null
  productCategory.value = null
  productImageUrl.value = null
  imageUploadSuccessMsg.value = null
  imageUploadErrorMsg.value = null
  productCreationErrorMsg.value = null
  productCreationSuccessMsg.value = null
}

const handleFileChange = (event) => {
  productImage.value = event.target.files[0]
}

const uploadImage = async () => {
  if (!productImage.value) {
    if (import.meta.client) {
      alert('Please select an image to upload')
    }
    return
  }

  const image = productImage.value
  try {
    const { data, error } = await supabase.storage.from('images').upload(`public/${image.name}`, image, {
      cacheControl: '3600',
      upsert: false,
    })

    if (data) {
      imageUploadSuccessMsg.value = 'Image Uploaded'
      const { data } = await supabase.storage.from('images').getPublicUrl(`public/${image.name}`)
      productImageUrl.value = data.publicUrl
    }
  }
  catch (err) {
    imageUploadErrorMsg.value = err.message
  }
}

const createProduct = async () => {
  const { data: product, error } = await useFetch('/api/products/create-new-product', {
    query: {
      title: productTitle,
      description: productDescription,
      image: productImageUrl,
      category: productCategory,
      price: productPrice,
    },
  })

  if (error.value) {
    productCreationErrorMsg.value = 'An error happened, try again...'
    return
  }

  productCreationSuccessMsg.value = 'Product created successfully, Redirecting...'
  const productID = product.value.id
  setTimeout(async () => {
    await navigateTo(`/product-${productID}`)
  }, 2000)
}
</script>
