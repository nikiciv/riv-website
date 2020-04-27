<template>
  <div id="about">
    <!-- sectionTitle & other section info will be passed from config file in future -->
    <section-heading sectionTitle="About" />
    <div class="section-body">
      <div class="section-description">
        <p class="section-description-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p class="section-description-paragraph">
          It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <skills />
      </div>
      <img src="~/assets/images/me.jpg" class="profile-pic" loading="lazy" />
    </div>
  </div>
</template>

<script>
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";

export default {
  components: {
    SectionHeading,
    Skills
  }
};
</script>

<style>
#about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.section-body {
  display: flex;
  justify-content: space-between;
}
.section-description {
  max-width: 50%;
  line-height: 25px;
  font-size: 15px;
  color: var(--main-text-color);
}
.section-description-paragraph {
  margin-bottom: 20px;
}
.profile-pic {
  object-fit: cover;
  width: 350px;
  height: 350px;
  border-radius: 3px;
  filter: grayscale(100%) contrast(1);
}
.profile-pic:hover {
  filter: none;
}
</style>