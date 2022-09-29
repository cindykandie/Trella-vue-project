// import {defineStore} from "pinia"

// export const useCountdownStore = defineStore("counter", {
//     state: () => {
//         return {count:0}
//     },
//     actions:{
//         increment(val = 1){
//             this.count += val;
//         },
//         async waitAndAdd(){
//             setTimeout(()=>{
//                 this.count++
//             },2000)
//         },
//     },
//     getters:{
//         tripleCount: (state) => state.count * 3
//     },
// });