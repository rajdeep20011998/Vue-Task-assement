<template>
     <div class="col-xl-12">
          <h1>ViewUserData</h1>

    <table>
        
    
        <tr>
            <th>Name </th>
            <th>Email is:</th>
            <th>Phone is:</th>
            <th>Number1:</th>
            <th>Number2:</th>
            <th>Total: </th>
        </tr>  
        
        <tr>
            
            <td>{{formData.name}}</td>
            <td>{{formData.email}}</td>
            <td>{{formData.phone}}</td>
            <td>{{formData.number1}}</td>
            <td>{{formData.number2}}</td>
            <td>{{this.result}}</td>
        </tr>


    
    <!-- <table id="tableComponent" class="table table-bordered table-striped"> -->
    </table> 
     </div>   
</template>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<script>
    export default {
        data() {
            return {
                formData:{
                    name:'',
                    email:'',
                    phone:'',
                    number1:0,
                    number2:0,
                    result:''

                    
                }
            }
        },
        mounted() {
            this.formData.name = localStorage.getItem('name');
            this.formData.email = localStorage.getItem('email');
            this.formData.phone = localStorage.getItem('phone');
            this.formData.number1 = localStorage.getItem('number1');
            this.formData.number2 = localStorage.getItem('number2');
            this.result = localStorage.getItem('result');




            




        }
    }
</script>