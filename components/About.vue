<template>
  <div id="about">
    <section-wrapper>
      <section-heading>About</section-heading>
      <div class="section-body">
        <div class="section-description">
          <p class="section-description-paragraph">
            Hi! I'm Ivo, a software engineer who enjoys building significant
            things on the web.
          </p>
          <p class="section-description-paragraph">
            I am driven by an insatiable thirst to improve and a proven track
            record of building stable systems. Throughout the years I understood
            that in order to be a great engineer technical skills are definitely
            not enough. On top of that, excellent communication skills,
            well-developed emotional intelligence and a strong desire to get
            better every day are required.
          </p>
          <p class="section-description-paragraph">Here are a few technologies I am working with:</p>
          <skills />
        </div>
        <div class="profile-pic-wrapper">
          <img src="~/assets/images/me.jpg" class="profile-pic" loading="lazy" />
        </div>
      </div>
    </section-wrapper>
  </div>
</template>

<script>
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";

export default {
  components: {
    SectionWrapper,
    SectionHeading,
    Skills
  }
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.section-body {
  display: flex;
}
.section-description {
  max-width: 50%;
  line-height: 25px;
  color: var(--main-text-color);
}
.section-description-paragraph {
  margin-bottom: 20px;
}
.profile-pic-wrapper {
  margin-left: 80px;
}
.profile-pic {
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  filter: grayscale(100%) contrast(1);
}
.profile-pic:hover {
  filter: none;
}
/* Desktop */
@media only screen and (max-width: 1000px) {
  .profile-pic {
    width: 250px;
    height: 250px;
  }
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .section-body {
    display: flex;
    flex-direction: column;
  }
  .section-description {
    max-width: 100%;
  }
  .profile-pic-wrapper {
    display: flex;
    justify-content: center;
    margin: 50px auto 0;
  }
}
/* Phone */
@media only screen and (max-width: 400px) {
  .profile-pic {
    width: 200px;
    height: 200px;
  }
}
</style>
