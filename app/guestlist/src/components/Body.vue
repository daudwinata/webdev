<template>
  <div class="background-poster">
    <div class="poster-main-wrapper">
      <div class="poster-wrapper">
        <!-- <img src="./assets/poster.jpg"> -->
        <img class="poster" v-bind:src="image">
      </div>
      <div class="poster-dates">
        <p class="time">10:00 PM</p>
        <p class="title">Ultra Saturday's</p>
        <p class="dj">
          Seymour Ave
          <br>Montreal
        </p>
      </div>
    </div>

    <form v-on:submit.prevent="formSubmit">
      <input
        type="text"
        id="nameInput"
        placeholder="Please fill up"
        v-model="newNameText"
        class="input-style"
      >
      <input type="submit" class="button-style" v-on:click="hideProgressBar">
    </form>

    <div>
      <p class="guest-text-white">{{newNameText}}</p>

      <div class="guest-text-white guest-number">
        Attending ({{guestName.length}} / {{eventCapacity}})
        <br>

        <div
          class="hide progress-bar"
          role="progressbar"
          :style="{width: eventCapacityPercentage + '%'}"
        ></div>
      </div>

      <div class="guest-block guest-text-white">
        <div v-if="guestName.length > 0">
          <div
            class="guest-upper-text guest-round-box"
            v-for="name in sortNames"
            :key="name"
          >Name: {{name || sortNames}}</div>
        </div>
        <div v-else>
          <p class="guest-no-name">No names added yet...</p>
        </div>
      </div>

      <div class="full guest-text-white"></div>
    </div>

    <!--Upcoming events>-->
    <div class="upcoming-events">
      <p class="upcoming-events-title">Upcoming Events</p>
      <div class="upcoming-events-wrapper-poster">
        <div class="upcoming-events-poster-blocks" v-for="poster in posters" :key="poster.id">
          <img class="upcoming-events-poster" v-bind:src="poster.images">
          <div class="upcoming-events-poster-blocks-date">
            <p class="upcoming-events-theme">{{poster.title}}</p>
            <p class="upcoming-events-date">
              <span>{{poster.month}}</span>
              <br>
              {{poster.date}}
            </p>
          </div>
          <p class="upcoming-book">Book Guestlist & Table Service</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      image: "src/assets/poster.jpg",
      posters: [
        {
          id: 1,
          images: "src/assets/epic-jan-10.jpg",
          title: "Ultra Saturday's",
          month: "Jan",
          date: 10
        },
        {
          id: 2,
          images: "src/assets/epic-jan-18.jpg",
          title: "Epic Friday's",
          month: "Jan",
          date: 18
        },
        {
          id: 3,
          images: "src/assets/epic-jan-24.jpg",
          title: "Chinese New Year's",
          month: "Jan",
          date: 24
        }
      ],
      newNameText: "",
      guestName: [],
      eventCapacity: 5,
      eventCapacityPercentage: 0
    };
  },
  methods: {
    formSubmit: function() {
      if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);

        //this.newNameText = ''
        //After pushing the input data, it clears/removes the data inside the input
        this.newNameText = "";

        this.eventCapacityPercentage =
          this.guestName.length / (this.eventCapacity / 100);

        if (this.eventCapacityPercentage >= 100) {
          let full = document.querySelector(".full");
          full.innerHTML = "guestlist is full";
        }
      }
    },
    hideProgressBar: function() {
      const hideProgress = document.querySelector(".progress-bar");

      if (hideProgress) {
        hideProgress.classList.remove("hide");
      } else {
        hideProgress.classList.add("hide");
      }
    }
  },
  computed: {
    sortNames: function() {
      return this.guestName.sort();
    }
  }
};
</script>

<style>
p {
  margin: 20px;
}
.background-poster {
  background-image: url("../assets/background.jpg");
  /* background-color: #000; */
  background-size: cover;
  background-repeat: no-repeat;
  margin: 50px;
  padding: 0 350px;
}

.poster {
  width: 500px;
}

.poster-main-wrapper {
  display: flex;
  justify-content: center;
}

.poster-wrapper {
  margin: 40px;
}

.poster-dates {
  color: #ffffff;
  margin: 40px;
}

.time {
  font-size: 14px;
  color: #f5a623;
}

.title {
  font-size: 40px;
  font-weight: bold;
}

.dj {
  font-weight: bold;
  color: #f5a623;
}

.upcoming-events-title {
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
}

.upcoming-events-wrapper-poster {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-weight: bold;
  padding-bottom: 40px;
}

.upcoming-events-poster-blocks {
  border: 2px solid #fff;
  border-radius: 15px;
  margin: 10px;
}

.upcoming-events-poster-blocks:hover {
  border: 2px solid #f5a623;
}

.upcoming-events-poster-blocks-date {
  display: flex;
  justify-content: space-around;
}

.upcoming-events-theme {
  font-size: 21px;
}

.upcoming-events-date {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  line-height: 10px;
}

.upcoming-events-date span {
  color: #f5a623;
  font-size: 20px;
  margin-bottom: 5px;
}

.upcoming-events-poster {
  width: 300px;
  border-radius: 15px;
}

.upcoming-book {
  color: #9b9b9b;
  font-weight: lighter;
}

.guest-text-white {
  color: #ffffff;
}

/*--------Button---------*/
.input-style {
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  width: 575px;
  margin-bottom: 20px;
  display: flex;
}

.button-style {
  background-color: #4990e2;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  border-radius: 5px;
  width: 600px;
}
/*--------End-Button---------*/

.button-style:hover {
  background-color: #509ef9;
}

.progress-bar {
  height: 1rem;
  color: #fff;
  background-color: #f5a623;
  margin-top: 5px;
}

.hide.progress-bar {
  display: none;
}

.full {
  color: red;
  font-weight: bold;
  margin: 10px 0;
}

.guest-upper-text {
  text-transform: capitalize;
}

.guest-number {
  padding: 0.75rem 1.25rem;
  margin-bottom: 10px;
  border: 2px solid #f5a623;
  border-radius: 30px;
}

.guest-block {
  border-radius: 30px;
  margin: 0;
}

.guest-round-box {
  background-color: #e8f0fe;
  color: #000000;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  border-radius: 5px;
}

.guest-no-name {
  color: #9b9b9b;
  margin: 0;
}

@media screen and (max-width: 1400px) {
  .background-poster {
    padding: 0 140px;
  }
}
</style>
