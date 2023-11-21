import type { IComment } from '@/types'
import moment from 'moment'

export function createComment(comment: string, level: number): IComment {
  const now = new Date()
  return {
    id: now.getTime(),
    text: comment,
    level: level,
    replies: [],
    createdAt: now
  }
}

export function formatDate(date: Date): string {
  return moment(date).format('MMM. D, YYYY HH:mm')
}