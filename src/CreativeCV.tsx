// CreativeCV.tsx (o .jsx)
import { Mail, Phone, MapPin, Cloud, Trophy } from "lucide-react";
import avatar from "./assets/Avatar.png";

export function CreativeCV() {
  return (
    <div className="cv-print bg-gradient-to-br from-purple-50 to-blue-50 w-full max-w-4xl mx-auto shadow-2xl">
      
      {/* ========== HEADER - INFORMACIÓN PERSONAL ========== */}
      <div className="cv-header relative bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white p-8 overflow-hidden">
        <div className="print-decor absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32" />
        <div className="print-decor absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Damian Esteban Alarcon Pinzon</h1>
              <p className="text-xl text-purple-100">Software Engineer & Developer</p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="contact-pill flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <Mail size={14} />
              <span>dami3pinzon@gmail.com</span>
            </div>

            <div className="contact-pill flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <Phone size={14} />
              <span>+57 312 392 1668</span>
            </div>

            <div className="contact-pill flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <MapPin size={14} />
              <span>Bogota, Colombia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* ========== PERFIL PROFESIONAL ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-purple-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full" />
            Perfil Profesional
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ingeniero de Software realizando los ultimos semestres de la carrera, enfocado en construir 
            aplicaciones sólidas y escalables. Aporto excelencia técnica e innovación, 
            participando en el levantamiento de requerimientos, 
            ejecución de proyectos y adopción de arquitectura para entregar 
            resultados de alto impacto.
          </p>
        </div>

        {/* ========== EXPERIENCIA LABORAL ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            Trayectoria Profesional
          </h2>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -ml-[9px]" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Coordinador de Desarrollo de Software</h3>
                  <p className="text-purple-600 font-semibold">REVIENTA SAS</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Octubre/2025 - Enero/2025
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Lidere la implementacion de arquitecturas modernas (Clean Architecture e integración con servicios cloud)</li>
                <li>✦ Coordiné equipos multidisciplinarios (Desarrollo, QA, Infraestructura y DevOps)</li>
                <li>✦ Implementé prácticas de observabilidad y monitoreo para garantizar estabilidad y diagnóstico proactivo de incidentes</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-[9px]" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Ingeniero de Desarrollo de Aplicaciones</h3>
                  <p className="text-purple-600 font-semibold">CALLTECH SA</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Febrero/2024 - Octubre/2025
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Desarrolle y lidere el despliegue de aplicaciones web empresariales</li>
                <li>✦ Optimicé el rendimiento y la escalabilidad de aplicaciones críticas, mejorando la experiencia del usuario</li>
                <li>✦ Gestione y resolvi incidentes de alta y mediana complejidad</li>
              </ul>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-teal-600 rounded-full -ml-[9px]" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Ziur Software Colombia SAS</h3>
                  <p className="text-purple-600 font-semibold">Desarrollador .NET</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Enero/2022 - Enero/2024
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Colabore en procesos de modernización tecnológica y migración de aplicaciones legacy</li>
                <li>✦ Oriente y capacite a los nuevos miembros del equipo</li>
                <li>✦ Optimice procedimientos almacenados de la base de datos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== HABILIDADES TÉCNICAS ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 print-new-page">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full" />
            Stack Tecnológico
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="text-purple-600" size={20} />
                <h3 className="font-bold text-gray-900">Cloud & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">.NET</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Azure</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Angular</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">SQL</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">NoSQL</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="text-blue-600" size={20} />
                <h3 className="font-bold text-gray-900">Container & CI/CD</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Docker</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Kubernetes</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== EDUCACIÓN ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            Educación
          </h2>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -ml-[9px]" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Ingeniería de Software</h3>
                  <p className="text-purple-600 font-semibold">Corporación Universitaria Iberoamericana</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  2024 - Actual
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bogota, Colombia</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-[9px]" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Técnico en diseño y programación de Software</h3>
                  <p className="text-purple-600 font-semibold">SENA</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  2021 - 2022
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bogota, Colombia</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}