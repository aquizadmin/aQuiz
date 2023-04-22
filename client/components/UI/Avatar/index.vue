<template>
  <div class="box">
    <div class="content d-flex flex-column align-center justify-center cursor-pointer">
      <v-img
        :src="image"
        :lazy-src="image"
        cover
        width="100%"
        height="100%"
        class="page-blog-avatar"
      />
      <p class="page-blog-avatar-name">
        {{ fullName }}
      </p>

      <span class="page-blog-avatar-profession">
        {{ profession }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    default: '',
    type: String,
  },
  fullName: {
    default: '',
    type: String,
  },
  profession: {
    default: '',
    type: String,
  },
})
</script>

<style scoped lang="scss">
@import 'assets/variables';

.box {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #1E1B33;
  border-radius: 50%;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: -10px 50px;
    background: $main-gradient-background;
    transition: 0.5s;
    animation: animate 4s linear infinite;
  }

  &:hover {
    .content .page-blog-avatar {
      opacity: 0;
    }

    &::before {
      inset: -20px 0;
    }
  }

  &:after {
    content: '';
    position: absolute;
    inset: 6px;
    background: #1E1B33;
    border-radius: 50%;
    z-index: 1;
  }

  .content {
    position: absolute;
    inset: 15px;
    border: 6px solid #1E1B33;
    z-index: 3;
    border-radius: 50%;
    overflow: hidden;
    
    .page-blog-avatar {
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s;
      pointer-events: none;

      & > img {
        object-position: top right;
      }

      &-name {
        font-size: 18px;
      }

      &-profession {
        font-size: 12px;
      }
    }
  }
}

@keyframes animate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>