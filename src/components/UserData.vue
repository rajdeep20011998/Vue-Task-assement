
<template>
    <form>
      <div class="row">
        <div class="col-xl-12">
          <h1>UserData</h1>
          <hr />
  
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model.lazy="formData.name"
            />
          </div>
   
          <div class="form-group">
            <label for="email">email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="formData.email"
            />
          </div>

           <label for="Phone">Phone</label>
            <input
              type="Phone"
              id="phone"
              class="form-control"
              v-model="formData.phone"
            />
          </div>

          <div class="form-group">

             <input type="number"
              class="form-control"
                 name="number1"  
                 v-on:input= "update_number1"
                 v-model="formData.number1"
                 />
              <div>{{ number1 }}</div>
          </div>  
              <div class="form-group">
   
            <input type="number"           
             class="form-control"
              name="number2"
              v-on:input= "update_number2" 
              v-model="formData.number2"
              />
              <p>{{ number2 }}</p>
            </div>
            <hr>
            <!-- <div class="form-group"> -->
              
              <p>{{ result() }}</p>

            </div>
    
          <!-- </div> -->
          <button
            class="btn btn-primary"
            @click="submitForm">
            Submit
          </button>
  

        
    </form>
  </template>
  
  
  <script>
  
  
    export default {
      data(){
        return {
          formData:{
            name:'',
            email:'',
            phone:'',
            number1:0,
            number2:0,
            // result:''
          }
        }
      },
      methods:{
        submitForm(){
          console.log(JSON.stringify(this.formData))
        },
        update_number1: function (event) {
          this.number1 = event.target.value;
        },
        update_number2: function (event) {
          this.number2 = event.target.value;
        },
        result: function () {
    
            return parseInt(this.number1) + parseInt(this.number2);
},
        submitForm() {
                localStorage.setItem('name',this.formData.name)
                localStorage.setItem('email',this.formData.email)
                localStorage.setItem('phone',this.formData.phone)
                localStorage.setItem('number1',this.formData.number1)
                localStorage.setItem('number2',this.formData.number2)
                localStorage.setItem('result',this.result())
            },
            
      }
    }
  </script>
  