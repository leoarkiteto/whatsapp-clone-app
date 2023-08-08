<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";

  import { useUserStore } from "@/stores/user";
  import router from "@/router";

  const useStore = useUserStore();
  const { sub } = storeToRefs(useStore);

  onMounted(() => {
    if (!sub) {
      router.push("/login");
    }
  });
</script>

<template>
  <router-view />
</template>
