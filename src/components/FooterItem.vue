<template>
    <div  class="h-[40px] leading-[40px] pl-[6px] mt-[5px " v-show="total">
         <label class="display-inline-block ml-[20px] cursor-pointer">
             <input class="pr top-[-1px] mr-[5px]" type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{total}}
        </span>
         <button  class="btn float-right mt-[5px] bg-[#da4f49] text-[#fff] border border-[#bd362f] focus:outline-none hover:text-[#fff] hover:bg-[#bd362f] "  @click="clearAll">清除已完成任务</button>
    </div>   
</template>

<script>
export default{
 name:'FooterItem',
 props:['todos'],
 computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      let i=0
      this.todos.forEach(todo => {
        if(todo.done) i++
      })
      return i
    },
    isAll:{
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				set(value){
					this.$emit('checkAllTodo',value)
				}
    }
 },
 methods:{
    
    clearAll(){
      this.$emit('clearAllTodo')
    }
 }
}
</script>

<!-- <style scoped>
    /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
    }
    .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
    }
    .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }

    .todo-footer button {
      float: right;
      margin-top: 5px;
    }

</style> -->
