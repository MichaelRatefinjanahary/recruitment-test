<template>
  <div id="app">
    <section class="bg-whit py-8 lg:py-16">
      <Product />
      <div class="max-w-2xl mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Comments</h2>
        </div>
        <div class="mb-6">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea
              v-model="newCommentText"
              id="comment"
              rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
            >
            </textarea>
          </div>
          <Button label="Post comment" class="text-xs text-center" size="small" @click="addTopLevelComment" />
        </div>
        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          :max-nesting-level="MAX_NESTING_LEVEL"
          @added-reply="handleAddedReply"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Product from './components/Product.vue'
import Comment from './components/Comment.vue'
import { ref, onMounted } from 'vue'
import type { IComment } from '@/types'
import { createComment } from '@/utils'
import { MAX_NESTING_LEVEL } from '@/constants'

const comments = ref<IComment[]>([])
const newCommentText = ref<string>('')

onMounted(() => {
  // Retrieve comments stored in localstorage
  const items = localStorage.getItem('comments')
  if (items) {
    comments.value = JSON.parse(items) as IComment[]
  }
})

const addTopLevelComment = () => {
  if (newCommentText.value.trim() !== '') {
    comments.value.push(createComment(newCommentText.value, 0))
    newCommentText.value = ''

    // Add to localstorage
    localStorage.setItem('comments', JSON.stringify(comments.value))
  }
}

const handleAddedReply = () => {
  // Add to localstorage
  localStorage.setItem('comments', JSON.stringify(comments.value))
}
</script>
