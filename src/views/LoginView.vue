<script lang="ts" setup></script>

<template>
  <div class="w-full">
    <div class="fixed top-0 z-[-1] h-[225px] w-full bg-teal-600"></div>
    <div
      class="fixed bottom-0 z-[-1] h-[calc(100vh-225px)] w-full bg-[#191919]"></div>

    <div class="mx-auto max-w-xl">
      <div class="mt-10 flex w-full items-center">
        <img alt="" src="whatsapp-logo.png" width="40" />
        <p class="ml-6 font-semibold text-gray-100">WHATSAPP WEB</p>
      </div>

      <div class="z-10 m-6 mt-10 bg-white p-24">
        <p class="pb-10 text-center text-4xl font-light text-gray-700">
          WhatsApp Clone
        </p>
        <div class="flex w-full justify-center rounded-md bg-[#191919] p-3">
          <GoogleLogin />
        </div>
      </div>
    </div>
  </div>
</template>
