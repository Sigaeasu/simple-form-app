<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            USERS
                        </div>
                        <div class="card-body">
                            <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH USER</router-link>
                            <hr>

                            <div class="table-responsive mt-2">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAMA</th>
                                        <th>USERNAME</th>
                                        <th>EMAIL</th>
                                        <th>BIRTH DATE</th>
                                        <th>ADDRESS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.username }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>{{ user.birth_date }}</td>
                                        <td>{{ user.address }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {

        data() {
            return {
                users: []
            }
        },
        created() {
            axios
                .get('http://localhost:8000/users')
                .then(response => {
                    this.users = response.data.data;
                });
        }
    }
</script>