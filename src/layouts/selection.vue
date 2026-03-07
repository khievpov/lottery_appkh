<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated class="primary">
        <q-toolbar>
          <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->

          <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
            <q-scroll-area class="fit">
              <q-list padding class="menu-list">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>

                  <q-item-section> Inbox </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="star" />
                  </q-item-section>

                  <q-item-section> Star </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>

                  <q-item-section> Send </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="drafts" />
                  </q-item-section>

                  <q-item-section> Drafts </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-drawer>

          <q-space></q-space>
          <q-btn flat round dense icon="search" class="q-mr-xs" />
          <q-btn flat round dense icon="group_add" />
        </q-toolbar>
        <q-toolbar inset>
          <q-toolbar-title> <strong>Quasar</strong> Framework </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md"> </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'SelectionPage',
}
</script>
