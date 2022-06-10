<template>
    <div class="home">
        <div class="filter">
        </div>
        <div class="row mb-3 log">
            <div class="col-md-8 ml-3 note p-4">
                <div class="All-line title">
                      <h1 class="text-w display-4 ">Note Keeper</h1>
                      <i class="fas fa-pen text-w ico-4 ml-3"></i>
                </div>
                <div>
                    <hr class="hr-3 text-w">
                </div>
                <p class="col-md-8 fs-4 text-w mt-3">
                    Note, remember and check everything in your personnal account. From tasks to reminders, note keeper saves everything for you.
                </p>
            </div>
            <div class="col-md-4 login">
                <div class="row mt-3">
                    <div class="col-md-12">
                        <keep-alive>
                            <component :is="this.current"></component>
                        </keep-alive>
                    </div>
                </div>
                <div class="row">
                    <p class="col-md-12 text-center text-w mb-4" @click="change()">
                        {{this.text}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./home.css"></style>
<script src="./home.js"></script>