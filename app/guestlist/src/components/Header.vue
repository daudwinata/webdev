<template>
  <div class="header">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Portfolios</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>


<style>
.header ul {
  display: flex;
  list-style: none;
  justify-content: center;
  height: 80px;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #000000;
  color: #ffffff;
}

.header ul li {
  padding: 10px 25px;
  font-size: 18px;
}

.header ul li:hover {
  background-color: red;
}
</style>
