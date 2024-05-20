<template>
    <nav class="navbar navbar-expand-lg my-6 py-6 fixed-top mx-auto" 
    :style="{ 'background-color': navbarColor, 'color': nColor}">
  <div class="container-fluid">
    <a class="navbar-brand BPO" style="color: white"
 href="#">BPO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mx-auto">

        <router-link class="route" to="/">
        <li class="nav-item">
          <a class="nav-link navText  HomeText" 
          aria-current="page" style="color: white"
           href="#">Home</a>
        </li>
        </router-link>

        <li class="nav-item">
          <a class="nav-link navText ServicesText"
          aria-current="page" style="color: white"
           href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navIndustriesText " aria-current="page" style="color: white"
          href="#">Industries</a>
        </li>

        <router-link class="route" to="/caseView">
        <li class="nav-item">
          <a class="nav-link navText navCaseText" aria-current="page" style="color: white"
          href="#">Case Studies</a>
        </li>
    </router-link>

        <li class="nav-item">
          <a class="nav-link navText BlogText" aria-current="page" style="color: white"
          href="#">Blog</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btnButton" 
        style="color: white; 
        background-color: #023E8A;">Contact Us</button>
      </form>
    </div>
  </div>
</nav>

</template>

<script>
export default {
name: 'NavBar',
data () {
    return  {
      navbarColor: 'transparent',
      //nColor: 'blue'
    }
  },
  mounted() {
                // Add a scroll event listener
                window.addEventListener('scroll', this.handleScroll);},
  methods: {
                
                handleScroll() {
                    // Get the current scroll position
                    const scrollPosition = window.scrollY;

                    // Adjust the logic based on the scroll position and section height
                    if (scrollPosition >= 640) {
                        this.navbarColor = '#023E8A'; //this.nColor = 'white'// Change the navbar color when scrolling to a section
                    } else {
                        this.navbarColor = 'transparent'; 
                        // Reset to the initial color
                    }
                }
            },
              }


</script>

<style scoped>

.navbar{
  width: Hug (1,440px);
  height: Hug (56px); 
  top: 16px;
  padding: 100px, 100px, 100px, 100px;
  gap: 10px;
  margin-bottom: 30px;
  position: fixed;
  z-index: +1;
  transition: background-color 0.2s ease;
  justify-content: center;
  margin: 0 auto;
}

.route{
    text-decoration: none;
}

.BPO{
  color: white;
  font-weight: bolder;
  margin-top: 05px;
  position: relative;
  left: 80px;
}

.navText{
  font-weight: bolder;
  font-size: 15px;

}

.navText:hover{
  font-weight: bolder;
}


.btnButton{
  background-color: #023E8A;
  color: white;
  border: 1px solid #023E8A;
  border-radius: 25px;
  padding: 15px 32px;
  right: 100px;
  width: 150px;
  font-weight: bolder;
  position: relative;
  right: 80px;
}




@media screen and (max-width: 600px) {

.BPO{
  color: white;
  font-weight: bold;
  margin-top: 05px;
  position: relative;
  left: 20px;
}

.btnButton{
  background-color: #023E8A;
  color: white;
  border: 1px solid #023E8A;
  border-radius: 25px;
  padding: 15px 32px;
  right: 100px;
  width: 150px;
  font-weight: bolder;
  position: relative;
  left: 11rem;
}



}

</style>