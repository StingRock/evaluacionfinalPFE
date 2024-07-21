<template>
  <div>
    <br><br>
    <form @submit.prevent="submitForm" class="container">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          @input="validateName"
          class="form-control"
        />
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>
      
      <div class="form-group">
        <label for="email">Correo:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          @input="validateEmail"
          class="form-control"
        />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          @input="validatePassword"
          class="form-control"
        />
        <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
      </div>

      <div class="form-group">
        <label for="passwordConfirm">Confirmar Contraseña:</label>
        <input
          type="password"
          id="passwordConfirm"
          v-model="form.passwordConfirm"
          @input="validatePasswordConfirm"
          class="form-control"
        />
        <p v-if="errors.passwordConfirm" class="error-message">{{ errors.passwordConfirm }}</p>
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioRegistro',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      errors: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null
      }
    };
  },
  methods: {
    validateName() {
      const namePattern = /^[a-zA-Z\s]+$/;
      this.errors.name = this.form.name.trim() === ''
      ? 'El campo nombre es requerido'
      : (!namePattern.test(this.form.name) || this.form.name.length < 3
        ? 'El nombre debe tener al menos 3 caracteres y solo puede contener letras.'
        : null);
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errors.email = this.form.email.trim() === ''
        ? 'El campo correo es requerido'
        : (!emailPattern.test(this.form.email) ? 'El correo es inválido' : null);
    },
    validatePassword() {
      this.errors.password = this.form.password.trim() === ''
        ? 'El campo contraseña es requerido'
        : (this.form.password.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : null);
    },
    validatePasswordConfirm() {
      if (this.form.passwordConfirm.trim() === '') {
        this.errors.passwordConfirm = 'El campo confirmar contraseña es requerido';
      } else if (this.form.passwordConfirm !== this.form.password) {
        this.errors.passwordConfirm = 'Las contraseñas no coinciden';
      } else if (this.form.passwordConfirm.length < 8) {
        this.errors.passwordConfirm = 'La contraseña debe tener al menos 8 caracteres';
      } else {
        this.errors.passwordConfirm = null;
      }
    },

    submitForm() {
      this.validateName();
      this.validateEmail();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (!this.errors.name && !this.errors.email && !this.errors.password && !this.errors.passwordConfirm) {
        alert('El registro se ha realizado correctamente');
      } else {
        alert('Por favor, corrige los errores antes de enviar el formulario');
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
    width: 100%;
}

.form-group label {
  display: block;
  text-align: center;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;

  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-container {
  text-align: left;
  width: 100%;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 10%;
}

.btn:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 0.875em;
}
</style>


