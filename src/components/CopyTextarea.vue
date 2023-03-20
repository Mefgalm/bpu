<template>
  <div class="area-block">
    <div class="title-copy-block">
      <div class="title">{{title}}</div>
      <button
        class="copy"
        @click="copy"
      >
        <font-awesome-icon
          class="copy-icon"
          icon="fa-solid fa-copy"
        />
        <span v-if="copied">Copied</span>
        <span v-else>Copy</span>
      </button>
    </div>
    <textarea
      :value="modelValue"
      :disabled="!canEdit"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'title', "canEdit"],
  emits: ['update:modelValue'],
  data() {
    return {
      copied: false,
    }
  },
  methods: {
    copy() {
      this.copied = true;
      navigator.clipboard.writeText(this.modelValue)
        .then(() => setTimeout(() => this.copied = false, 300));
    }
  }
}
</script>
<style>
.area-block {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 1.2em;
}
.title-copy-block {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.3em;
  justify-content: space-between;
}
.area-block > textarea {
  width: 100%;
  height: 100%;
  resize: none;
  font-family: "Fira Code";
  overflow: auto;
}
.copy-icon {
  margin-right: 0.2em;
}
.copy {
  border-style: none;
  color: var(--copy-color);
}
.copy:active {
  border-style: none;
}
</style>
