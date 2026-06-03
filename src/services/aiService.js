// src/aiService.js
// Demostración avanzada de Ingeniería de Prompts para Diseño Instruccional.

export const simulateAIRequest = (docenteText) => {
  return new Promise((resolve, reject) => {
    console.log("Iniciando simulación de watsonx.ai (IBM Granite) con Prompt Engineering instruccional...");
    
    // ESTE ES EL PROMPT ACTIVO (Simulación)
    const instructionalPrompt = `
      ### ROL: Diseñador Instruccional Senior y Integrador de IA Responsable.
      ### OBJETIVO: Transformar el contenido médico especializado adjunto en una experiencia de aprendizaje breve, efectiva y evaluable.
      ### FUNCIONES APLICADAS: Gestión de carga cognitiva, alineamiento constructivo, andragogía, micro-learning.
      
      INPUT DEL DOCENTE:
      "${docenteText}"
      
      FORMATO DE SALIDA (JSON):
      {
        "microLessonStep1": "[Guión para el inicio de la cápsula, breve, enfocado en el concepto principal]",
        "microLessonStep2": "[Guión para el desarrollo práctico o clínico del concepto]",
        "activityQuestion": "[Pregunta de autoevaluación interactiva alineada con el contenido]"
      }
    `;
    
    console.log("PROMPT GENERADO (Trazabilidad):", instructionalPrompt);
    
    // Simulamos la latencia de la red (2 segundos)
    setTimeout(() => {
      if (!docenteText) {
        reject(new Error("No se proporcionó texto de entrada."));
        return;
      }
      
      // Generamos una respuesta dinámica simple basada en el texto (Simulación)
      const textSummary = docenteText.substring(0, 100) + "...";
      const textDetails = docenteText.substring(100, Math.min(docenteText.length, 300));
      
      resolve({
        status: "success",
        provider: "watsonx.ai (IBM - Simulated Granite model)",
        content: {
          microLessonStep1: `En esta cápsula breve, abordaremos el concepto clave derivado de: ${textSummary}`,
          microLessonStep2: `Es crucial entender la aplicación clínica. Los detalles más relevantes de este material son: ${textDetails || 'Aplicación práctica del concepto central en entornos virtuales/híbridos.'}`,
          activityQuestion: `¿Cuál es el principio fundamental derivado de: "${textSummary}"?`
        }
      });
      
    }, 2000);
  });
};