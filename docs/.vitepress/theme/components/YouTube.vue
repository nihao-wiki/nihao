<script setup>
import { defineProps, useSlots, ref, onUnmounted } from 'vue';

const player = ref();
const onPlay = ref(false);
const props = defineProps(['link']);
const slots = useSlots();

const [url, param] = props.link.split('?');
const [videoId] = url.split('/').slice(-1);
const startSeconds = param
    .split('&')
    .map((p) => p.split('='))
    .find((p) => p[0] === 't')?.[1];

onUnmounted(() => {
  player?.value?.destroy?.();
});

const loadApi = (cb) => {
  if (window.YT) return cb();
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.error = () => window.open(props.link, '_blank', 'noopener,noreferrer');
  document.body.appendChild(tag);
  window.onYouTubeIframeAPIReadyCallbacks = [
    ...(window.onYouTubeIframeAPIReadyCallbacks || []),
    cb,
  ];
  window.onYouTubeIframeAPIReady = () => {
    window.onYouTubeIframeAPIReadyCallbacks.forEach((cb) => cb());
    delete window.onYouTubeIframeAPIReadyCallbacks;
    delete window.onYouTubeIframeAPIReady;
  };
};

const loadVideo = () => {
  if (onPlay.value === true) return;
  loadApi(() => {
    onPlay.value = true;
    player.value = new YT.Player(videoId, {
      width: '100%',
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: () => {
          player.value.loadVideoById({ videoId, startSeconds });
        },
      },
    });
  });
};
</script>

<template>
  <div class="important custom-block github-alert wrapper">
    <div class="cover" v-if="!!slots.cover && !onPlay">
      <a @click="loadVideo" class="VPLink link VPNavScreenMenuGroupLink cover">
        <div class="play">click to play</div>
        <slot name="cover"></slot
      ></a>
    </div>
    <div v-if="!onPlay">
      <a
        class="VPLink link vp-external-link-icon VPNavScreenMenuGroupLink"
        :href="props.link"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="youtube-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          :width="20"
          :height="20"
        >
          <path
            d="M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z"
            fill="#FF0000"
          ></path>
        </svg>
        <span class="link-text"><slot name="title"></slot></span>
        <span class="author">@<slot name="author"></slot></span>
      </a>
      <div v-if="!onPlay" class="description">
        <slot name="description"></slot>
      </div>
    </div>
    <div :id="videoId"></div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .wrapper {
    display: flex;
    padding-bottom: 12px;
    cursor: pointer;
  }
  .cover {
    min-width: 38.2%;
    position: relative;
    margin: 0 12px 0 0;
  }
}

.youtube-icon {
  display: inline-block;
  vertical-align: middle;
}
.author,
.link-text {
  padding-left: 4px;
}

.cover {
  position: relative;
  display: inline-block;
}
.play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #fff;
  opacity: .8;
  color: #969697;
}
</style>
