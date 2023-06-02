<template>
    <li class="h-[36px] leading-[36px] p-[0] pl-[5px] pr-[5px] border-b hover:border-bottom-none hover:bg-[#ddd]">
        <label class="float-left cursor-pointer ">
           <input type="checkbox"  class="mr-[6px]" :checked="todo.done"  @change="handleCheck(todo.id)" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger float-right before:content-initial " @click="handleDelete(todo.id)" >删除</button>
    </li>
</template>

<script>


export default{
 name:'ListItem',
 props:['todo'],
 methods:{
  handleCheck(id)
  {
      this.$bus.$emit('checkTodo',id)
  },
  handleDelete(id){
			if(confirm('确定删除吗？')){
        this.$bus.$emit('deleteTodo',id)
			}
	}
 }

}
</script>

 <style scoped>
     /*item*/
     /* li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }
    li label {
      float: left;
      cursor: pointer;
    }
    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
    li:before {
      content: initial;
    } */
     /* li:hover{
      background: #ddd;
    } */
    li:last-child {
      border-bottom: none;
    }
   
    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:hover button{
      display: block;
    }
</style> 
