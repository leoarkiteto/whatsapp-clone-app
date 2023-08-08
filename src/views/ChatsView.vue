<script lang="ts" setup>
  import MessageRow from "@/components/MessageRow.vue";
</script>

<template>
  <div
    id="Messages"
    class="fixed h-[calc(100vh-100px)] w-[420px] overflow-auto pt-1">
    <MessageRow />
  </div>
</template>
