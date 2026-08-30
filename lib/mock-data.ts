import { Conversation, ModelStackItem } from "./types";
import { SATELLITE_IMAGES } from "./satellite-assets";

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: "chat-001",
    title: "Pune Urban Expansion",
    createdAt: "2026-08-30T10:14:00Z",
    updatedAt: "2026-08-30T10:15:30Z",
    temporary: false,
    category: "Today",
    activeTask: "Change Detection",
    aoiName: "Pune Northern Corridor (18°31'N, 73°51'E)",
    messages: [
      {
        id: "msg-001-u",
        role: "user",
        content: "What changed between these two Sentinel-2 images of northern Pune? Quantify any new built-up regions and outline where expansion occurred.",
        timestamp: "2026-08-30T10:14:00Z",
        attachments: [
          {
            id: "att-001",
            name: "sentinel2_pune_20240112_B040302.tif",
            size: "14.2 MB",
            type: "image/geotiff",
            url: SATELLITE_IMAGES.puneBefore,
            sensor: "Sentinel-2",
            date: "2024-01-12",
            resolution: "10m",
            role: "before"
          },
          {
            id: "att-002",
            name: "sentinel2_pune_20250118_B040302.tif",
            size: "14.8 MB",
            type: "image/geotiff",
            url: SATELLITE_IMAGES.puneAfter,
            sensor: "Sentinel-2",
            date: "2025-01-18",
            resolution: "10m",
            role: "after"
          }
        ]
      },
      {
        id: "msg-001-a",
        role: "assistant",
        content: "Built-up development increased significantly across the northern portion of the area of interest.\n\nBi-temporal spatial comparison between Sentinel-2 acquisitions (2024-01-12 vs 2025-01-18) reveals 12.4 hectares of newly constructed industrial facilities and residential foundations. The primary cluster is situated along the northern transit spur (UTM Zone 43N), transitioning former semi-arid agricultural plots into impermeable surfaces.",
        timestamp: "2026-08-30T10:15:30Z",
        analysisTrace: {
          task: "Temporal Change Detection",
          sensor: "Sentinel-2 MSI (Level-2A BOA)",
          dateRange: "2024-01-12 to 2025-01-18 (372 days)",
          models: ["Change Detection Model", "GeoChat"],
          confidence: 0.87,
          confidenceTier: "High",
          outputType: "Change Map + Quantification + Grounded Bounding Boxes",
          executionSteps: [
            {
              name: "Input Validation & CRS Normalization",
              status: "completed",
              durationMs: 140,
              description: "Verified EPSG:32643 coordinate match and 10m band alignment across both acquisitions."
            },
            {
              name: "Sub-pixel Radiometric Coregistration",
              status: "completed",
              durationMs: 310,
              description: "Aligned ground control tie-points with residual RMSE < 0.18 pixels."
            },
            {
              name: "Deep Feature Difference Extraction",
              status: "completed",
              durationMs: 620,
              description: "Passed bi-temporal feature pyramid representations through Change Detection Model."
            },
            {
              name: "Morphological Boundary Cleaning & Masking",
              status: "completed",
              durationMs: 180,
              description: "Filtered ephemeral agricultural harvest variance to isolate permanent structural expansion."
            },
            {
              name: "Polygon Vectorization & Area Quantification",
              status: "completed",
              durationMs: 240,
              description: "Calculated net surface area change: 12.4 ha (±0.3 ha statistical confidence interval)."
            },
            {
              name: "Evidence Synthesis & Reasoning",
              status: "completed",
              durationMs: 410,
              description: "GeoChat synthesized spatial visual evidence into technical natural language report."
            }
          ]
        },
        evidence: {
          sourceImage: SATELLITE_IMAGES.puneBefore,
          highlightedImage: SATELLITE_IMAGES.puneAfter,
          changeMask: SATELLITE_IMAGES.puneChangeMask,
          boundingBoxes: [
            {
              id: "box-01",
              label: "Industrial Cluster North",
              confidence: 0.91,
              coordinates: [12, 28, 45, 68]
            },
            {
              id: "box-02",
              label: "Logistics Hub Expansion",
              confidence: 0.86,
              coordinates: [26, 45, 42, 62]
            }
          ],
          aoi: {
            name: "Pune North Industrial Sector",
            coordinates: "18.5300° N, 73.8567° E",
            crs: "WGS84 / UTM Zone 43N",
            areaSqKm: 4.8
          },
          metrics: [
            { label: "Net Built-up Growth", value: "12.4 ha", change: "+8.2%" },
            { label: "Coregistration Precision", value: "< 0.2 px", change: "Sub-pixel" },
            { label: "Confidence Score", value: "87%", change: "High" },
            { label: "Baseline Coverage", value: "2024-01 → 2025-01", change: "372d" }
          ]
        },
        changeAnalysis: {
          beforeImage: SATELLITE_IMAGES.puneBefore,
          afterImage: SATELLITE_IMAGES.puneAfter,
          changeMaskImage: SATELLITE_IMAGES.puneChangeMask,
          beforeDate: "Jan 12, 2024",
          afterDate: "Jan 18, 2025",
          sensor: "Sentinel-2",
          areaHa: 12.4,
          changeType: "Vegetation & Barren → Impervious Built-up",
          summary: "12.4 ha of new industrial warehousing and logistics structures identified in northern AOI sector.",
          detectedClasses: [
            { name: "Industrial / Commercial Roofs", areaHa: 7.8, percentage: 63 },
            { name: "Paved Yards & Access Roads", areaHa: 3.2, percentage: 26 },
            { name: "Excavated Ground / Foundation", areaHa: 1.4, percentage: 11 }
          ]
        }
      }
    ]
  },
  {
    id: "chat-002",
    title: "Mumbai SAR Flood Assessment",
    createdAt: "2026-08-29T14:22:00Z",
    updatedAt: "2026-08-29T14:25:10Z",
    temporary: false,
    category: "Yesterday",
    activeTask: "Optical + SAR Multimodal Fusion",
    aoiName: "Mithi River Catchment, Mumbai",
    messages: [
      {
        id: "msg-002-u",
        role: "user",
        content: "Assess monsoon flooding in the Mithi catchment. Optical imagery has heavy cloud obscuration. Use Sentinel-1 SAR backscatter to map water accumulation.",
        timestamp: "2026-08-29T14:22:00Z",
        attachments: [
          {
            id: "att-003",
            name: "sentinel2_mumbai_cloudy.tif",
            size: "18.1 MB",
            type: "image/geotiff",
            url: SATELLITE_IMAGES.opticalCloudy,
            sensor: "Sentinel-2",
            date: "2026-08-28",
            resolution: "10m",
            role: "optical"
          },
          {
            id: "att-004",
            name: "sentinel1_grd_c_band_sar.tif",
            size: "22.4 MB",
            type: "image/geotiff",
            url: SATELLITE_IMAGES.sarRadar,
            sensor: "Sentinel-1 SAR",
            date: "2026-08-28",
            resolution: "10m (IW Mode)",
            role: "sar"
          }
        ]
      },
      {
        id: "msg-002-a",
        role: "assistant",
        content: "Multimodal fusion successfully penetrated 88.4% optical cloud cover using Sentinel-1 C-band SAR backscatter.\n\nSAR specular reflectance analysis indicates 410 hectares of severe inundation across low-lying sections of the Mithi River basin. Smooth open water surfaces exhibit characteristic low backscatter (-22.4 dB in VV polarization), clearly delineating standing flood water from urban high-backscatter structures.",
        timestamp: "2026-08-29T14:25:10Z",
        analysisTrace: {
          task: "Multimodal Optical + SAR Inundation Mapping",
          sensor: "Sentinel-1 IW SAR (C-Band) + Sentinel-2 Optical",
          dateRange: "2026-08-28",
          models: ["TerraMind", "Prithvi-EO", "GeoChat"],
          confidence: 0.92,
          confidenceTier: "High",
          outputType: "Fused SAR-Optical Watermask + Hydrological Inundation Layer",
          executionSteps: [
            {
              name: "Cloud Masking & Quality Assessment",
              status: "completed",
              durationMs: 120,
              description: "Identified 88.4% cloud occlusion in Sentinel-2 scene; automatically triggered SAR failover routing."
            },
            {
              name: "SAR Radiometric Calibration & Terrain Correction",
              status: "completed",
              durationMs: 480,
              description: "Calibrated gamma0 backscatter coefficients with Copernicus 30m DEM."
            },
            {
              name: "Speckle Filtering & Otsu Thresholding",
              status: "completed",
              durationMs: 340,
              description: "Applied refined Lee speckle filter (7x7 window) and segmented specular water reflections."
            },
            {
              name: "TerraMind Multimodal Representation Fusion",
              status: "completed",
              durationMs: 710,
              description: "Fused SAR water boundary vectors with optical baseline elevation topography."
            },
            {
              name: "Hydrological Flood Area Extraction",
              status: "completed",
              durationMs: 290,
              description: "Derived 410 ha flood polygon with 92% classification confidence."
            }
          ]
        },
        multimodal: {
          opticalImage: SATELLITE_IMAGES.opticalCloudy,
          sarImage: SATELLITE_IMAGES.sarRadar,
          fusedImage: SATELLITE_IMAGES.fusedMultimodal,
          opticalSensor: "Sentinel-2 MSI (Optical)",
          sarSensor: "Sentinel-1 C-Band SAR (Radar)",
          opticalInsight: "88.4% Cloud Obscuration. Optical bands blocked by dense monsoon cloud cover.",
          sarInsight: "100% Cloud Penetration. Calibrated -22.4 dB backscatter isolates specular water.",
          fusedInsight: "Combined 410 ha inundation mask mapped directly against urban terrain infrastructure."
        },
        evidence: {
          sourceImage: SATELLITE_IMAGES.sarRadar,
          highlightedImage: SATELLITE_IMAGES.fusedMultimodal,
          aoi: {
            name: "Mithi Catchment Inundation Zone",
            coordinates: "19.0760° N, 72.8777° E",
            crs: "WGS84 / UTM Zone 43N",
            areaSqKm: 16.2
          },
          metrics: [
            { label: "Detected Inundation", value: "410 ha", change: "Critical" },
            { label: "Cloud Penetration", value: "100%", change: "SAR active" },
            { label: "Water Threshold", value: "-22.4 dB", change: "Specular" },
            { label: "Fused Confidence", value: "92%", change: "High" }
          ]
        }
      }
    ]
  },
  {
    id: "chat-003",
    title: "Gujarat Agricultural Shift",
    createdAt: "2026-08-25T09:10:00Z",
    updatedAt: "2026-08-25T09:12:30Z",
    temporary: false,
    category: "Previous 7 Days",
    activeTask: "Multispectral Crop Health",
    aoiName: "Saurashtra Agricultural Region, Gujarat",
    messages: [
      {
        id: "msg-003-u",
        role: "user",
        content: "Evaluate vegetation vigor and crop stress across this agricultural zone using Red-Edge and NIR reflectance indices.",
        timestamp: "2026-08-25T09:10:00Z"
      },
      {
        id: "msg-003-a",
        role: "assistant",
        content: "Multispectral NDVI and NDRE analysis demonstrates strong vegetative vigor across irrigated central zones (mean NDVI 0.68), while outer rainfed parcels indicate localized moisture stress.\n\nSpectral reflectance curve comparisons highlight elevated chlorophyll absorption in plots receiving drip irrigation, contrasting with early canopy senescence in peripheral fields.",
        timestamp: "2026-08-25T09:12:30Z",
        analysisTrace: {
          task: "Multispectral Crop Index Computation",
          sensor: "Sentinel-2 MSI (13 Bands)",
          dateRange: "2026-08-20",
          models: ["Prithvi-EO", "GeoChat"],
          confidence: 0.89,
          confidenceTier: "High",
          outputType: "Zonal Statistics & Crop Health Distribution",
          executionSteps: [
            {
              name: "Atmospheric Correction & BOA Calibration",
              status: "completed",
              durationMs: 150,
              description: "Calibrated Top-of-Atmosphere radiances to Bottom-of-Atmosphere surface reflectances."
            },
            {
              name: "Band Ratio Matrix Calculation",
              status: "completed",
              durationMs: 280,
              description: "Derived NDVI ((B08-B04)/(B08+B04)) and NDRE ((B08-B05)/(B08+B05)) raster grids."
            },
            {
              name: "Prithvi-EO Geospatial Embedding Extraction",
              status: "completed",
              durationMs: 510,
              description: "Classified canopy structure and phenology stage with foundation Earth-observation model."
            },
            {
              name: "Zonal Boundary Statistical Aggregation",
              status: "completed",
              durationMs: 220,
              description: "Aggregated field-level distribution metrics across 340 distinct agricultural parcels."
            }
          ]
        },
        evidence: {
          sourceImage: SATELLITE_IMAGES.puneBefore,
          aoi: {
            name: "Saurashtra Crop Sector",
            coordinates: "21.5222° N, 70.4579° E",
            crs: "WGS84 / UTM Zone 42N",
            areaSqKm: 8.5
          },
          metrics: [
            { label: "Mean NDVI", value: "0.68", change: "+0.12 vs avg" },
            { label: "Canopy Chlorophyll", value: "High", change: "NDRE 0.42" },
            { label: "Active Cultivation", value: "84.2%", change: "Stable" }
          ]
        }
      }
    ]
  },
  {
    id: "chat-004",
    title: "Bangalore Lake Encroachment",
    createdAt: "2026-08-18T16:00:00Z",
    updatedAt: "2026-08-18T16:03:00Z",
    temporary: false,
    category: "Older",
    activeTask: "Waterbody Surface Boundary Tracking",
    aoiName: "Bellandur Catchment, Bangalore",
    messages: [
      {
        id: "msg-004-u",
        role: "user",
        content: "Track waterbody shrinkage and perimeter encroachment for Bellandur Lake over the past 36 months.",
        timestamp: "2026-08-18T16:00:00Z"
      },
      {
        id: "msg-004-a",
        role: "assistant",
        content: "Open water surface area decreased from 362 ha to 318 ha (-12.1%) over the 36-month monitoring window.\n\nBoundary vector tracking identifies 44 hectares of cumulative perimeter encroachment, primarily along the eastern and south-eastern buffer zones due to structural landfilling and macrophyte siltation.",
        timestamp: "2026-08-18T16:03:00Z",
        analysisTrace: {
          task: "Long-term Hydrological Shoreline Tracking",
          sensor: "Landsat-8/9 OLI + Sentinel-2 MSI",
          dateRange: "2023-08 to 2026-08 (36 Months)",
          models: ["Change Detection Model", "GeoChat"],
          confidence: 0.91,
          confidenceTier: "High",
          outputType: "Temporal Vector Boundary Diff + Hydro-Statistical Trend",
          executionSteps: [
            {
              name: "Historical Scene Ingestion & Cloud Sieve",
              status: "completed",
              durationMs: 320,
              description: "Queried STAC catalog for 18 cloud-free seasonal scenes across 3-year baseline."
            },
            {
              name: "Modified NDWI Water Extraction",
              status: "completed",
              durationMs: 410,
              description: "Computed MNDWI ((Green-SWIR)/(Green+SWIR)) to cleanly separate water from urban edges."
            },
            {
              name: "Perimeter Vector Polygon Differential",
              status: "completed",
              durationMs: 360,
              description: "Quantified 44 ha shrinkage and vector contraction across eastern buffer coordinates."
            }
          ]
        }
      }
    ]
  }
];

export const MODEL_STACK: ModelStackItem[] = [
  {
    id: "geochat",
    name: "GeoChat",
    badge: "Conversational VQA & Grounding",
    category: "Remote-Sensing Vision-Language",
    purpose: [
      "Natural language question answering over high-resolution remote-sensing imagery",
      "Precise spatial grounding with pixel-level coordinate bounding references",
      "Geospatial descriptive captioning and feature identification",
      "Conversational multi-turn reasoning over complex Earth observation scenes"
    ],
    strengths: [
      "Zero-shot visual reasoning over aerial and satellite perspectives",
      "Trained on high-diversity Earth observation visual question-answering corpuses",
      "Direct bounding box coordinate generation for spatial evidence grounding"
    ],
    modalities: ["Optical (RGB)", "Multispectral (10m-30m)", "High-Res Aerial (< 1m)"],
    resolutionSupport: "Sub-meter to 30m GSD",
    groundingCapabilities: "Normalized pixel bounding boxes & spatial centroid tags",
    description: "GeoChat serves as the primary conversational intelligence layer, translating user queries into geospatial tasks and grounding natural language explanations in explicit visual coordinates."
  },
  {
    id: "prithvi-eo",
    name: "Prithvi-EO",
    badge: "Multispectral Representation",
    category: "Foundational Earth Observation",
    purpose: [
      "Self-supervised multispectral representation learning across 13 spectral bands",
      "Biomass estimation, crop phenology, and vegetative vigor index extraction",
      "Surface water mapping and cloud/shadow differentiation",
      "Land use and land cover (LULC) dense segmentation"
    ],
    strengths: [
      "Developed on NASA Landsat and ESA Sentinel-2 spectral pipelines",
      "Processes full spectral dimensions beyond simple 3-band RGB approximations",
      "Robust temporal representation of seasonal phenological dynamics"
    ],
    modalities: ["Sentinel-2 MSI (13 Bands)", "Landsat-8/9 OLI/TIRS (11 Bands)"],
    resolutionSupport: "10m – 30m GSD",
    groundingCapabilities: "Dense pixel-wise semantic masks & zonal indices",
    description: "Prithvi-EO provides the foundational multispectral understanding required to reason about non-visible spectral signatures like Near-Infrared (NIR), Red-Edge, and Shortwave Infrared (SWIR)."
  },
  {
    id: "terramind",
    name: "TerraMind",
    badge: "Multimodal Fusion Specialist",
    category: "Cross-Modal Earth Intelligence",
    purpose: [
      "Cross-sensor alignment combining optical multispectral and SAR backscatter",
      "All-weather observation through dense cloud cover and atmospheric smoke",
      "Surface roughness, dielectric moisture, and flood extent quantification",
      "Digital Elevation Model (DEM) topographic context integration"
    ],
    strengths: [
      "Joint embedding space for active radar (SAR) and passive optical signatures",
      "Prevents classification failures during monsoons, wildfires, and night conditions",
      "Accurate dielectric surface water boundary delineation"
    ],
    modalities: ["Sentinel-1 SAR (C-Band VV/VH)", "Sentinel-2 MSI", "SRTM / Copernicus DEM"],
    resolutionSupport: "10m – 20m SAR GRD",
    groundingCapabilities: "Fused backscatter watermasks & topographic vector contours",
    description: "TerraMind bridges the gap between complementary remote-sensing modalities, allowing SatQuery to reason through persistent clouds and synthesize radar backscatter with optical baselines."
  },
  {
    id: "change-detection",
    name: "Change Detection Model",
    badge: "Bi-Temporal Spatial Diff",
    category: "Temporal Remote-Sensing Network",
    purpose: [
      "Sub-pixel coregistered bi-temporal feature comparison across dates",
      "Permanent infrastructure expansion vs ephemeral vegetation phenology separation",
      "Deforestation, disaster damage assessment, and urban growth quantification",
      "Vector difference mask and hectarage calculation generation"
    ],
    strengths: [
      "High resilience to seasonal lighting and atmospheric angle variations",
      "Produces vectorized boundary polygons ready for GIS export (GeoJSON / Shapefile)",
      "Strict uncertainty bounds with confidence intervals on hectarage metrics"
    ],
    modalities: ["Bi-temporal Sentinel-2", "Bi-temporal Landsat-8/9", "Bi-temporal SAR"],
    resolutionSupport: "10m – 30m GSD",
    groundingCapabilities: "Vector polygon masks, difference heatmaps & metric summaries",
    description: "The Change Detection Model specializes in temporal differential analysis, isolating genuine Earth surface transformations while filtering out false positives caused by sun angle or seasonal shift."
  }
];

export const SAMPLE_PROMPTS = [
  "What changed between these two satellite images?",
  "Identify built-up regions and industrial expansion in this AOI.",
  "Compare optical and SAR imagery during cloud cover.",
  "Show me areas with vegetation loss or water stress.",
  "Detect flood inundation extent and calculate flooded area."
];
