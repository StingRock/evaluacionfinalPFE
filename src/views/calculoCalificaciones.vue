<template>
  <div class="container">

    <form @submit.prevent="calcular" class="form">
      <div class="form-group">
        <label for="nota1">Nota 1:</label>
        <input type="number" v-model.number="nota1" min="10" max="70" :placeholder="nota1 !== null ? '' : 'Nota 1'" />
        <p v-if="errors.nota1" class="error-message">{{ errors.nota1 }}</p>

      </div>

      <div class="form-group">
        <label for="nota2">Nota 2:</label>
        <input type="number" v-model.number="nota2" min="10" max="70" :placeholder="nota1 !== null ? '' : 'Nota 2'" />
        <p v-if="errors.nota2" class="error-message">{{ errors.nota2 }}</p>
      </div>

      <div class="form-group">
        <label for="nota3">Nota 3:</label>
        <input type="number" v-model.number="nota3" min="10" max="70" :placeholder="nota1 !== null ? '' : 'Nota 3'" />
        <p v-if="errors.nota3" class="error-message">{{ errors.nota3 }}</p>
      </div>

      <div class="form-group">
        <label for="asistencia">Asistencia (%):</label>
        <input type="number" v-model.number="asistencia" min="0" max="100" :placeholder="nota1 !== null ? '' : 'Asistencia'" />
        <p v-if="errors.asistencia" class="error-message">{{ errors.asistencia }}</p>
      </div>

      <button type="submit" class="btn">Calcular</button>

    </form>

    <p v-if="errors.valido" class="error-message">{{ errors.valido }}</p>
    <div v-if="resultado !== null" class="result">
      <p>El promedio: {{ promedio }}</p>
      <p>Tu estado es: {{ resultado }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      promedio: null,
      resultado: null,
      errors:{
        nota1: null,
        nota2: null,
        nota3: null,
        asistencia: null,
        valido: null
      }
    };
  },
methods: {
    calcular() {
      this.errors.valido = null;
      this.resultado = null;

      const notasValidas = this.validateData();

      if (notasValidas) {
        this.promedio = (
          (this.nota1 * 0.35) +
          (this.nota2 * 0.35) +
          (this.nota3 * 0.30)
        ).toFixed(2);

        if (this.promedio >= 40 && this.asistencia >= 80) {
          this.resultado = 'Aprobado';
        } else {
          this.resultado = 'Reprobado';
        }
      } else {
        console.log("Error:", this.errors.valido);
      }
    },
    validateData() {
      this.validateNota1();
      this.validateNota2();
      this.validateNota3();
      this.validateAsistencia();

      const notasValidas = !this.errors.nota1 && !this.errors.nota2 && !this.errors.nota3 && !this.errors.asistencia;

      this.errors.valido = notasValidas ? null : 'Por favor, ingresa valores válidos para las notas y asistencia.';
      return notasValidas;
    },
    validateNota1() {
      if (this.nota1 === null || this.nota1 < 10 || this.nota1 > 70) {
        this.errors.nota1 = 'La nota 1 debe estar entre 10 y 70.';
      } else {
        this.errors.nota1 = null;
      }
    },
    validateNota2() {
      if (this.nota2 === null || this.nota2 < 10 || this.nota2 > 70) {
        this.errors.nota2 = 'La nota 2 debe estar entre 10 y 70.';
      } else {
        this.errors.nota2 = null;
      }
    },
    validateNota3() {
      if (this.nota3 === null || this.nota3 < 10 || this.nota3 > 70) {
        this.errors.nota3 = 'La nota 3 debe estar entre 10 y 70.';
      } else {
        this.errors.nota3 = null;
      }
    },
    validateAsistencia() {
      if (this.asistencia === null || this.asistencia < 0 || this.asistencia > 100) {
        this.errors.asistencia = 'La asistencia debe estar entre 0 y 100.';
      } else {
        this.errors.asistencia = null;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.form {
  width: 100%;
  max-width: 400px;
  flex-direction: row;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: center;
}

.form-group label {
  display: block;
  text-align: center;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 30%;
  justify-content: center;
}

.btn:hover {
  background-color: #0056b3;
}

.result {
  margin-top: 20px;
  text-align: center;
}

.error-message {
  color: red;
  margin-top: 20px;
  text-align: center;
}

</style>
