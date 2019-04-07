<template>
  <section class="container">
    <div class="game-wrapper">
      <div class="box-wrapper">
        <div class="ball" :class="ballPosition" />
        <img
          :src="require('../static/cup.png')"
          class="box"
          :class="boxClass(0)"
          @click="boxClick(0)"
        />
        <img
          :src="require('../static/cup.png')"
          class="box"
          :class="boxClass(1)"
          @click="boxClick(1)"
        />
        <img
          :src="require('../static/cup.png')"
          class="box"
          :class="boxClass(2)"
          @click="boxClick(2)"
        />
      </div>
      <h3>
        Score: <span>{{ accumulatedScore }}</span>
      </h3>
      <button :class="{'opacity-0': gameRunning}" @click="start"><span>{{ startMessage }}</span></button>
      <h2 class="veredict">
        {{ veredict }}
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      longAnimation: false,
      ballPosition: "ball-0",
      startMessage: "Start game",
      score: 0,
      boxes: [
        {
          id: 0,
          pos: 0,
          ball: null,
          swappingPlace: []
        },
        {
          id: 1,
          pos: 1,
          ball: null
        },
        {
          id: 2,
          pos: 2,
          ball: null
        }
      ],
      shuffleInterval: null,
      ballInit: 0,
      veredict: "",
      gameRunning: false,
      lost: false,
      accumulatedScore: 0,
      firstClick: false,
      swapping: [
        [0, 1],
        [1, 2],
        [0, 2]
      ]
    }
  },
  computed: {
    correctAnswer() {
      return this.boxes[this.ballInit].pos
    }
  },
  methods: {
    boxClick(idx) {
      if (!this.gameRunning && !this.firstClick) {
        if (this.boxes[idx].pos === this.correctAnswer) {
          this.veredict = "Correct!"
          this.accumulatedScore += 1
          this.score += 1
        } else {
          this.score = 0
          this.veredict = "Wrong..."
        }
        this.ballPosition = `ball-${this.correctAnswer} fall`
        setTimeout(() => {
          this.ballPosition = `ball-${this.correctAnswer}`
        }, 100)
        this.firstClick = true
      }
    },
    start() {
      let ballPo = Math.floor(Math.random() * Math.floor(3));
      this.ballInit = ballPo
      this.ballPosition = `ball-${ballPo}`
      this.veredict = ""
      setTimeout(() => {
        this.ballPosition = `ball-${ballPo} fall`
      }, 300)
      setTimeout(() => {
        this.shuffle(ballPo)
        this.ballPosition = `ball-${ballPo} hidden fall`
      }, 800)
    },
    boxClass(idx) {
      return this.longAnimation
        ? `box-${this.boxes[idx].pos} z-${this.boxes[idx].pos} long-animation`
        : `box-${this.boxes[idx].pos} z-${this.boxes[idx].pos}`
    },
    shuffle(ballPo) {
      this.gameRunning = true
      for (var i = 0; i < 8000; i++) {
        if (i < 3000) {
          if (1300 - 100 * this.score <= 500) {
            i += 500
          } else {
            i += 1300 - 100 * this.score
          }
        } else if ( i >= 3000 && i < 5000) {
          if (1000 - 100 * this.score <= 500) {
            i += 500
          } else {
            i += 1000 - 100 * this.score
          }
        } else if ( i >= 5000) {
          if (800 - 100 * this.score <= 500) {
            i += 500
          } else {
            i += 800 - 100 * this.score
          }
        }
        this.shuffleInterval = setTimeout(() => {
          const swapingOrder = this.swapping[Math.floor(Math.random()*this.swapping.length)];
          if (swapingOrder === this.swapping[2]) {
            this.longAnimation = true
          } else {
            this.longAnimation = false
          }
          let box1 = this.boxes.findIndex(val => val.pos === swapingOrder[0])
          let box2 = this.boxes.findIndex(val => val.pos === swapingOrder[1])
          this.boxes[box1].pos = swapingOrder[1]
          this.boxes[box2].pos = swapingOrder[0]
        }, i)
      }
      setTimeout(() => {
        this.startMessage = "Start again"
        this.veredict = "Where is the Ball?"
        this.firstClick = false
        this.gameRunning = false
      }, 9000)
    }
  }
}
</script>

<style lang="scss" scoped>
.veredict {
  position: absolute;
  bottom: 100px;
}
.game-wrapper {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  border: 1px solid #da3b41;
  position: relative;
  h3 {
    position: absolute;
    top: 10px;
    left: 10px;
    span {
      font-weight: normal;
    }
  }
  button {
    border: 1px solid #da3b41;
    background-color: white;
    padding: 10px 20px 10px 35px;
    border-radius: 20px;
    color: #da3b41;
    cursor: pointer;
    transition: all 0.2s ease-in;
    position: relative;
    width: 125px;
    &.opacity-0 {
      cursor: auto;
      opacity: 0;
    }
    &:before {
      content: "";
      position: absolute;
      left: 15px;
      width: 0;
      height: 0;
      top: 50%;
      transform: translateY(-50%);
      border-top: 7px solid transparent;
      border-left: 10px solid #da3b41;
      border-bottom: 7px solid transparent;
      transition: all 0.2s ease-in;
    }
    span {
      transition: all 0.2s ease-in;
    }
    &:hover {
      span {
        opacity: 0;
      }
      &:before {
        left: 60px;
      }
    }
  }
}
.box-wrapper {
  display: flex;
  width: 640px;
  margin-bottom: 50px;
  height: 200px;
  position: relative;
  .box {
    height: 0;
    transition: all cubic-bezier(.32,.75,.41,1.01);
    width: 200px;
    height: auto;
    position: absolute;
    left: 0;
    cursor: pointer;
    top: 0;
    transition-duration: 0.4s;
    &.long-animation {
      transition-duration: 0.5s;
    }
    &-0 {
      left: 0;
    }
    &-1 {
      left: 220px;
    }
    &-2 {
      left: 440px;
    }
    &.z-1 {
      z-index: 1;
    }
    &.z-2 {
      z-index: 2;
    }
    &.z-3 {
      z-index: 3;
    }
  }
}
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: -50px;
  position: absolute;
  background-color: lightblue;
  border: 1px solid 1px solid #8cafba;
  transition: all 0.3s cubic-bezier(.32,.75,.41,1.01);
  box-shadow: inset -5px -4px 20px 0px rgba(0, 0, 0, 0.3);
  &.hidden {
    display: none;
  }
  &.long-animation {
    transition-duration: 0.4s;
  }
  &.fall {
    top: 30px;
  }
  &-0 {
    left: 80px;
  }
  &-1 {
    left: 295px;
  }
  &-2 {
    left: 515px;
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
