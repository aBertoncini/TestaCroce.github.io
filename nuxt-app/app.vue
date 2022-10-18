<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <NuxtExampleLayout example="routing/pages">
    <NuxtLoadingIndicator />
    <NuxtPage />

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/" class="n-link-base"> Home </NuxtLink>
        <NuxtLink to="/about" class="n-link-base"> About </NuxtLink>
      </nav>
    </template>

    <template #footer>
      <div class="text-center p-4 op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtExampleLayout>
</template>
