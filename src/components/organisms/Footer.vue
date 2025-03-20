<template>
    <footer class="footer mt-5 py-3 bg-light">
        <div class="container">
            <div class="row gy-4">
                <div class="col-md-6">
                    <router-link to="/" class="navbar-brand align-items-start mb-3">
                        <img src="/carttem-logo-home.png" alt="Logo" class="d-inline-block align-text-top me-2" />
                    </router-link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        scelerisque nisi eget lorem tincidunt, vel ultricies urna
                        sollicitudin.
                    </p>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-dark text-decoration-none">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="text-dark text-decoration-none">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" class="text-dark text-decoration-none">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" class="text-dark text-decoration-none">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div class="col-md-4 offset-md-2">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><router-link to="/shop" class="text-decoration-none">Shop</router-link></li>
                        <li><a href="#" class="text-decoration-none">About Us</a></li>
                        <li><a href="#" class="text-decoration-none">Contact Us</a></li>
                        <li><a href="#" class="text-decoration-none">Terms & Conditions</a></li>
                    </ul>
                </div>

            </div>

            <hr />
            <div class="text-center">
                <p class="mb-0">
                    &copy; {{ currentYear }} Carttem. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>