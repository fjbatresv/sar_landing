export type Lang = 'en' | 'es';

export const AUTHOR_URL = 'https://fjbatresv.com';
export const AUTHOR_EMAIL = 'fjbatresv@gmail.com';

export interface Metric {
  value: string;
  label: string;
}

export interface Moment {
  time: string;
  title: string;
  module: string;
  technology: string;
  operation: string;
  system: string;
  screen: string;
}

export interface ProductFamily {
  title: string;
  summary: string;
  capabilities: string[];
}

export interface FlowStep {
  title: string;
  detail: string;
}

export interface Flow {
  id: string;
  title: string;
  intro: string;
  steps: FlowStep[];
}

export interface Decision {
  title: string;
  context: string;
  choice: string;
  tradeoff: string;
}

export interface WorkArea {
  title: string;
  scope: string;
  examples: string;
}

export interface QualityItem {
  title: string;
  detail: string;
}

export interface Screen {
  title: string;
  key: string;
  description: string;
  decision: string;
}

export interface LandingCopy {
  title: string;
  description: string;
  nav: string[];
  hero: [string, string];
  intro: string;
  heroNote: string;
  dayTitle: string;
  dayIntro: string;
  moments: Moment[];
  productTitle: string;
  productIntro: string;
  families: ProductFamily[];
  metrics: Metric[];
  architectureTitle: string;
  architectureIntro: string;
  diagramTitle: string;
  diagramDescription: string;
  diagramListTitle: string;
  diagramList: string[];
  requestTitle: string;
  requestSteps: string[];
  flowsTitle: string;
  flows: Flow[];
  decisionsTitle: string;
  decisionsIntro: string;
  decisions: Decision[];
  qualityTitle: string;
  qualityIntro: string;
  qualityItems: QualityItem[];
  workTitle: string;
  workIntro: string;
  workAreas: WorkArea[];
  galleryTitle: string;
  galleryIntro: string;
  desktopLabel: string;
  mobileLabel: string;
  screens: Screen[];
  servicesTitle: string;
  services: string[];
  contactTitle: string;
  contactIntro: string;
  contactServices: string[];
  contactCta: string;
  docs: string;
  footer: string;
}

export const copy: Record<Lang, LandingCopy> = {
  en: {
    title: 'Restaurant operations, connected | Javier Batres',
    description: 'A detailed case study of a multi-location restaurant platform spanning inventory, cash, sales, events, reporting, and AWS services.',
    nav: ['Service day', 'Product', 'Architecture', 'Key flows', 'What I built', 'Docs'],
    hero: ['One service day,', 'a whole operation connected.'],
    intro: 'I worked as a senior full-stack developer, tech lead, and co-architect with a team of about 15 on a restaurant operations platform in Central America.',
    heroNote: 'From opening counts to tomorrow’s forecast, each shift leaves a clear operational record.',
    dayTitle: 'A day across the operation',
    dayIntro: 'Select a moment to see what the team does and how the system supports it.',
    moments: [
      { time: '06:00', title: 'Opening count', module: 'Inventory and closures', technology: 'Angular, inventory services', operation: 'A manager starts the work day by counting the items needed for service.', system: 'The inventory workspace records quantities and carries the count into the daily close workflow.', screen: 'dashboard' },
      { time: '07:00', title: 'Register opens', module: 'Cash and access', technology: 'PIN tracker, cash register', operation: 'A cashier opens a register using their operating PIN.', system: 'Role permissions and the cash workflow tie the opening to the employee and shift.', screen: 'dashboard' },
      { time: '11:30', title: 'Lunch service peaks', module: 'Sales visibility', technology: 'Angular, Java services, Superset', operation: 'Store teams follow sales and service activity while the lunch rush is under way.', system: 'Consolidated sales and embedded dashboards make current results available across locations.', screen: 'dashboard' },
      { time: '14:00', title: 'Purchase arrives', module: 'Purchases and inventory', technology: 'Purchase and inventory services', operation: 'Staff compare a delivery with the purchase order and record differences.', system: 'Purchase records and inventory movements keep the delivered quantities connected to stock.', screen: 'dashboard' },
      { time: '16:00', title: 'Stock moves stores', module: 'Transfers', technology: 'Inventory service, Feign clients', operation: 'A team requests items from another location to cover a local shortage.', system: 'The transfer workflow tracks the request, dispatch, and receipt between stores.', screen: 'dashboard' },
      { time: '18:00', title: 'Event is scheduled', module: 'Events and venues', technology: 'Angular, events Lambda', operation: 'A coordinator checks venue availability and prepares an event contract.', system: 'Availability and conflict checks keep the schedule connected to event status.', screen: 'dashboard' },
      { time: '21:00', title: 'Cash is reconciled', module: 'Cash, deposits, and safe', technology: 'Incomes service, PDF generation', operation: 'The closing team counts cash, reviews differences, and prepares a deposit.', system: 'Reconciliation details and a generated report support the deposit handoff.', screen: 'dashboard' },
      { time: '23:59', title: 'Inventory close runs', module: 'Daily inventory close', technology: 'EventBridge schedule, Lambda, Java', operation: 'The day’s inventory close is prepared after the store finishes service.', system: 'A scheduled event starts background processing and records the result through the inventory service.', screen: 'dashboard' },
      { time: '24:00', title: 'Tomorrow takes shape', module: 'Exchange rates and projections', technology: 'EventBridge, projection workflows', operation: 'Leads review projected sales and operating currency before planning the next shift.', system: 'Exchange-rate events and projection history keep planning data current and reviewable.', screen: 'dashboard' },
    ],
    productTitle: 'What SAR does',
    productIntro: 'One workspace connects recurring store routines with the people, records, and services behind them.',
    families: [
      { title: 'Inventory and purchasing', summary: 'Keep stock movement and supplier deliveries visible from one store to the next.', capabilities: ['Daily counts and inventory closeouts', 'Movements, transfers, and waste', 'Purchase orders and delivery differences', 'Recipe components for production planning'] },
      { title: 'Cash and sales', summary: 'Give store teams a consistent record of registers, deposits, sales, and forecasts.', capabilities: ['Register opening, cash counts, and audit', 'Safe control, reconciliation, and deposits', 'Consolidated sales and store projections', 'Company currencies and changing exchange rates', 'Store fiscal document lookup'] },
      { title: 'Customers and events', summary: 'Coordinate event requests with venue availability, contracts, and customer records.', capabilities: ['Agenda and event status', 'Venue availability and conflict checks', 'Customer search and event contracts', 'Delivery order integration'] },
      { title: 'Administration, reporting, and security', summary: 'Manage shared store data while protecting operational views by role and location.', capabilities: ['Restaurants, products, suppliers, and employees', 'Tasks, operational PINs, and role permissions', 'Embedded dashboards with user-level row security', 'Email, translations, metrics, and platform APIs'] },
    ],
    metrics: [
      { value: '~150', label: 'Java REST endpoints' },
      { value: '~65', label: 'Lambda handlers' },
      { value: '14', label: 'Java services' },
      { value: '16', label: 'Terraform modules' },
      { value: '2', label: 'interface languages' },
      { value: '~3,700', label: 'commits, Dec 2023 to Mar 2025' },
    ],
    architectureTitle: 'A request path and an event backbone',
    architectureIntro: 'The Angular app serves store teams. API Gateway routes synchronous requests to domain services through a private network path and to focused Lambda handlers. Queues and event rules keep scheduled or asynchronous work separate from the user request.',
    diagramTitle: 'SAR platform architecture',
    diagramDescription: 'CloudFront serves the Angular application from S3. Authenticated API requests reach API Gateway and a custom authorizer, then flow through a VPC Link to an application load balancer and domain services on ECS Fargate, or to domain Lambda functions. Services use MySQL and DynamoDB. EventBridge and SQS coordinate asynchronous work. Cognito, SES, translation and PDF storage, and embedded Superset complete the platform.',
    diagramListTitle: 'Architecture, in words',
    diagramList: [
      'CloudFront delivers the Angular single-page app stored in S3.',
      'Cognito handles user identity. API Gateway validates requests with the custom authorizer.',
      'Transactional calls reach an application load balancer through a VPC Link and route to domain services on ECS Fargate.',
      'API Gateway also invokes focused Lambda functions for inventory, cash, events, identity, and platform tasks.',
      'RDS MySQL stores relational business records. DynamoDB supports generic platform APIs.',
      'EventBridge starts scheduled work and reacts to events. SQS buffers messages between asynchronous steps.',
      'SES sends email. S3 stores translations and generated documents. Superset supplies embedded operational dashboards.',
    ],
    requestTitle: 'One authenticated request',
    requestSteps: ['Login and email MFA', 'Cognito issues a token', 'The custom authorizer checks access', 'API Gateway routes to a domain service', 'The service returns a scoped response'],
    flowsTitle: 'Three flows that carry the work',
    flows: [
      { id: 'inventory-close', title: 'Daily inventory close', intro: 'Scheduled processing gives the close a repeatable path after the store day.', steps: [ { title: 'Schedule', detail: 'An EventBridge schedule starts the background close.' }, { title: 'Process', detail: 'A Lambda task coordinates the scheduled work.' }, { title: 'Apply', detail: 'The inventory service records the close against store data.' }, { title: 'Review', detail: 'The result is available to the operations team.' } ] },
      { id: 'projection-approval', title: 'Sales projection approval', intro: 'A saved projection stays reviewable through an explicit approval decision.', steps: [ { title: 'Draft', detail: 'A projection is prepared with its store and period history.' }, { title: 'Review', detail: 'The workflow moves through the projection state service.' }, { title: 'Approve or reject', detail: 'A reviewer records one of the supported outcomes.' }, { title: 'History', detail: 'The state and projection history remain available for follow-up.' } ] },
      { id: 'cash-reconciliation', title: 'Cash count and deposit', intro: 'The closing team connects what was counted with the deposit handoff.', steps: [ { title: 'Count', detail: 'Register and safe amounts are recorded for the shift.' }, { title: 'Reconcile', detail: 'The team reviews cash differences against expected totals.' }, { title: 'Prepare report', detail: 'The service generates a PDF record for the reconciliation or collection.' }, { title: 'Deposit', detail: 'The collection record follows the cash into the deposit process.' } ] },
    ],
    decisionsTitle: 'Decisions with context and trade-offs',
    decisionsIntro: 'These choices reflect the transaction, event, and reporting needs of a multi-store operation.',
    decisions: [
      { title: 'Java for transactional domains', context: 'Inventory, purchasing, identity, and cash workflows share durable business records.', choice: 'Spring services group domain logic and deploy independently on ECS Fargate.', tradeoff: 'The fleet has more services to configure, observe, and release.' },
      { title: 'Lambda for focused event work', context: 'Some work starts from schedules, queues, or business events rather than a user request.', choice: 'Small TypeScript handlers use managed events and queues for those jobs.', tradeoff: 'Tracing and retry behavior cross more boundaries.' },
      { title: 'A shared Lambda foundation', context: 'Functions repeat database, dependency-injection, and response patterns.', choice: 'Shared libraries and a dependency layer provide a common base.', tradeoff: 'Changes to shared packages need coordinated releases.' },
      { title: 'Private service routing', context: 'The public API needs to reach container services inside the network.', choice: 'API Gateway connects through VPC Link to the load balancer and ECS.', tradeoff: 'Private networking adds routing and security-group configuration.' },
      { title: 'Terraform stages', context: 'Development, QA, UAT, and master need consistent infrastructure definitions.', choice: 'Terraform modules are reused across the four stages.', tradeoff: 'State and configuration must stay aligned per stage.' },
      { title: 'Nx in a polyglot monorepo', context: 'Frontend, TypeScript functions, Java services, and infrastructure evolve together.', choice: 'Nx and shared generators give teams common project boundaries and commands.', tradeoff: 'Project boundaries and dependency rules require regular care.' },
      { title: 'Embedded Superset dashboards', context: 'Operations teams need filters and multi-dimensional sales views.', choice: 'Superset dashboards are embedded with guest tokens and row-level security.', tradeoff: 'The analytics service and its access rules remain another surface to maintain.' },
      { title: 'Spring State Machine for approvals', context: 'Projection approvals have explicit accepted and rejected outcomes.', choice: 'The projection workflow records transitions through Spring State Machine.', tradeoff: 'State definitions need maintenance as approval rules change.' },
      { title: 'OAuth2 for machine clients', context: 'External integrations need scoped service-to-service access.', choice: 'A dedicated OAuth2 service issues tokens for registered clients and scopes.', tradeoff: 'The team owns another security-sensitive service.' },
      { title: 'SQS for MFA delivery', context: 'Email verification should not block the authentication request on a mail provider response.', choice: 'A queue separates MFA delivery from the request path.', tradeoff: 'Delivery is asynchronous, so the user flow must account for waiting and retries.' },
      { title: 'Translations outside deploys', context: 'Interface text needs to change without rebuilding every application layer.', choice: 'Translation bundles live in S3 and are served through a Lambda API.', tradeoff: 'The app must handle loading and versioning the remote bundle.' },
      { title: 'Nx generators for service setup', context: 'New serverless projects need repeatable folder, build, and deployment structure.', choice: 'Generators create a consistent starting point for those projects.', tradeoff: 'Generator templates must evolve with the underlying conventions.' },
      { title: 'Layered deployment pipeline', context: 'Functions depend on shared layers and internal APIs before application services deploy.', choice: 'GitHub Actions deploys dependencies, serverless APIs, Java services, and frontend in sequence.', tradeoff: 'A release takes longer and depends on correct ordering.' },
    ],
    qualityTitle: 'Engineering practices that support the release path',
    qualityIntro: 'The workflow combines local development, automated review, and staged deployment across a shared codebase.',
    qualityItems: [
      { title: 'Checks at commit boundaries', detail: 'Husky runs lint before commit and tests before push. Gitmoji keeps commit subjects recognizable.' },
      { title: 'Review and dependency hygiene', detail: 'Pull request templates, SonarQube, and Renovate support review and ongoing dependency maintenance.' },
      { title: 'A broad automated test base', detail: 'The repository contains about 157 frontend and TypeScript specs plus 23 Java test classes.' },
      { title: 'A local service environment', detail: 'Docker Compose brings up MySQL, local Cognito, LocalStack, ElasticMQ, and Superset for development.' },
      { title: 'Ordered delivery', detail: 'GitHub Actions releases shared layers, serverless services, Java containers, and the frontend in dependency order.' },
    ],
    workTitle: 'What I built',
    workIntro: 'I led and delivered work across the product with a cross-functional team. My strongest areas were the Angular application and the shared serverless foundation.',
    workAreas: [
      { title: 'Store operations frontend', scope: 'Angular features and workflows', examples: 'Built and maintained inventory, sales, cash, events, reporting, administration, and employee experiences across roughly 835 files.' },
      { title: 'Serverless foundation', scope: 'Reusable TypeScript platform', examples: 'Shaped shared libraries, database access with TypeORM and InversifyJS, dependency layers, and the base Serverless configuration.' },
      { title: 'Authentication and access', scope: 'Identity workflows', examples: 'Contributed MFA, operational PIN flows, refresh tokens, a custom authorizer, Cognito triggers, permissions, and document generation.' },
      { title: 'Platform APIs and integrations', scope: 'Events, queues, and supporting APIs', examples: 'Delivered work across DynamoDB, SQS, email, translations, CloudWatch, task tracking, cash, and event services.' },
      { title: 'Delivery and developer tools', scope: 'CI/CD, environments, and generators', examples: 'Helped build the staged deployment pipeline, environment configuration, and Nx generators for consistent service setup.' },
      { title: 'Java domain contributions', scope: 'Service integration', examples: 'Contributed to inventory, user, app, and agent service work, including Feign-based communication between domains.' },
    ],
    galleryTitle: 'Inside the product',
    galleryIntro: 'A single view of the real operations dashboard, shown with fictional records in the application’s own visual language.',
    desktopLabel: 'Desktop',
    mobileLabel: 'Mobile',
    screens: [
      { title: 'Operations dashboard', key: 'dashboard', description: 'Sales and shift activity at a glance.', decision: 'Embedded dashboards keep operational summaries close to the store workflow.' },
    ],
    servicesTitle: 'What I can help you build',
    services: ['Multi-location operational platforms', 'AWS serverless and container architectures', 'Monorepo migrations and developer tooling', 'Large Angular applications'],
    contactTitle: 'Turn a complex operation into a system people can use.',
    contactIntro: 'I can help shape the architecture and deliver the product across frontend, services, and cloud infrastructure.',
    contactServices: ['Operational products for many locations', 'AWS systems with containers and event-driven services', 'Monorepo migrations and build systems', 'Angular platforms with long-lived workflows'],
    contactCta: 'Tell me what you are building',
    docs: 'Read the architecture documentation',
    footer: 'A team effort, led and built with care by Javier Batres.',
  },
  es: {
    title: 'Operación de restaurantes conectada | Javier Batres',
    description: 'Caso de estudio detallado de una plataforma multi-sucursal que conecta inventario, caja, ventas, eventos, reportes y servicios de AWS.',
    nav: ['Día de servicio', 'Producto', 'Arquitectura', 'Flujos', 'Mi trabajo', 'Docs'],
    hero: ['Un día de servicio,', 'toda una operación conectada.'],
    intro: 'Trabajé como desarrollador senior full-stack, tech lead y co-arquitecto junto a un equipo de unas 15 personas en una plataforma operativa para restaurantes en Centroamérica.',
    heroNote: 'Del conteo de apertura a la proyección de mañana, cada turno deja un registro operativo claro.',
    dayTitle: 'Un día a través de la operación',
    dayIntro: 'Selecciona un momento para ver qué hace el equipo y cómo lo acompaña el sistema.',
    moments: [
      { time: '06:00', title: 'Conteo de apertura', module: 'Inventario y cierres', technology: 'Angular, servicios de inventario', operation: 'Una persona encargada comienza la jornada contando los productos necesarios para el servicio.', system: 'El espacio de inventario registra cantidades y conecta el conteo con el cierre diario.', screen: 'dashboard' },
      { time: '07:00', title: 'Apertura de caja', module: 'Caja y acceso', technology: 'PIN tracker, caja registradora', operation: 'Una persona cajera abre una caja registradora con su PIN operativo.', system: 'Los permisos por rol y el flujo de caja relacionan la apertura con la persona y el turno.', screen: 'dashboard' },
      { time: '11:30', title: 'Pico de almuerzo', module: 'Visibilidad de ventas', technology: 'Angular, servicios Java, Superset', operation: 'El equipo de la tienda consulta la actividad y las ventas durante el pico del almuerzo.', system: 'Las ventas consolidadas y los dashboards embebidos muestran resultados entre sucursales.', screen: 'dashboard' },
      { time: '14:00', title: 'Llega una compra', module: 'Compras e inventario', technology: 'Servicios de compras e inventario', operation: 'El equipo compara una entrega con la orden de compra y registra diferencias.', system: 'Los registros de compra y los movimientos conectan las cantidades recibidas con las existencias.', screen: 'dashboard' },
      { time: '16:00', title: 'Se mueve producto', module: 'Transferencias', technology: 'Servicio de inventario, clientes Feign', operation: 'Una tienda solicita artículos a otra para cubrir una necesidad local.', system: 'El flujo registra la solicitud, el despacho y la recepción entre sucursales.', screen: 'dashboard' },
      { time: '18:00', title: 'Se agenda un evento', module: 'Eventos y salones', technology: 'Angular, Lambda de eventos', operation: 'Una persona coordinadora consulta disponibilidad y prepara un contrato.', system: 'La disponibilidad y la validación de conflictos mantienen el evento vinculado a su estado.', screen: 'dashboard' },
      { time: '21:00', title: 'Se concilia el efectivo', module: 'Caja, depósitos y bóveda', technology: 'Servicio de ingresos, generación de PDF', operation: 'El equipo de cierre cuenta el efectivo, revisa diferencias y prepara un depósito.', system: 'El detalle de conciliación y el reporte generado respaldan la entrega del depósito.', screen: 'dashboard' },
      { time: '23:59', title: 'Corre el cierre de inventario', module: 'Cierre diario de inventario', technology: 'Schedule de EventBridge, Lambda, Java', operation: 'El cierre de inventario se prepara cuando termina el servicio del día.', system: 'Un evento programado inicia el trabajo en segundo plano y registra el resultado con el servicio de inventario.', screen: 'dashboard' },
      { time: '24:00', title: 'Se prepara el día siguiente', module: 'Tipos de cambio y proyecciones', technology: 'EventBridge, flujos de proyección', operation: 'El equipo revisa ventas proyectadas y moneda de operación para planear el siguiente turno.', system: 'Los eventos de tipos de cambio y el historial de proyecciones mantienen los datos al día y disponibles para revisión.', screen: 'dashboard' },
    ],
    productTitle: 'Qué hace SAR',
    productIntro: 'Un solo espacio conecta las rutinas de cada tienda con las personas, registros y servicios que las sostienen.',
    families: [
      { title: 'Inventario y compras', summary: 'Mantiene visibles los movimientos de existencias y las entregas de proveedores entre tiendas.', capabilities: ['Conteos y cierres diarios de inventario', 'Movimientos, transferencias y merma', 'Órdenes de compra y diferencias de entrega', 'Componentes de recetas para planear producción'] },
      { title: 'Efectivo y ventas', summary: 'Da al equipo un registro consistente de cajas, depósitos, ventas y proyecciones.', capabilities: ['Apertura de caja, arqueo y auditoría', 'Control de bóveda, conciliación y depósitos', 'Ventas consolidadas y proyecciones por tienda', 'Monedas de empresa y tipos de cambio', 'Consulta de documentos fiscales por tienda'] },
      { title: 'Clientes y eventos', summary: 'Coordina solicitudes de eventos con disponibilidad de salones, contratos y clientes.', capabilities: ['Agenda y estado de eventos', 'Disponibilidad de salones y detección de conflictos', 'Búsqueda de clientes y contratos', 'Integración de pedidos de delivery'] },
      { title: 'Administración, reportes y seguridad', summary: 'Gestiona datos compartidos y protege la operación por rol y ubicación.', capabilities: ['Restaurantes, productos, proveedores y empleados', 'Tareas, PIN operativo y permisos por rol', 'Dashboards embebidos con seguridad por filas', 'Correo, traducciones, métricas y APIs de plataforma'] },
    ],
    metrics: [
      { value: '~150', label: 'endpoints REST Java' },
      { value: '~65', label: 'handlers Lambda' },
      { value: '14', label: 'servicios Java' },
      { value: '16', label: 'módulos Terraform' },
      { value: '2', label: 'idiomas de interfaz' },
      { value: '~3,700', label: 'commits, dic. 2023 a mar. 2025' },
    ],
    architectureTitle: 'Un camino de solicitud y una base de eventos',
    architectureIntro: 'La aplicación Angular atiende a los equipos de tienda. API Gateway dirige las solicitudes síncronas a servicios de dominio por una ruta privada y a handlers Lambda específicos. Las colas y reglas de eventos separan el trabajo programado o asíncrono de la solicitud del usuario.',
    diagramTitle: 'Arquitectura de la plataforma SAR',
    diagramDescription: 'CloudFront sirve desde S3 la aplicación Angular. Las solicitudes autenticadas llegan a API Gateway y a un authorizer propio; luego pasan por VPC Link hacia un balanceador y servicios de dominio en ECS Fargate, o llegan a funciones Lambda por dominio. Los servicios usan MySQL y DynamoDB. EventBridge y SQS coordinan trabajo asíncrono. Cognito, SES, almacenamiento de traducciones y PDFs, y Superset completan la plataforma.',
    diagramListTitle: 'Arquitectura en palabras',
    diagramList: [
      'CloudFront entrega la aplicación Angular de una sola página almacenada en S3.',
      'Cognito gestiona la identidad. API Gateway valida las solicitudes con el authorizer propio.',
      'Las llamadas transaccionales pasan por VPC Link al balanceador y se enrutan a servicios de dominio en ECS Fargate.',
      'API Gateway también invoca funciones Lambda específicas para inventario, efectivo, eventos, identidad y tareas de plataforma.',
      'RDS MySQL guarda registros de negocio relacionales. DynamoDB respalda APIs genéricas de plataforma.',
      'EventBridge inicia trabajos programados y reacciona a eventos. SQS amortigua mensajes entre pasos asíncronos.',
      'SES envía correo. S3 guarda traducciones y documentos generados. Superset entrega dashboards operativos embebidos.',
    ],
    requestTitle: 'Una solicitud autenticada',
    requestSteps: ['Login y MFA por correo', 'Cognito emite un token', 'El authorizer propio valida el acceso', 'API Gateway enruta al servicio de dominio', 'El servicio devuelve una respuesta acotada'],
    flowsTitle: 'Tres flujos que mueven la operación',
    flows: [
      { id: 'inventory-close', title: 'Cierre diario de inventario', intro: 'El procesamiento programado da al cierre una ruta repetible al terminar el día.', steps: [ { title: 'Programar', detail: 'Un schedule de EventBridge inicia el cierre en segundo plano.' }, { title: 'Procesar', detail: 'Una tarea Lambda coordina el trabajo programado.' }, { title: 'Aplicar', detail: 'El servicio de inventario registra el cierre contra los datos de la tienda.' }, { title: 'Revisar', detail: 'El resultado queda disponible para el equipo de operación.' } ] },
      { id: 'projection-approval', title: 'Aprobación de proyección de venta', intro: 'Una proyección guardada sigue siendo revisable con una decisión explícita.', steps: [ { title: 'Borrador', detail: 'Se prepara una proyección con su tienda e historial del periodo.' }, { title: 'Revisión', detail: 'El flujo avanza mediante el servicio de estados de proyección.' }, { title: 'Aprobar o rechazar', detail: 'Una persona revisora registra uno de los resultados permitidos.' }, { title: 'Historial', detail: 'El estado y el historial quedan disponibles para seguimiento.' } ] },
      { id: 'cash-reconciliation', title: 'Arqueo y depósito', intro: 'El equipo conecta lo contado con la entrega del depósito.', steps: [ { title: 'Contar', detail: 'Se registran los montos de caja y bóveda del turno.' }, { title: 'Conciliar', detail: 'Se comparan los montos de efectivo con los totales esperados.' }, { title: 'Preparar reporte', detail: 'El servicio genera un PDF de conciliación o recolección.' }, { title: 'Depositar', detail: 'El registro de recolección acompaña el efectivo al proceso de depósito.' } ] },
    ],
    decisionsTitle: 'Decisiones con contexto y trade-offs',
    decisionsIntro: 'Estas elecciones responden a necesidades transaccionales, de eventos y de reportes en una operación con varias tiendas.',
    decisions: [
      { title: 'Java para dominios transaccionales', context: 'Inventario, compras, identidad y caja comparten registros de negocio duraderos.', choice: 'Los servicios Spring agrupan lógica de dominio y se despliegan por separado en ECS Fargate.', tradeoff: 'La plataforma tiene más servicios que configurar, observar y liberar.' },
      { title: 'Lambda para trabajo por eventos', context: 'Parte del trabajo inicia por schedules, colas o eventos de negocio y no por una persona usuaria.', choice: 'Handlers pequeños en TypeScript ejecutan esas tareas con eventos y colas administrados.', tradeoff: 'La trazabilidad y los reintentos atraviesan más límites.' },
      { title: 'Base compartida para Lambda', context: 'Las funciones repiten patrones de base de datos, inyección de dependencias y respuestas.', choice: 'Librerías compartidas y una capa de dependencias ofrecen una base común.', tradeoff: 'Los cambios compartidos requieren coordinar versiones.' },
      { title: 'Rutas privadas a servicios', context: 'La API pública necesita llegar a servicios de contenedores dentro de la red.', choice: 'API Gateway se conecta por VPC Link al balanceador y ECS.', tradeoff: 'La red privada agrega configuración de rutas y grupos de seguridad.' },
      { title: 'Stages con Terraform', context: 'Desarrollo, QA, UAT y master necesitan definiciones de infraestructura consistentes.', choice: 'Se reutilizan módulos Terraform en los cuatro stages.', tradeoff: 'El estado y la configuración deben mantenerse alineados por stage.' },
      { title: 'Nx en un monorepo políglota', context: 'Frontend, funciones TypeScript, servicios Java e infraestructura evolucionan juntos.', choice: 'Nx y sus generadores comparten límites de proyecto y comandos.', tradeoff: 'Los límites y reglas de dependencias requieren cuidado continuo.' },
      { title: 'Dashboards embebidos de Superset', context: 'Operaciones necesita filtros y vistas de ventas multidimensionales.', choice: 'Los dashboards se embeben con guest tokens y seguridad por filas.', tradeoff: 'El servicio analítico y sus reglas de acceso son otra superficie que mantener.' },
      { title: 'Spring State Machine para aprobaciones', context: 'La aprobación de proyecciones tiene resultados explícitos: aprobada o rechazada.', choice: 'El flujo registra transiciones con Spring State Machine.', tradeoff: 'Las definiciones de estado deben mantenerse cuando cambian las reglas.' },
      { title: 'OAuth2 para clientes máquina a máquina', context: 'Las integraciones requieren acceso entre servicios limitado por scopes.', choice: 'Un servicio OAuth2 dedicado emite tokens a clientes registrados.', tradeoff: 'El equipo mantiene otro servicio sensible a seguridad.' },
      { title: 'SQS para entregar MFA', context: 'La verificación por correo no debe bloquear la solicitud de autenticación mientras responde el proveedor de correo.', choice: 'Una cola separa el envío de MFA de la ruta de solicitud.', tradeoff: 'La entrega es asíncrona; el flujo debe contemplar espera y reintentos.' },
      { title: 'Traducciones fuera del deploy', context: 'Los textos de interfaz deben poder cambiar sin reconstruir todas las capas.', choice: 'Los paquetes de traducción viven en S3 y se sirven por una API Lambda.', tradeoff: 'La aplicación debe manejar la carga y versión del paquete remoto.' },
      { title: 'Generadores Nx para iniciar servicios', context: 'Los proyectos serverless nuevos necesitan estructuras repetibles de carpetas, build y despliegue.', choice: 'Los generadores crean un punto de partida consistente.', tradeoff: 'Las plantillas deben avanzar junto a las convenciones.' },
      { title: 'Pipeline de despliegue por capas', context: 'Las funciones dependen de capas compartidas y APIs internas antes del despliegue de aplicaciones.', choice: 'GitHub Actions despliega dependencias, APIs serverless, servicios Java y frontend en secuencia.', tradeoff: 'Cada release toma más tiempo y depende del orden correcto.' },
    ],
    qualityTitle: 'Prácticas de ingeniería para sostener los releases',
    qualityIntro: 'El flujo combina desarrollo local, revisión automatizada y despliegues por stage en un código compartido.',
    qualityItems: [
      { title: 'Revisiones en los límites del commit', detail: 'Husky ejecuta lint antes del commit y pruebas antes del push. Gitmoji hace reconocibles los asuntos de commit.' },
      { title: 'Revisión y cuidado de dependencias', detail: 'Las plantillas de pull request, SonarQube y Renovate apoyan la revisión y el mantenimiento de dependencias.' },
      { title: 'Una base amplia de pruebas', detail: 'El repositorio contiene unas 157 specs de frontend y TypeScript, además de 23 clases de pruebas Java.' },
      { title: 'Entorno local de servicios', detail: 'Docker Compose inicia MySQL, Cognito local, LocalStack, ElasticMQ y Superset para desarrollo.' },
      { title: 'Entrega ordenada', detail: 'GitHub Actions libera capas compartidas, servicios serverless, contenedores Java y frontend en orden de dependencia.' },
    ],
    workTitle: 'Lo que construí',
    workIntro: 'Lideré y entregué trabajo en distintas partes del producto junto a un equipo multidisciplinario. Mis áreas principales fueron la aplicación Angular y la base serverless compartida.',
    workAreas: [
      { title: 'Frontend de operación', scope: 'Features y flujos en Angular', examples: 'Construí y mantuve experiencias de inventario, ventas, caja, eventos, reportes, administración y empleados en unos 835 archivos.' },
      { title: 'Base serverless', scope: 'Plataforma reutilizable en TypeScript', examples: 'Trabajé en librerías compartidas, acceso a datos con TypeORM e InversifyJS, capas de dependencias y configuración base de Serverless.' },
      { title: 'Autenticación y acceso', scope: 'Flujos de identidad', examples: 'Contribuí con MFA, PIN operativo, refresh tokens, authorizer propio, triggers de Cognito, permisos y generación de documentos.' },
      { title: 'APIs e integraciones de plataforma', scope: 'Eventos, colas y APIs de soporte', examples: 'Entregué trabajo en DynamoDB, SQS, correo, traducciones, CloudWatch, tareas, caja y eventos.' },
      { title: 'Entrega y herramientas de desarrollo', scope: 'CI/CD, entornos y generadores', examples: 'Ayudé a construir el pipeline por stages, la configuración por entorno y generadores Nx para iniciar servicios con una estructura común.' },
      { title: 'Contribuciones a dominios Java', scope: 'Integración entre servicios', examples: 'Contribuí en servicios de inventario, usuarios, aplicaciones y agente, incluyendo comunicación entre dominios con Feign.' },
    ],
    galleryTitle: 'Dentro del producto',
    galleryIntro: 'Una vista del panel operativo real, con registros ficticios y el lenguaje visual propio de la aplicación.',
    desktopLabel: 'Escritorio',
    mobileLabel: 'Móvil',
    screens: [
      { title: 'Panel operativo', key: 'dashboard', description: 'Ventas y actividad del turno de un vistazo.', decision: 'Los dashboards embebidos acercan el resumen operativo al flujo de tienda.' },
    ],
    servicesTitle: 'En qué puedo ayudarte',
    services: ['Plataformas operativas para varias sucursales', 'Arquitecturas AWS serverless y de contenedores', 'Migraciones de monorepos y herramientas de desarrollo', 'Aplicaciones Angular grandes'],
    contactTitle: 'Convirtamos una operación compleja en un sistema que la gente pueda usar.',
    contactIntro: 'Puedo ayudarte a definir la arquitectura y entregar el producto entre frontend, servicios e infraestructura cloud.',
    contactServices: ['Productos operativos para varias ubicaciones', 'Sistemas AWS con contenedores y servicios por eventos', 'Migraciones de monorepo y sistemas de build', 'Plataformas Angular con flujos de larga vida'],
    contactCta: 'Cuéntame qué estás construyendo',
    docs: 'Lee la documentación de arquitectura',
    footer: 'Un esfuerzo de equipo, liderado y construido con cuidado por Javier Batres.',
  },
};
