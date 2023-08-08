<script lang="ts" setup>
  import AccountGroup from "vue-material-design-icons/AccountGroup.vue";
  import DotsVertical from "vue-material-design-icons/DotsVertical.vue";
  import Magnify from "vue-material-design-icons/Magnify.vue";
</script>

<template>
  <div class="flex">
    <div id="Header" class="fixed z-10 w-[420px]">
      <div
        class="flex w-full items-center justify-between bg-[#f0f0f0] px-3 py-2">
        <img
          alt=""
          class="ml-1 w-10 rounded-full"
          src="https://picsum.photos/100" />

        <div class="flex items-center justify-center">
          <AccountGroup class="mr-6" fill-color="#515151" />
          <DotsVertical class="cursor-pointer" fill-color="#515151" />
        </div>
      </div>

      <div id="Search" class="w-full border-b bg-white px-2 shadow-sm">
        <div
          class="m-2 flex items-center justify-center rounded-md bg-[#f0f0f0] px-1">
          <Magnify :size="18" class="ml-2" fill-color="#515151" />
          <label for="chat">
            <input
              id="chat"
              autocomplete="off"
              class="ml-5 w-full appearance-none bg-[#f0f0f0] px-2.5 py-1.5 leading-tight text-gray-700 placeholder:text-sm placeholder:text-gray-500 focus:shadow-none focus:outline-none"
              name="chat"
              placeholder="Start a new chat"
              type="text" />
          </label>
        </div>
      </div>
    </div>

    <ChatsView class="mt-[100px]" />
  </div>
</template>
