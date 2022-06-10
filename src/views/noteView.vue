<template>
    <div>
        <notes/>
    </div>
</template>

<script>
import notes from '../components/notes/note.vue'

export default {
    name: 'noteView',
    components: {
        notes: notes
    }
}
</script>