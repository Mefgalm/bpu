<template>
  <div class="page">
    <div class="header">
      <div class="logo">
        Blueprint Updater
      </div>
      <div class="github">
        <a
          class="link"
          href="https://github.com"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
          Code
        </a>
      </div>
    </div>
    <div class="main-block">
      <div class="code-json-block">
        <copy-textarea
          class="code-block"
          title="Blueprint"
          :canEdit="true"
          v-model="blueprintCode"
        ></copy-textarea>
        <div class="error-message">{{errorMessage}}</div>
        <copy-textarea
          class="json-block"
          title="Blueprint Json"
          :canEdit="false"
          v-model="blueprintJsonText"
        ></copy-textarea>
      </div>
      <div class="update-block">
        <div class="update-center-block">
          <div
            class="updates-link"
            @click="isVisible = true"
          >Updates</div>
          <button @click="update">Update</button>
        </div>
        <button
          class="clear-button"
          @click="clear"
        >Clear</button>
      </div>
      <div class="code-json-block">
        <copy-textarea
          class="code-block"
          title="Result"
          :canEdit="false"
          v-model="blueprintUpdatedCode"
        ></copy-textarea>
        <copy-textarea
          class="json-block"
          :canEdit="false"
          title="Result Json"
          v-model="blueprintUpdatedJsonText"
        ></copy-textarea>
      </div>
    </div>
  </div>
  <Modal
    v-model:visible="isVisible"
    type="clean"
    width="40%"
  >
    <div class="updates-modal-block">
      <h3>Updates</h3>
      <div>
        <div class="update-buttons">
          <button @click="addUpdate">New</button>
          <button @click="clearUpdates">Remove All</button>
        </div>
        <div class="update-rules">
          <div
            class="update-rule"
            :key="index"
            v-for="(update,index) in updates"
          >
            <input
              @change="fromUpdateChanged($event.target.value, index)"
              :value="update.from"
            />
            <div class="update-symbol">
              >>
            </div>
            <input
              @change="toUpdateChanged($event.target.value, index)"
              :value="update.to"
            />
            <font-awesome-icon class="remove-icon" @click="removeUpdate(index)" icon="fa-solid fa-trash" />
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
  import * as bpUpdate from '../BpUpdate.js';
  import { Modal } from 'usemodal-vue3';
  import CopyTextarea from './CopyTextarea.vue';

  export default {
    data() {
      return {
        blueprintCode: '',
        blueprintJson: null,
        blueprintJsonText: '',
        blueprintUpdatedJson: null,
        blueprintUpdatedJsonText: '',
        blueprintUpdatedCode: '',
        updates: [],
        isVisible: false,
        errorMessage: ''
      }
    },
    components: {
      Modal,
      CopyTextarea,
    },
    watch: {
      blueprintCode(newValue) {
        this.errorMessage = "";
        if (newValue) {
          try {
            this.blueprintJson = bpUpdate.blueprintToJson(newValue);
          } catch {
            this.blueprintJson = null;
            this.blueprintUpdatedJson = null;
            this.errorMessage = "Invalid Blueprint code";
          }
        } 
      },
      blueprintJson(newValue) {
        this.blueprintJsonText = newValue ? JSON.stringify(newValue, null, 2) : "";
      },
      blueprintUpdatedJson(newValue) {
        if (newValue) {
          this.blueprintUpdatedCode = bpUpdate.jsonToBlueprint(newValue);
          this.blueprintUpdatedJsonText = JSON.stringify(newValue, null, 2);
        } else {
          this.blueprintUpdatedCode = "";
          this.blueprintUpdatedJsonText = "";
        }
      }
    },
    methods: {
      fromUpdateChanged(value, index) {
        this.updates[index].from = value;
      },
      toUpdateChanged(value, index) {
        this.updates[index].to = value;
      },
      addUpdate() {
        this.updates.push({from: '', to: ''});
        this.isVisible = true;
      },
      removeUpdate(index) {
        this.updates.splice(index, 1);
      },
      clearUpdates() {
        this.updates = [];
      },
      clear() {
        this.blueprintCode = '';
        this.blueprintJson = null;
        this.blueprintUpdatedJson = null;
      },
      update() {
        let updateValues = new Map();
        for (const update of this.updates) {
          updateValues.set(update.from, update.to);
        }
        this.blueprintUpdatedJson = bpUpdate.updateEntities(this.blueprintJson, updateValues);
      }
    }
  }
</script>

<style>
.updates-modal-block {
  display: flex;
  background-color: var(--main-bg-color);
  flex-direction: column;
  border: 1px var(--text-main-color) solid;
  padding: 1em;
}
.page {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
}
.main-block {
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 0.7em;
}
.header {
  height: 2%;
  padding: 1em 0.7em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
}
.logo {
  font-size: 1.5em;
  color: var(--logo-color);
  cursor: pointer;
}
.code-json-block {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.update-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 0.5em;
}
.update-center-block {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.buttons > .updates-link {
  margin-bottom: 0.5em;
}
.code-block {
  height: 20%;
  resize: none;
}
.code-block > textarea {
  color: var(--blueprint-color);
  font-size: 1em;
}
.json-block {
  height: 75%;
}
.buttons button:first-child {
  margin-bottom: 1em;
}
.updates-link {
  text-align: center;
  color: var(--input-text-color);
  text-decoration: underline;
  margin-bottom: 0.5em;
}
.updates-link:hover {
  cursor: pointer;
}
.update-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
}
.update-rules {
  max-height: 60vh;
  overflow-y: auto;
}
.update-rules > .update-rule:not(:last-child) {
  margin-bottom: 0.2em;
}
.update-rule {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.update-symbol {
  padding: 0 0.5em;
  font-size: 1em;
  font-family: "Fira Code";
}
.update-rule > button {
  margin-left: 0.2em;
}
.github > a {
  text-decoration: none;
  color: #fab795;
}
.error-message {
  color: #f43e5c;
  font-size: 1.1em;
  font-style: italic;
}
.remove-icon {
  padding: 0.5em;
  color: #f43e5c;
}
</style>
