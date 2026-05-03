<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          មើលឆ្នោតប្រចាំថ្ងៃ
          <span class="absolute-top-right q-ma-lx q-pa-md">
            <q-avatar>
              <img src="src/assets/logo/logokh.jpg" />
            </q-avatar>
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              v-close-popup
              :to="menuItem.to"
              active-class="my-menuItem-link"
            >
              <q-item-section avatar>
                <q-icon
                  color="primary"
                  :name="menuItem.icon"
                  @click="toggleLeftDrawer(menuItem.to, menuItem.name)"
                />
                <router-link
                  :class="
                    menuItem.active
                      ? menuItem.class + '' + (menuItem.active ? 'active' : '')
                      : menuItem.class
                  "
                  :to="menuItem.to"
                >
                  {{ menuItem.name }}
                </router-link>
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from 'vue'
const menuList = [
  {
    icon: 'close',
    separator: true,
  },
  {
    home: 'local_activity',
    icon: 'local_activity',
    label: 'ឆ្នោតយួន',
    class: 'fit-link',
    to: 'lotteryvn',
    active: true,
    separator: false,
  },
  {
    home: 'local_activity',
    icon: 'local_activity',
    label: 'ឆ្នោត-មីងណាម',
    class: 'fit-link',
    to: 'lotterymvn',
    active: true,
    separator: false,
  },
  {
    home: 'local_activity',
    icon: 'local_activity',
    label: 'ឆ្នោតខ្មែរ',
    class: 'fit-link',
    to: 'lotterykh',
    active: true,
    separator: false,
  },
  {
    home: 'local_activity',
    icon: 'local_activity',
    label: 'ឆ្នោតថៃ',
    class: 'fit-link',
    to: 'lotterythai',
    active: true,
    separator: false,
  },
  {
    icon: 'folder',
    label: 'Download App',
    separator: false,
  },
  {
    icon: 'build',
    label: 'Languages',
    separator: false,
  },
]

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      drawer: ref(false),
      menuList,
    }
  },
}
</script>
