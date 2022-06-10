<template>
    <div>
        <div class="text-w navigation">
            <nav class="navbar navbar-light bg-light">
                 <a class="navbar-brand">
                    Note keeper
                    <i class="fas fa-pen text-w ico-4 ml-3"></i>
                </a>
                <form class="form-inline">
                    <router-link to="/">
                        <button class="btn btn-outline-success my-2 my-sm-0 br-w" type="submit">Log out</button>
                    </router-link>
                </form>
            </nav>
        </div>
    </div>
</template>

<style scoped src="./note.css"></style>
<script src="./note.js"></script>