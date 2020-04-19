<template>
  <div class="chatbot">
    <div class="chatbot__show" @click="show_chat = true" :class="{disable: show_chat}">
      <img src="@/assets/chatbot/chat.png" alt />
    </div>
    <!--  -->
    <div class="chat card" :class="{disable: !show_chat}">
      <div class="chat__close" @click="show_chat = false">
        <i class="fa fa-close"></i>
      </div>
      <div style="height: 150px; padding: 20px; overflow-y: auto">
        <p v-for="(message, idx) in messages" :key="idx">{{message}}</p>
      </div>
      <div class="chat__message">
        <div
          contenteditable
          class="chat__input"
          @input="setMessage($event)"
          @keydown="pressEnter($event)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show_chat: true,
    message: "",
    messages: []
  }),
  methods: {
    setMessage(e) {
      this.message = e.target.innerText;
    },
    pressEnter(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.sendMessage(e);
      }
    },
    sendMessage(e) {
      this.messages.push(this.message);
      this.message = "";
      e.target.innerText = "";
    }
  }
};
</script>

<style lang='scss' scoped>
.chatbot {
  position: fixed;
  top: 28px;
  left: 28px;
  bottom: 28px;
  right: 28px;
  z-index: 1;

  &__show {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 30px 26px 22px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      background: #d5e8ff;
    }
    img {
      height: 42px;
      width: 42px;
      vertical-align: bottom;
    }
  }
}

.chat {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 320px;
  width: 100%;
  // padding: 10px;
  border-radius: 10px;
  transition: all 0.5s;

  &__close {
    float: right;
    margin-right: 4px;
    cursor: pointer;
  }
  &__message {
  }
  &__input {
    overflow-x: auto;
    white-space: nowrap;
    padding: 2px 0;
    margin: 8px;
    border-bottom: 1.5px solid #b9b9b9;
    &:focus {
      border-bottom: 1.5px solid #65a9fd;
      outline: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.disable {
  opacity: 0;
  pointer-events: none;
}

// Small devices (landscape phones, 576px and up)
@media (max-width: 768px) {
  .chatbot {
    &__show {
      margin: 18px;
      padding: 27px 24px 21px;
    }
    img {
      height: 38px;
      width: 38px;
    }
  }
}
@media (max-width: 576px) {
  .chatbot {
    &__show {
      margin: 10px;
      padding: 20px 18px 16px;
    }
    img {
      height: 28px;
      width: 28px;
    }
  }
}
</style>