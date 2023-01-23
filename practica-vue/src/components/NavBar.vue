<!-- <template>
    <nav>
        <div class="title">
      <h4>{{ title }}</h4>
    </div>
    </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { Link } from "@/interfaces/link";

interface NavbarProps {
  title: string;
  links: Link[];
  color?: string;
}

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true,
    },
    
    color: String,
  },
  setup(props: NavbarProps, ctx) {
    const store = useStore();
    

    return {
      
    
    };
  },
});

</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
.bg-red {
  background-color: red;
}

.important-link {
  font-size: larger;
}
</style> -->