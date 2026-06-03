<template>
  <div class="container-fluid p-0">
    <header class="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="alpha-logo bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px; font-weight: bold; font-size: 1.2rem;">α</div>
        <div>
          <h1 class="h4 m-0 text-primary">Objeto de Aprendizaje Interactivo (OAI) α</h1>
          <small class="text-muted">Proyecto Alpha - Universidad</small>
        </div>
      </div>
      <div class="user-info">
        <span class="badge bg-light text-dark border">Rol: Diseñador Instruccional e Integrador de IA</span>
      </div>
    </header>

    <main class="row g-0">
      <aside class="col-md-4 p-4 bg-white border-end">
        <h2 class="h5 mb-4 text-secondary">Paso 1: Ingreso de Material</h2>
        <div class="input-section">
          <label for="docenteInput" class="form-label">Material Académico (Raw Text)</label>
          <textarea 
            class="form-control mb-3" 
            id="docenteInput" 
            rows="10" 
            v-model="rawContent" 
            placeholder="Copie aquí el texto técnico o apuntes del docente..."
          ></textarea>
          <button 
            class="btn btn-alpha w-100" 
            @click="processWithAI"
            :disabled="isLoading || !rawContent"
          >
            <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
            <span v-else>2. Procesar con IA (watsonx.ai sim.)</span>
          </button>
        </div>
        <div class="mt-4 pt-3 border-top">
          <h6 class="text-secondary small">Funciones que demuestra este prototipo:</h6>
          <p class="text-muted small">Automatización de guiones/cápsulas, reducción de carga cognitiva, prototipado rápido, evaluación formativa.</p>
        </div>
      </aside>

      <section class="col-md-8 p-5">
        <div v-if="!resourceGenerated" class="canvas-placeholder text-center text-light mt-5">
          <div class="display-1">α</div>
          <h3 class="text-secondary">Canvas de Recursos</h3>
          <p class="text-muted w-75 mx-auto">Este espacio simula la ruta formativa dinámicamente. Al procesar el material técnico, la IA generará guiones y actividades interactivas basadas en andragogía.</p>
        </div>

        <div v-else class="oai-canvas bg-white p-5 rounded shadow-sm">
          <div class="oai-header mb-4 border-bottom pb-3">
            <h2 class="h3">{{ resourceTitle }}</h2>
            <small class="text-muted">Producido y validado bajo estándares de la Facultad.</small>
          </div>
          
          <div class="row g-4 instructional-section mb-5">
            <div class="col-md-7">
              <div class="card h-100 border-0 bg-light-blue">
                <div class="card-body">
                  <h5 class="card-title text-primary">1. Guión de Micro-Cápsula (Simulación)</h5>
                  <p class="card-text">Este guión ha sido optimizado por la IA para ser breve y efectivo.</p>
                  <div class="instructional-content p-3 bg-white rounded border font-monospace small">
                    <p><strong>[INTRO]</strong> {{ processedContent.microLessonStep1 }}</p>
                    <p><strong>[CUERPO]</strong> {{ processedContent.microLessonStep2 }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-5">
              <div class="card h-100 border-alpha">
                <div class="card-body">
                  <h5 class="card-title text-success">2. Actividad Interactiva</h5>
                  <p class="card-text small text-muted">Evaluable y alineado constructivamente.</p>
                  <div class="activity-canvas p-3 border rounded text-center">
                    <h6>Pregunta:</h6>
                    <p class="fw-bold">{{ processedContent.activityQuestion }}</p>
                    <button class="btn btn-sm btn-outline-success">Ver Respuesta</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-3 border-top">
            <h5 class="text-secondary mb-3">Trazabilidad y Métricas de Control de Calidad (Simuladas)</h5>
            <table class="table table-sm table-striped table-bordered align-middle text-center small">
              <thead class="table-light">
                <tr>
                  <th>Métrica</th>
                  <th>Puntaje</th>
                  <th>Estado (Control de Calidad)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reducción de Carga Cognitiva</td>
                  <td>{{ traceabilityData.cognitiveLoad }}%</td>
                  <td><span class="badge bg-success">Validado</span></td>
                </tr>
                <tr>
                  <td>Trazabilidad y Marcos de Uso (IA Responsable)</td>
                  <td>N/A</td>
                  <td><span class="badge bg-secondary">Documentado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// Importaremos la simulación de IA que crearemos en el Paso 3
import { simulateAIRequest } from './services/aiService';

export default {
  data() {
    return {
      rawContent: '',
      isLoading: false,
      resourceGenerated: false,
      resourceTitle: 'Resumen Inteligente de Contenido',
      processedContent: {
        microLessonStep1: '',
        microLessonStep2: '',
        activityQuestion: ''
      },
      traceabilityData: {
        cognitiveLoad: 0
      }
    }
  },
  methods: {
    async processWithAI() {
      if (!this.rawContent) return;
      
      this.isLoading = true;
      this.resourceGenerated = false;
      
      try {
        // Simulamos la llamada a watsonx.ai (IBM)
        const aiResponse = await simulateAIRequest(this.rawContent);
        
        // Asignamos el contenido generado (Guiones y Actividades)
        this.processedContent = aiResponse.content;
        
        // Simulación de métrica de control de calidad
        this.traceabilityData.cognitiveLoad = 85; 
        this.resourceGenerated = true;
      } catch (error) {
        console.error("Error simulando la IA:", error);
        alert("Ocurrió un error en la simulación de IA.");
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  box-shadow: 2px 0 10px rgba(0,0,0,0.05);
}
.bg-light-blue {
  background-color: #e6f0ff;
}
.canvas-placeholder .display-1 {
  font-size: 8rem;
}
.oai-canvas {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
