<!-- <script setup>
  import { storeToRefs } from "pinia";
  import {useCountdownStore} from "./stores/countdown"
  
  const store = useCountdownStore();
  const {count} = storeToRefs(store)
  console.log(count)
  store.count++
  store.increment(2)
</script>
  
  
  <template>
    <h1>
        Count is {{store.count}}
    </h1>
    <h1>
        TripleCount is{{store.tripleCount}}
    </h1>
    <button v-on:click="store.increment(1)">
        Increase
    </button>
    <button v-on:click="store.waitAndAdd(1)">
        Wait then Add
    </button>
  </template>
  
  
   -->