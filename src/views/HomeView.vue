<script lang="ts" setup>
  import { ref } from "vue";
  import AccountGroup from "vue-material-design-icons/AccountGroup.vue";
  import DotsVertical from "vue-material-design-icons/DotsVertical.vue";
  import Magnify from "vue-material-design-icons/Magnify.vue";
  import { storeToRefs } from "pinia";

  import ChatsView from "@/views/ChatsView.vue";
  import MessageView from "@/views/MessageView.vue";
  import FindFriendsView from "@/views/FindFriendsView.vue";
  import { useUserStore } from "@/stores/user";
  import router from "@/router";

  const useStore = useUserStore();
  const { picture, lastName, sub, firstName, email } = storeToRefs(useStore);
  const open = ref(true);
  const showFindFriends = ref(false);

  function logout() {
    const res = confirm("Are you sure you want to logout?");
    if (res) useStore.logout();
    router.push("/login");
  }
</script>

<template>
  <div class="flex">
    <div id="Header" class="fixed z-10 w-[420px]">
      <div
        class="flex w-full items-center justify-between bg-[#f0f0f0] px-3 py-2">
        <img
          :src="picture || 'https://picsum.photos/id/78/100'"
          alt=""
          class="ml-1 w-10 rounded-full" />

        <div class="flex items-center justify-center">
          <AccountGroup class="mr-6" fill-color="#515151" />
          <DotsVertical
            class="cursor-pointer"
            fill-color="#515151"
            @click="logout" />
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

    <div v-if="showFindFriends">
      <ChatsView class="mt-[100px]" />
    </div>
    <div v-else>
      <FindFriendsView class="pt-28" />
    </div>

    <div v-if="open">
      <MessageView />
    </div>
    <div v-else>
      <div
        class="fixed ml-[420px] h-screen w-[calc(100vw-420px)] bg-gray-100 text-center">
        <div class="grid h-screen place-items-center">
          <div>
            <div class="flex w-full items-center justify-center">
              <img alt="" src="w-web-not-loaded-chat.png" width="375" />
            </div>
            <p class="mt-10 text-[32px] font-light text-gray-500">
              WhatsApp Web
            </p>
            <p class="mt-2 text-[14px] text-gray-600">
              Send and receive messages without keeping your phone online.
            </p>
            <p class="mt-2 text-[14px] text-gray-600">
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
