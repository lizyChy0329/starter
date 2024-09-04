<script setup lang="ts">
console.log('123');

</script>

<template>
  <div id="demoContainer" class="relative p-6 bg-gray-100 dark:bg-[#262335] rounded-lg w-full sm:w-[375px] h-[738px] after:(content-['Demo'] absolute inset-0 flex justify-center items-center text-gray-400 text-2xl pointer-events-none)">
    <div class="flex gap-2">
      <button
        type="button" class="bg-[color:#44bd87] text-white border-b-[#249252] rounded  align-middle px-[15px] py-[3px] border-b-2 border-none border-solid outline-none
  text-shadow-[1px_1px_1px_#249252] hover:bg-[#19633b] active:(border-b-0 border-t-2 border-t-[#19633b])" @click="open()"
      >
        Choose file
      </button>

      <button
        type="button" class="bg-[color:#44bd87] text-white border-b-[#249252] rounded  align-middle px-[15px] py-[3px] border-b-2 border-none border-solid outline-none
  text-shadow-[1px_1px_1px_#249252] hover:bg-[#19633b] active:(border-b-0 border-t-2 border-t-[#19633b])" @click="reset()"
      >
        Reset
      </button>
    </div>

    <div v-if="cropedImage" class="border-2 border-green border-solid bg-gray-300 p-1 size-50 mt-4">
      <img :src="cropedImage" class="w-full h-full object-center object-cover" alt="图片">
    </div>
  </div>
</template>
