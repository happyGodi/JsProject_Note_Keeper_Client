<template>
<div>
  <div class="row text-w">
    <div class="col-md-12">
      <p class="p-2 display-6 text-center">
        Sign Up
      </p>
    </div>
  </div>
    <div class="row" >
      <div class="col-md-12 p-4" >
        <form>
          <div class="form-group mb-2" >
            <label for="name" class="mb-2 text-d fs-4" ><span class="fa fa-user p-2"></span>User name: </label>
            <input v-model="userName" type="text" name="nom" id="name" class="form-control bg-n" placeholder="Ex: Jhon"/>
          </div>
          <div class="form-group mb-2" >
            <label for="name" class="mb-2 text-d fs-4" ><span class="fa fa-image p-2"></span>Profile pic: </label>
            <input  type="file"
              ref="file"
              @change="onSelect"
              class="form-control bg-n" 
              placeholder="Game cover" 
              aria-label="Game cover photo" 
              aria-describedby="basic-addon2"
            >  
            
          </div>
          <div class="form-group">
            <label for="pass" class="mb-2 text-d fs-4" ><span class="fa fa-lock p-2" ></span>Password</label>
            <input v-model="password" :type="this.inputType"  name="pass" id="pass" class="form-control bg-n" placeholder="Enter your password"/><br>
          </div>

          <div class="form-check j-sa mb-3">
            <div>
              <input @change="reverse()" class="form-check-input " type="checkbox" id="showPass" />
              <label class="form-check-label" for="showPass" >Show password</label>
            </div>
          </div>
          <router-link :to="this.link">
              <button @click.prevent="signIn()" type="submit" class="btn btn-primary w-100 butt br-n" >Sign Up</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped src="./signin.css" ></style>
<script src="./signin.js" ></script>