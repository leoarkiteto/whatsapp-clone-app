<script lang="ts" setup>
  import CheckAll from "vue-material-design-icons/CheckAll.vue";
</script>

<template>
  <div>
    <div class="flex w-full cursor-pointer items-center px-4 py-3">
      <img
        alt=""
        class="mr-4 w-12 rounded-full"
        src="https://picsum.photos/id/35/100" />

      <div class="w-full">
        <div class="flex items-center justify-between">
          <p class="text-[15px] text-gray-600">John</p>
          <p class="text-[12px] text-gray-600">Date</p>
        </div>

        <div class="flex items-center">
          <CheckAll :size="18" class="mr-1" />
          <p class="w-full text-[15px] text-gray-500">This is a message...</p>
        </div>
      </div>
    </div>

    <div class="float-right w-[calc(1005-80px)] border-b"></div>
  </div>
</template>
