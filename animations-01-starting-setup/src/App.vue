<template>
  <div class='container'>
    <div>
      <list-data></list-data>
    </div>
  </div>
  <div class='container'>
    <div class='block' :class='{animate: animatedBlock}'></div>
    <button @click='animateBlock'>Animate</button>
  </div>
  <div class='container'>
    <transition name='para' @before-enter='beforeEnter'
                @enter-cancelled='enterCancelled'>
      <p v-if='paraIsVisible'>This is only sometime visible</p>
    </transition>
    <button @click='toggleParagraph'>Toggle Paragraph</button>
  </div>
  <base-modal @close='hideDialog' :open='dialogIsVisible'>
    <p>This is a test dialog!</p>
    <button @click='hideDialog'>Close it!</button>
  </base-modal>
  <div class='container'>
    <button @click='showDialog'>Show Dialog</button>
  </div>
  <div class='container'>
    <transition name='fade-button' mode='out-in'>
      <button @click='btnShowUser' v-if='!userAreVisible'>Show User</button>
      <button @click='btnHideUser' v-else>Hide User</button>
    </transition>
  </div>
</template>

<script>
import ListData from '@/components/ListData.vue';

export default {
  components: {
    ListData
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      userAreVisible: false
    };
  },
  methods: {
    enterCancelled() {

    },
    beforeEnter() {
      console.log('beforeEnter');
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    btnShowUser() {
      this.userAreVisible = !this.userAreVisible;
    },
    btnHideUser() {
      this.userAreVisible = !this.userAreVisible;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: all 2s cubic-bezier(0.1, 0.7, 1.0, 0.1);*/
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale 1s ease-in-out forwards;
}

.para-enter-active {
  animation: slide-scale 1s ease-in-out;
}

.para-leave-active {
  animation: shakeX 1s ease-in-out;
}

.fade-button-enter-active {
  animation: fadeIn 150ms ease-in-out;
}

.fade-button-leave-active {
  animation: fadeOut 150ms ease-in-out;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.4);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>