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
      <Avatar class="avatar" />
      <div id="messages" class="chat__messages">
        <p
          class="chat__message"
          :class="`chat__message--${message.type}`"
          v-for="(message, idx) in messages"
          :key="idx"
        >{{message.text}}</p>
      </div>
      <div class="chat__new-message">
        <div
          contenteditable
          class="chat__input"
          ref="input"
          @input="setMessage()"
          @keydown="pressEnter($event)"
        ></div>
        <button class="chat__button button button--icon" @click="sendMessage()">
          <i class="fa fa-send"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Chatbot/Avatar";

import { getKnowledge } from "@/services/knowledgeService"
import { train, getAnswer } from "@/services/chatbot";

// import * as firebase from "firebase/app";

export default {
  data: () => ({
    show_chat: true,
    message: "",
    messages: [
      {
        text: "Hola. ¿En qué puedo ayudarte?",
        type: 0
      }
    ],
    knowledge: []
  }),
  async mounted() {
    this.knowledge = await getKnowledge();
    train(this.knowledge);
  },
  methods: {
    sendMessage() {
      let text = this.message.trim();
      if (text) {
        this.addMessage(text, 1);
        this.message = "";
        this.$refs.input.innerText = "";
        // Get Answer
        let answers = getAnswer(this.knowledge, text);
        let answer = answers[Math.floor(Math.random() * answers.length)];
        this.addMessage(answer, 0);
      }
    },
    addMessage(text, type) {
      let message = {
        text,
        type
      };
      this.messages.push(message);
      setTimeout(() => {
        this.scrollDown("messages");
      }, 50);
    },
    //
    // async getKnowledge() {
    //   let response = await firebase
    //     .firestore()
    //     .collection("knowledge")
    //     .get();
    //   let knowledge = response.docs.map(doc => ({
    //     id: doc.id,
    //     ...doc.data()
    //   }));
    //   return knowledge;
    // },
    setMessage() {
      this.message = this.$refs.input.innerText;
    },
    pressEnter(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.sendMessage();
      }
    },
    scrollDown(element_id) {
      var element = element_id ? document.getElementById(element_id) : window;
      element.scrollTo({
        top: 20000,
        behavior: "smooth"
      });
    }
  },
  components: {
    Avatar
  }
};
</script>

<style lang='scss' scoped>
$color: #5e4eeb;

.chatbot {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  pointer-events: none;

  &__show {
    position: absolute;
    bottom: 24px;
    right: 24px;
    padding: 24px 22px 20px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    pointer-events: all;
    cursor: pointer;

    &:hover {
      background: #d5e8ff;
    }
    img {
      height: 38px;
      width: 38px;
      vertical-align: bottom;
    }
  }
}

.chat {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 560px;
  border-radius: 10px;
  transition: all 0.5s;
  pointer-events: all;
  //
  display: flex;
  flex-direction: column;

  &__close {
    position: absolute;
    top: 4px;
    right: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  &__messages {
    overflow-y: auto;
    flex-grow: 1;
    padding: 4px 6px;
    background: #eee;
    //
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #c2c2c2 !important;
    }
  }
  &__message {
    margin: 4px 0;
    padding: 6px 12px;
    width: max-content;
    max-width: 80%;
    font-size: 0.95rem;
    border-radius: 14px;
    // word-break: break-all;

    &--0 {
      background: #fff;
      border-bottom-left-radius: 0;
    }
    &--1 {
      margin-left: auto;
      background: $color;
      color: #fff;
      border-bottom-right-radius: 0;
    }
  }
  &__new-message {
    margin: 4px 4px 4px 9px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
  }
  &__input {
    flex-grow: 1;
    overflow-x: auto;
    white-space: nowrap;
    padding: 2px 0;
    border-bottom: 1.2px solid #b9b9b9;
    &:focus {
      border-bottom: 1.2px solid $color;
      outline: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__button {
    color: $color;
  }
}

.avatar {
  border-radius: 10px 10px 0 0;
}

.disable {
  opacity: 0;
  pointer-events: none;
}

// Small devices (landscape phones, 576px and up)
// @media (max-width: 768px) {
//   .chatbot {
//     &__show {
//       margin: 18px;
//       padding: 27px 24px 21px;
//     }
//     img {
//       height: 38px;
//       width: 38px;
//     }
//   }
// }
@media (max-width: 576px) {
  .avatar {
    border-radius: 0;
  }
  .chatbot {
    &__show {
      bottom: 12px;
      right: 12px;
      padding: 18px 16px 14px;
      img {
        height: 28px;
        width: 28px;
      }
    }
  }
  .chat {
    max-height: 100%;
    max-width: 100%;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    border-radius: 0;
  }
}
</style>