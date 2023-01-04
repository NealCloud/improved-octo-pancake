<template>

    <div class="chat-window">
        <div v-if='error'>{{error}}</div>
        <div v-if="documents" class="messages" ref="messageRef">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">{{doc.createdAt + " ago"}}</span>
                <span class="name">{{doc.name}}</span>
                <span class="message">{{doc.message}}</span>
            </div>
        </div>
    </div>
   
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import getCollection from '../composables/getCollection'
import {formatDistanceToNow}  from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        
        const {documents, error} = getCollection("messages")
        const message = ref('')     


        const {user} = getUser()
       
       const formattedDocuments = computed(()=>{
        if(documents){
            return documents.value.map(doc =>{
                let time = formatDistanceToNow(doc.createdAt.toDate())
                return {...doc, createdAt: time}
            })
        }
       })
       const messageRef = ref(null)
       
       onUpdated(()=>{
        messageRef.value.scrollTop = messageRef.value.scrollHeight
       })
        return {message, user, error, documents, formattedDocuments, messageRef}
    }
}
</script>

<style>
    .chat-window{
        background: #fafafa;
        padding: 30px 20px;
    }
    .single{
        margin: 18px 0;
    }

    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }

    .name{
        font-weight: bold;
        margin-right: 6px;
    }

    .messages{
        max-height: 400px;
        overflow:auto;
    }
</style>