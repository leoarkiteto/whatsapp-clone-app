<script lang="ts" setup>
  import DotsVertical from "vue-material-design-icons/DotsVertical.vue";
  import Send from "vue-material-design-icons/Send.vue";
  import Paperclip from "vue-material-design-icons/Paperclip.vue";
  import EmoticonExcitedOutline from "vue-material-design-icons/EmoticonExcitedOutline.vue";
</script>

<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div id="BG"></div>
      <div class="w-full border-l border-green-500">
        <div
          class="fixed z-10 flex min-w-[calc(100vw-420px)] items-center justify-between bg-[#f0f0f0] p-2">
          <div class="flex items-center">
            <img
              alt=""
              class="mx-1 w-10 rounded-full"
              src="https://picsum.photos/id/56/100" />
            <p class="ml-1 font-semibold text-gray-900">John</p>
          </div>
          <DotsVertical fill-color="#515151" />
        </div>
      </div>

      <div
        id="MessagesSection"
        class="fixed z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] touch-auto overflow-auto pb-8 pt-20">
        <div class="px-20 text-sm">
          <div class="flex w-[calc(100%-50px)]">
            <div class="my-1 inline-block rounded-md bg-white p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              assumenda doloribus excepturi inventore laborum odit quam, qui
              quibusdam quidem saepe, sit ullam voluptates. Asperiores
              dignissimos id nemo odio sed. Aspernatur!
            </div>
          </div>

          <div
            class="float-right flex w-[calc(100%-50px)] justify-end space-x-1">
            <div class="my-1 inline-block rounded-md bg-green-200 p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              assumenda doloribus excepturi inventore laborum odit quam, qui
              quibusdam quidem saepe, sit ullam voluptates. Asperiores
              dignissimos id nemo odio sed. Aspernatur!
            </div>
          </div>
        </div>
      </div>

      <div class="fixed bottom-0 z-10 w-[calc(100vw-420px)] bg-[#f0f0f0] p-2.5">
        <div class="flex items-center justify-center">
          <EmoticonExcitedOutline
            :size="27"
            class="mx-1.5"
            fill-color="#515151" />
          <Paperclip :size="27" class="ml-1.5 mr-3" fill-color="#515151" />

          <label for="other">
            <input
              id="other"
              autocomplete="off"
              class="mr-1 w-full appearance-none rounded-lg px-4 py-3 leading-tight text-gray-700 shadow focus:shadow-none focus:outline-none"
              name="other"
              placeholder="Message"
              type="text" />
          </label>

          <button
            class="ml-3 flex w-12 items-center justify-center p-2"
            type="button">
            <Send fill-color="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #BG {
    background: url("message-bg.png") center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }
</style>
