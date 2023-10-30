<template lang="">
    <nav class = "nav">
        <router-link to="/">Home</router-link>
        <router-link to="/transactions">Transaction</router-link>
        <router-link to="/">Budget</router-link>
        <router-link to="/">Report</router-link>
        <router-link to="/">Setting</router-link>
    </nav>
</template>
<script>
export default {};
</script>
<style lang="css">
.nav {
  display: flex; /* Hiển thị các phần tử con theo hàng ngang */
  justify-content: space-around; /* Căn chỉnh các phần tử con cách đều nhau */
  align-items: center; /* Căn chỉnh theo chiều dọc để giữa các phần tử con */
}

.nav a {
  text-decoration: none; /* Loại bỏ đường link mặc định */
  font-size: 18px; /* Kích thước chữ */
  margin: 0 15px; /* Khoảng cách giữa các phần tử */
  color: #333; /* Màu chữ */
}

/* Để thêm kiểu hover khi rê chuột vào các liên kết */
.nav a:hover {
  color: #ff5733; /* Màu chữ thay đổi khi hover */
}
</style>