<template>
  <q-card>
    <div class="col-12 col-sm-6 col-md-4">
      <q-card-section>
        <div class="q-pa-sm text-h6" style="max-width: 400px">
          លទ្ឋផល
          <span style="color: darkred">ឆ្នោតខ្មែរ</span>
          សម្រាប់ថ្ងៃទី
        </div>
        <div class="absolute-top-right q-ma-md q-pa-md">
          <q-spinner-radio color="red" size="2em" />
        </div>

        <div class="q-pa-sm" style="max-width: 400px">
          <q-input filled v-model="selectedDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" style="color: darkred">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="selectedDate" @update:model-value="loadData">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="q-gutter-y-md q-pa-sm" style="max-width: 400px">
          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="mails" icon="mails" label="ទាំងអស់" />
            <q-tab name="alarm1" icon="alarms" label="ខ្មែរ 10:35" />
            <q-tab name="alarm2" icon="alarms" label="ខ្មែរ 13:00" />
          </q-tabs>
          <q-tabs v-model="tab" narrow-indicator dense class="text-primary">
            <q-tab name="alarm3" icon="alarms" label="ខ្មែរ 15:45" />
            <q-tab name="alarm4" icon="alarms" label="ខ្មែរ 18:00" />
            <q-tab name="alarm5" icon="alarms" label="ខ្មែរ 19:45" />
          </q-tabs>
        </div>

        <div class="q-pa-sm" style="max-width: 400px">
          <q-markup-table
            flat
            bordered
            v-for="time in times.filter((x) => x.code == tab || tab == 'all')"
            :key="time.id"
          >
            <thead class="bg-primary q-pa-sm text-h6">
              <tr>
                <th style="color: white" colspan="3">ឆ្នោតខ្មែរ</th>
                <th style="color: white">{{ time.name }}</th>
              </tr>
            </thead>
            <thead class="q-pa-sm text-h6">
              <tr>
                <th style="color: darkblue" colspan="3">ចេញថ្ងៃ</th>
                <th style="color: darkred">{{ time.date }}</th>
              </tr>
            </thead>
            <template v-for="post in time.posts || []" :key="post.id">
              <tbody class="q-pa-sm text-h4">
                <tr>
                  <td colspan="2">
                    <span style="color: darkblue"> ប៉ុស្តិ៍ {{ post.name }}</span>
                  </td>
                  <td>{{ post.value }}</td>
                  <td>{{ post.prize }}</td>
                </tr>
              </tbody>
            </template>
          </q-markup-table>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'lotterykhPage',
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

const selectedDate = ref(new Date().toISOString().slice(0, 10))

onMounted(() => {
  console.log('Component mounted with initial date:', selectedDate.value)
})

const tab = ref('all')

const times = ref([
  {
    id: 1,
    code: 'mails',
    name: 'ទាំងអស់',
    icon: 'mails',
  },

  {
    id: 2,
    code: 'alarm1',
    name: 'ខ្មែរ 10:35',
    icon: 'alarm',
    date: 'selectedDate',
    posts: [
      { id: 1, name: 'A', value: '08', prize: '998' },
      { id: 2, name: 'B', value: '86', prize: '728' },
      { id: 3, name: 'C', value: '87', prize: '2456' },
      { id: 4, name: 'D', value: '92', prize: '49988' },
    ],
  },

  {
    id: 3,
    code: 'alarm2',
    name: 'ខ្មែរ 13:00',
    icon: 'alarm',

    posts: [
      { id: 1, name: 'A', value: '79', prize: '96698' },
      { id: 2, name: 'B', value: '46', prize: '728' },
      { id: 3, name: 'C', value: '87', prize: '2456' },
      { id: 4, name: 'D', value: '94', prize: '4998' },
    ],
  },

  {
    id: 4,
    code: 'alarm3',
    name: 'ខ្មែរ 15:45',
    icon: 'alarm',

    posts: [
      { id: 1, name: 'A', value: '34', prize: '9985' },
      { id: 2, name: 'B', value: '46', prize: '728' },
      { id: 3, name: 'C', value: '87', prize: '2456' },
      { id: 4, name: 'D', value: '23', prize: '49989' },
    ],
  },

  {
    id: 5,
    code: 'alarm4',
    name: 'ខ្មែរ 18:00',
    icon: 'alarm',

    posts: [
      { id: 1, name: 'A', value: '68', prize: '998' },
      { id: 2, name: 'B', value: '46', prize: '728' },
      { id: 3, name: 'C', value: '87', prize: '2456' },
      { id: 4, name: 'D', value: '43', prize: '4985' },
    ],
  },

  {
    id: 6,
    code: 'alarm5',
    name: 'ខ្មែរ 19:45',
    icon: 'alarm',

    posts: [
      { id: 1, name: 'A', value: '16', prize: '9984' },
      { id: 2, name: 'B', value: '46', prize: '728' },
      { id: 3, name: 'C', value: '87', prize: '2456' },
      { id: 4, name: 'D', value: '69', prize: '49981' },
    ],
  },
])
</script>
