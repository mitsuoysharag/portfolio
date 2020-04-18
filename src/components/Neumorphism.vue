<template>
  <div class="neumorphism">
    <div class="neumorphism__content neu">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repellendus omnis soluta nihil totam id sequi repudiandae.</p>
    </div>
    <div class="neumorphism__actions">
      <div class="btn neu neu--btn" @click="press($event)">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="btn neu neu--pressed" @click="press($event)">
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    press(e) {
      e.currentTarget.classList.toggle("neu--btn")
      e.currentTarget.classList.toggle("neu--pressed")
    }
  }
};
</script>

<style lang='scss' scoped>
$color: #7aa7e7;

.neumorphism {
  padding: 20px;
  background: $color;
  //
  &__content {
    max-width: 300px;
    padding: 20px 30px;
    margin: 0 auto;
    font-size: 1.4rem;
    font-weight: lighter;
    border-radius: 20px;
    p {
      color: rgba(255, 255, 255, 0.767);
      font-weight: bolder;
    }
  }
  &__actions {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
.btn {
  width: 80px;
  height: 80px;
  margin: 0 10px;
  background: $color;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 50%;
  //
  display: flex;
  justify-content: center;
  align-items: center;
}

//
$color: #7aa7e7;
$distance: 8px;
$intensity: 0.1;
$intensity-hover: 0.075;
$intensity-pressed: 0.2;
</style>