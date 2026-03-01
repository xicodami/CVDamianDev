import { Mail, Phone, MapPin, Code2, Database, Cloud, Trophy } from "lucide-react";

export function CreativeCV() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 w-full max-w-4xl mx-auto shadow-2xl">
      {/* ========== HEADER - TU INFORMACIÓN PERSONAL ========== */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            {/* Iniciales en el círculo */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-purple-600">LG</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Laura García Ruiz</h1>
              <p className="text-xl text-purple-100">DevOps Engineer & SRE Specialist</p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <Mail size={14} />
              <span>laura.garcia@email.com</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <Phone size={14} />
              <span>+34 644 555 777</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              <MapPin size={14} />
              <span>Málaga, España</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* ========== PERFIL PROFESIONAL ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-purple-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Perfil Profesional
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DevOps Engineer con 5+ años automatizando infraestructura y mejorando pipelines de CI/CD.
            Experta en Kubernetes, Terraform y observabilidad. Reducido tiempo de deployment en 70%
            y downtime en 85% en proyectos enterprise. Apasionada por la cultura DevOps y SRE.
          </p>
        </div>

        {/* ========== EXPERIENCIA LABORAL ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Trayectoria Profesional
          </h2>

          <div className="space-y-6">
            {/* TRABAJO 1 */}
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -ml-[9px]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Senior DevOps Engineer</h3>
                  <p className="text-purple-600 font-semibold">CloudScale Solutions | Málaga</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2021 - Presente</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Diseñé e implementé infraestructura multi-región en AWS con Terraform</li>
                <li>✦ Gestioné clusters Kubernetes (EKS) con 200+ microservicios</li>
                <li>✦ Implementé observabilidad con Prometheus, Grafana y ELK Stack</li>
                <li>✦ Automaticé deployment con GitHub Actions y ArgoCD</li>
                <li>✦ Reduje costos cloud en 40% mediante optimización y autoscaling</li>
              </ul>
            </div>

            {/* TRABAJO 2 */}
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-[9px]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">DevOps Engineer</h3>
                  <p className="text-purple-600 font-semibold">TechOps Group | Madrid</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2019 - 2021</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Migré aplicaciones legacy a contenedores Docker</li>
                <li>✦ Configuré pipelines CI/CD con Jenkins y GitLab CI</li>
                <li>✦ Implementé Infrastructure as Code con Ansible</li>
                <li>✦ Monitorización con Datadog y alerting con PagerDuty</li>
              </ul>
            </div>

            {/* TRABAJO 3 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-teal-600 rounded-full -ml-[9px]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Systems Administrator</h3>
                  <p className="text-purple-600 font-semibold">DataCenter Pro | Valencia</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2018 - 2019</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✦ Administración de servidores Linux (Ubuntu, CentOS)</li>
                <li>✦ Scripting con Bash y Python para automatización</li>
                <li>✦ Gestión de backups y disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========== HABILIDADES TÉCNICAS ========== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
            Stack Tecnológico
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* CATEGORÍA 1: Cloud */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="text-purple-600" size={20} />
                <h3 className="font-bold text-gray-900">Cloud & Infrastructure</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">AWS</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Azure</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">GCP</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Terraform</span>
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-semibold">CloudFormation</span>
              </div>
            </div>

            {/* CATEGORÍA 2: Containers */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="text-blue-600" size={20} />
                <h3 className="font-bold text-gray-900">Container & Orchestration</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Docker</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Kubernetes</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Helm</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">EKS</span>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-semibold">ArgoCD</span>
              </div>
            </div>

            {/* CATEGORÍA 3: Monitoring */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Database className="text-teal-600" size={20} />
                <h3 className="font-bold text-gray-900">Monitoring & Observability</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded text-xs font-semibold">Prometheus</span>
                <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded text-xs font-semibold">Grafana</span>
                <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded text-xs font-semibold">ELK Stack</span>
                <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded text-xs font-semibold">Datadog</span>
                <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded text-xs font-semibold">New Relic</span>
              </div>
            </div>

            {/* CATEGORÍA 4: CI/CD */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="text-pink-600" size={20} />
                <h3 className="font-bold text-gray-900">CI/CD & Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs font-semibold">GitHub Actions</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs font-semibold">Jenkins</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs font-semibold">GitLab CI</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs font-semibold">Ansible</span>
                <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs font-semibold">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== EDUCACIÓN Y CERTIFICACIONES ========== */}
        <div className="grid grid-cols-2 gap-6">
          {/* EDUCACIÓN */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Educación
            </h2>
            <div>
              <h3 className="font-bold text-gray-900">Ingeniería Informática</h3>
              <p className="text-sm text-gray-600">Universidad de Málaga</p>
              <p className="text-xs text-gray-500 mt-1">2014 - 2018</p>
            </div>
          </div>

          {/* CERTIFICACIONES */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Certificaciones
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Certified Kubernetes Administrator</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-700">HashiCorp Certified: Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
