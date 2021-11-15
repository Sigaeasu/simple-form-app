<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            TAMBAH USER
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="UserStore">

                                <div class="form-group">
                                    <label>NAMA</label>
                                    <input type="text" class="form-control" v-model="user.name"
                                           placeholder="Masukkan Nama">
                                    <div v-if="validation.name">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.name[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>USERNAME</label>
                                    <input type="text" class="form-control" v-model="user.username"
                                           placeholder="Masukkan Username">
                                    <div v-if="validation.username">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.username[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>PASSWORD</label>
                                    <input type="password" class="form-control" v-model="user.password"
                                           placeholder="Masukkan Password">
                                    <div v-if="validation.password">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.password[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>EMAIL</label>
                                    <input type="text" class="form-control" v-model="user.email"
                                           placeholder="Masukkan Email">
                                    <div v-if="validation.email">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.email[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>TANGGAL LAHIR</label>
                                    <div>
                                        <date-picker v-model="user.birth_date" valueType="format"></date-picker>
                                    </div>
                                    <div v-if="validation.birth_date">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.birth_date[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>ALAMAT</label>
                                    <textarea class="form-control" v-model="user.address" rows="5"
                                              placeholder="Masukkan Alamat"></textarea>
                                    <div v-if="validation.address">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.address[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>STATUS</label>
                                    <br>
                                    <select v-model="user.active">
                                        <option disabled value="">Please select one</option>
                                        <option value=1>Aktif</option>
                                        <option value=0>Tidak Aktif</option>
                                    </select>
                                    <div v-if="validation.active">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.active[0] }}
                                        </div>
                                    </div>
                                </div>

                                <br>

                                <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    export default {
        components: { DatePicker },
        data() {
            return {
                user: {},
                validation: []
            }
        },
        methods: {
            UserStore() {
                axios.post('http://localhost:8000/users', this.user)
                    .then((response) => {
                        this.$router.push({
                            name: 'users'
                        });
                        console.log(response.data.data);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>