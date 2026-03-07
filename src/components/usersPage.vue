<script setup>
import { onMounted, ref } from 'vue'
import { userStore } from 'src/stores/user'

const store = userStore()
const name = ref('')
const email = ref('')

onMounted(() => {
  store.fetchUsers()
})

const saveUser = async () => {
  await store.createUsers({ name: name.value, email: email.value })
  name.value = ''
  email.value = ''
}
</script>

<template>
  <div class="q-pa-md">
    <h1>Find Prize user</h1>
    <q-input v-model="name" label="Name" />
    <q-input v-model="email" label="Email" class="q-mt-sm" />

    <q-btn @click="saveUser">Save User</q-btn>

    <div class="q-mt-lg">
      <h2>Users List</h2>
      <div v-for="user in store.users" :key="user.id" class="q-mt-sm">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
