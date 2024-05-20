<template>
<div class="casePage">
        <section class="grayContainer">
            <div class="yourSuccess">
                <h1 class="yourSuccessh1">Your Success, Our Priority: <br>
                    Personalized BPO Solutions
                </h1>
                <p class="yourSuccessP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br>Aenean et mi neque. Sed nec accumsan enim. 
                <br>Integer gravida arcu eu molestie sollicitudin.</p>

            </div>
        </section>

        <section class="caseGridContainer">
                <div class="caseGrid">
                    <div class="caseGridText">
                    <h2>Case Studies</h2>
                    <p>Experience top-notch support through email, phone, chat and social media. Our commitment to high-quality service
                    ensures your needs are met across every communication channel.
                    </p>
                 </div>
                </div>
        </section>
</div>
  
</template>

<script>
export default {
name: 'caseView'
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
    /* Styles for screens up to 600 pixels wide */

    .casePage{
    margin: 0 auto;
    width: 100%;

}
    .grayContainer{
        width: 100%;
    }

    .caseGrid{
    width: auto;
    height: 80.25rem;
    top: 43.125rem;
    
    }

    .caseGridText{
        height: 100vh;
        width: 100vw;
        position: relative;
        right: 100px;

    }

    .caseGridContainer{
        width: 90%;
        margin: 0 auto;

    }
}






.casePage{
    margin: 0 auto
}

.grayContainer{
    width: 1440px;
    height: 530px;
    opacity: 0.9px;

 padding-top: 200px;
  color: white;

  background: linear-gradient(300deg, gray, #023E8A);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }

}

.yourSuccess{
    width: Hug (562px);
    height: Hug (208px);
    top: 170px;
    left: 100px;
    gap: 16px;
    position: absolute;
    text-align: left;
    font-weight: bold;
}

.yourSuccessh1{
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bolder;
}

.caseGridContainer{
    margin: 0 auto;

}

.caseGrid{
    width: 77.5rem;
    height: 80.25rem;
    top: 43.125rem;
    left: 6.1875rem;
    position: absolute;
  
}











</style>