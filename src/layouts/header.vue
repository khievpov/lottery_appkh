<template>
  <div>
    <q-card>
      <q-card-section>
        <div padding>
          <h2>
            លទ្ឋផល
            <span style="color: darkred">ឆ្នោតយួន</span>
            សម្រាប់ថ្ងៃទី
          </h2>
        </div>
        <div>
          <q-input v-model="date" filled type="date" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'HeaderPage',
}
</script>
