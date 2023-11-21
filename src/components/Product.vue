<template>
  <div class="bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lgbg-gray-300 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1488818114/photo/blank-white-t-shirt-mockup-flat-lay-front-and-back-isolated.jpg?s=1024x1024&w=is&k=20&c=1_0Dz77SjLB1R3aJFvNUZRTx1Z_mMsa0LouOfAdz31c="
              alt="Product Image"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <Toast />
            <div class="w-1/2 px-2">
              <Button class="w-full text-white py-2 px-4 font-bold" label="Add to cart" rounded @click="show()" />
            </div>
            <div class="w-1/2 px-2">
              <Button
                class="w-full py-2 px-4 font-bold"
                severity="secondary"
                label="Add to Wishlist"
                text
                rounded
                @click="show"
              />
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Product Name</h2>
          <p class="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id
            mauris malesuada tincidunt.
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Price:</span>
              <span class="text-gray-600">$29.99</span>
            </div>
            <div>
              <span class="font-bold text-gray-700">Availability:</span>
              <span class="text-gray-600">In Stock</span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700">Select Size:</span>
            <div class="flex items-center mt-2">
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                S
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                M
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                L
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                XL
              </button>
              <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                XXL
              </button>
            </div>
          </div>
          <div>
            <span class="font-bold text-gray-700">Product Description:</span>
            <p class="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id
              mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum
              pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer
              ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
              tincidunt mi consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Not yet available', life: 3000 })
}
</script>
