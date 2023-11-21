<template>
  <div class="comments p-6 text-base bg-white rounded-lg border-t border-gray-200">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
          <img class="mr-2 w-6 h-6 rounded-full" src="@/assets/user_icon.png" alt="Anonymous user"/>Anonymous
        </p>
        <p class="text-sm text-gray-600">
          <span>{{ formatDate(comment.createdAt) }}</span>
        </p>
      </div>
    </div>
    <p class="text-gray-500">{{ comment.text }}</p>
    <form v-if="canReply" class="flex items-center mt-4 space-x-4" @submit.prevent="addReply">
      <input v-model="replyText" class="w-full" placeholder="Reply..." />
      <Button type="button" class="text-xs text-center" label="Reply" size="small" @click="addReply" />
    </form>
  </div>
  <div
    v-if="comment.replies.length > 0 && comment.level < maxNestingLevel"
    class="replies ml-3 text-base bg-white rounded-lg"
  >
    <Comment
      v-for="reply in comment.replies"
      :key="reply.id"
      :comment="reply"
      :max-nesting-level="maxNestingLevel"
      @added-reply="handleAddedReply"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IComment } from '@/types'
import { createComment, formatDate } from '@/utils'

const emit = defineEmits(['addedReply'])

const props = defineProps<{
  comment: IComment
  maxNestingLevel: number
}>()

const replyText = ref<string>('')
const canReply = props.comment.level < props.maxNestingLevel

const addReply = () => {
  if (replyText.value.trim() !== '') {
    props.comment.replies.push(createComment(replyText.value, props.comment.level + 1))
    replyText.value = ''

    // Emit event to parent
    emit('addedReply')
  }
}

const handleAddedReply = () => {
  // Emit event to parent
  emit('addedReply')
}
</script>
