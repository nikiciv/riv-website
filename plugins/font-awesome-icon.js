import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faVuejs);

Vue.component("font-awesome-icon", FontAwesomeIcon);
