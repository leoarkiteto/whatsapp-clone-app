<script lang="ts" setup></script>

<template>
  <div id="FindFriends" class="fixed h-screen w-full overflow-auto pt-[100px]">
    <div class="flex w-full cursor-pointer items-center p-4">
      <img
        alt=""
        class="mr-4 w-12 rounded-full"
        src="https://picsum.photos/id/35/100" />

      <div class="w-full">
        <div class="flex items-center justify-between">
          <p class="text-[15px] text-gray-600">John</p>
        </div>

        <div class="flex items-center">
          <p class="text-[15px] text-gray-500">Hi, I'm using WhatsApp!!</p>
        </div>
      </div>
    </div>

    <div class="float-right w-[calc(1005-80px)] border-b"></div>
  </div>
</template>
