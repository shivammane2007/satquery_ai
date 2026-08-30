export type SensorType = 
  | "Sentinel-2" 
  | "Sentinel-1 SAR" 
  | "Landsat-8/9" 
  | "PlanetScope" 
  | "MODIS" 
  | "Custom GeoTIFF";

export type ImageRole = "primary" | "before" | "after" | "optical" | "sar";

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: "image/png" | "image/jpeg" | "image/tiff" | "image/geotiff";
  url: string;
  sensor?: SensorType;
  date?: string;
  resolution?: string;
  role?: ImageRole;
}

export interface BoundingBox {
  id: string;
  label: string;
  confidence: number;
  coordinates: [number, number, number, number]; // [ymin, xmin, ymax, xmax] as percentage 0-100
  color?: string;
}

export interface EvidenceData {
  sourceImage: string;
  highlightedImage?: string;
  changeMask?: string;
  boundingBoxes?: BoundingBox[];
  aoi?: {
    name: string;
    coordinates: string;
    crs: string;
    areaSqKm: number;
  };
  metrics?: {
    label: string;
    value: string;
    change?: string;
  }[];
}

export interface ChangeAnalysisData {
  beforeImage: string;
  afterImage: string;
  changeMaskImage: string;
  beforeDate: string;
  afterDate: string;
  sensor: SensorType;
  areaHa: number;
  changeType: string;
  summary: string;
  detectedClasses: {
    name: string;
    areaHa: number;
    percentage: number;
  }[];
}

export interface MultimodalData {
  opticalImage: string;
  sarImage: string;
  fusedImage: string;
  opticalSensor: string;
  sarSensor: string;
  opticalInsight: string;
  sarInsight: string;
  fusedInsight: string;
}

export interface ExecutionStep {
  name: string;
  status: "completed" | "running" | "queued";
  durationMs: number;
  description: string;
}

export interface AnalysisTrace {
  task: string;
  sensor: string;
  dateRange?: string;
  models: string[];
  confidence: number;
  confidenceTier: "High" | "Moderate" | "Calculated";
  executionSteps: ExecutionStep[];
  outputType: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  attachments?: Attachment[];
  analysisTrace?: AnalysisTrace;
  evidence?: EvidenceData;
  changeAnalysis?: ChangeAnalysisData;
  multimodal?: MultimodalData;
  isStreaming?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  temporary?: boolean;
  category: "Today" | "Yesterday" | "Previous 7 Days" | "Older";
  messages: Message[];
  activeTask?: string;
  aoiName?: string;
}

export interface ModelStackItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  purpose: string[];
  strengths: string[];
  modalities: string[];
  resolutionSupport: string;
  groundingCapabilities: string;
  description: string;
}
