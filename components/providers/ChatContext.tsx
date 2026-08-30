"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Conversation, Message, Attachment } from "@/lib/types";
import { INITIAL_CONVERSATIONS } from "@/lib/mock-data";
import { SATELLITE_IMAGES } from "@/lib/satellite-assets";

interface ChatContextType {
  conversations: Conversation[];
  activeConversationId: string;
  activeConversation: Conversation | undefined;
  setActiveConversationId: (id: string) => void;
  createNewConversation: () => string;
  deleteConversation: (id: string) => void;
  renameConversation: (id: string, newTitle: string) => void;
  sendMessage: (content: string, attachments?: Attachment[]) => void;
  isTemporary: boolean;
  toggleTemporary: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shareModalOpen: boolean;
  setShareModalOpen: (open: boolean) => void;
  evidenceModalData: {
    title: string;
    image: string;
    type?: string;
    metrics?: { label: string; value: string }[];
  } | null;
  setEvidenceModalData: (data: any | null) => void;
  isStreaming: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const [activeConversationId, setActiveConversationId] = useState<string>("chat-new");
  const [isTemporary, setIsTemporary] = useState<boolean>(false);
  const [temporaryChat, setTemporaryChat] = useState<Conversation | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
  const [evidenceModalData, setEvidenceModalData] = useState<any | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  // When in temporary mode, activeConversation is the isolated temporaryChat
  const activeConversation = isTemporary
    ? temporaryChat || {
        id: "temp-session",
        title: "Temporary Analysis",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        temporary: true,
        category: "Today",
        messages: [],
      }
    : conversations.find((c) => c.id === activeConversationId);

  const createNewConversation = () => {
    if (isTemporary) {
      const freshTempChat: Conversation = {
        id: `temp-${Date.now()}`,
        title: "Temporary Analysis",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        temporary: true,
        category: "Today",
        messages: [],
      };
      setTemporaryChat(freshTempChat);
      return freshTempChat.id;
    }

    const newId = `chat-${Date.now()}`;
    const newChat: Conversation = {
      id: newId,
      title: "New Satellite Query",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      temporary: false,
      category: "Today",
      messages: [],
    };

    setConversations((prev) => [newChat, ...prev]);
    setActiveConversationId(newId);
    return newId;
  };

  const handleSetActiveConversationId = (id: string) => {
    // If switching to a specific saved chat, turn off temporary mode
    if (isTemporary) {
      setIsTemporary(false);
    }
    setActiveConversationId(id);
  };

  const deleteConversation = (id: string) => {
    setConversations((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      if (activeConversationId === id && filtered.length > 0) {
        setActiveConversationId(filtered[0].id);
      }
      return filtered;
    });
  };

  const renameConversation = (id: string, newTitle: string) => {
    if (isTemporary && temporaryChat) {
      setTemporaryChat({ ...temporaryChat, title: newTitle });
      return;
    }
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, title: newTitle } : c))
    );
  };

  const toggleTemporary = () => {
    setIsTemporary((prev) => {
      const nextState = !prev;
      if (nextState) {
        // Switching to temporary: initialize an isolated temporary conversation
        setTemporaryChat({
          id: `temp-${Date.now()}`,
          title: "Temporary Analysis",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          temporary: true,
          category: "Today",
          messages: [],
        });
      } else {
        // Switching back to standard: clear ephemeral chat
        setTemporaryChat(null);
      }
      return nextState;
    });
  };

  const sendMessage = (content: string, attachments: Attachment[] = []) => {
    if (!content.trim() && attachments.length === 0) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}-u`,
      role: "user",
      content: content.trim(),
      timestamp: new Date().toISOString(),
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    if (isTemporary) {
      const currentTemp = temporaryChat || {
        id: `temp-${Date.now()}`,
        title: "Temporary Analysis",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        temporary: true,
        category: "Today",
        messages: [],
      };

      const isFirst = currentTemp.messages.length === 0;
      const derivedTitle = isFirst
        ? content.trim().slice(0, 25) || "Temporary Analysis"
        : currentTemp.title;

      const updatedTemp: Conversation = {
        ...currentTemp,
        title: isFirst ? derivedTitle : currentTemp.title,
        updatedAt: new Date().toISOString(),
        messages: [...currentTemp.messages, userMessage],
      };

      setTemporaryChat(updatedTemp);
      setIsStreaming(true);

      // Generate response for temporary chat
      setTimeout(() => {
        const hasSar = attachments.some((a) => a.sensor?.includes("SAR") || a.name.toLowerCase().includes("sar"));
        const hasMultiple = attachments.length >= 2;

        let assistantResponse: Message;

        if (hasSar || content.toLowerCase().includes("sar")) {
          assistantResponse = {
            id: `msg-${Date.now()}-a`,
            role: "assistant",
            content: "Multimodal SAR analysis processed in temporary session.\n\nSentinel-1 C-band specular backscatter calibrated at -22.4 dB, isolating water accumulation boundaries without saving history logs.",
            timestamp: new Date().toISOString(),
            analysisTrace: {
              task: "Ephemeral SAR Backscatter Evaluation",
              sensor: "Sentinel-1 C-Band SAR",
              models: ["TerraMind", "GeoChat"],
              confidence: 0.91,
              confidenceTier: "High",
              outputType: "Temporary Specular Mask",
              executionSteps: [
                { name: "Radiometric Sigma0 Calibration", status: "completed", durationMs: 220, description: "Normalized radar backscatter in volatile memory." },
                { name: "Lee Speckle Filtering", status: "completed", durationMs: 180, description: "Suppressed high-frequency radar noise." }
              ]
            },
            evidence: {
              sourceImage: SATELLITE_IMAGES.sarRadar,
              metrics: [
                { label: "Session Mode", value: "Temporary", change: "Unsaved" },
                { label: "Confidence", value: "91%", change: "High" }
              ]
            }
          };
        } else if (hasMultiple || content.toLowerCase().includes("change")) {
          assistantResponse = {
            id: `msg-${Date.now()}-a`,
            role: "assistant",
            content: "Bi-temporal change analysis executed in temporary session.\n\nIdentified 9.8 hectares of altered land surface across the provided timestamps.",
            timestamp: new Date().toISOString(),
            analysisTrace: {
              task: "Temporary Bi-Temporal Change Detection",
              sensor: "Sentinel-2 MSI (10m)",
              models: ["Change Detection Model", "GeoChat"],
              confidence: 0.88,
              confidenceTier: "High",
              outputType: "Temporary Change Mask",
              executionSteps: [
                { name: "Sub-pixel Coregistration", status: "completed", durationMs: 190, description: "Aligned tie-points in ephemeral RAM buffer." },
                { name: "Deep Feature Differential Mapping", status: "completed", durationMs: 460, description: "Extracted structural variance." }
              ]
            },
            evidence: {
              sourceImage: SATELLITE_IMAGES.puneBefore,
              changeMask: SATELLITE_IMAGES.puneChangeMask,
              metrics: [
                { label: "Changed Area", value: "9.8 ha", change: "Detected" },
                { label: "Session Status", value: "Temporary", change: "No Log" }
              ]
            }
          };
        } else {
          assistantResponse = {
            id: `msg-${Date.now()}-a`,
            role: "assistant",
            content: "Temporary query completed. Scene inspection indicates balanced urban and vegetative coverage with grounded bounding boxes.",
            timestamp: new Date().toISOString(),
            analysisTrace: {
              task: "Temporary VQA & Spatial Inspection",
              sensor: "Sentinel-2 MSI",
              models: ["GeoChat"],
              confidence: 0.89,
              confidenceTier: "High",
              outputType: "Temporary Grounded Boxes",
              executionSteps: [
                { name: "Visual Feature Extraction", status: "completed", durationMs: 240, description: "Executed zero-shot VQA on temporary input raster." }
              ]
            },
            evidence: {
              sourceImage: attachments[0]?.url || SATELLITE_IMAGES.puneBefore,
              metrics: [
                { label: "Confidence", value: "89%", change: "High" },
                { label: "Mode", value: "Temporary", change: "Private" }
              ]
            }
          };
        }

        setTemporaryChat((prev) =>
          prev
            ? {
                ...prev,
                updatedAt: new Date().toISOString(),
                messages: [...prev.messages, assistantResponse],
              }
            : null
        );
        setIsStreaming(false);
      }, 1000);

      return;
    }

    // Standard persistent conversation flow
    let targetChatId = activeConversationId;
    if (!activeConversation) {
      targetChatId = createNewConversation();
    }

    const isFirstMessage = (activeConversation?.messages.length || 0) === 0;
    const derivedTitle = isFirstMessage
      ? content.trim().slice(0, 30) || (attachments[0]?.name ? `Analysis: ${attachments[0].name.slice(0, 20)}` : "Satellite Analysis")
      : activeConversation?.title || "Satellite Query";

    setConversations((prev) =>
      prev.map((c) =>
        c.id === targetChatId
          ? {
              ...c,
              title: isFirstMessage ? derivedTitle : c.title,
              updatedAt: new Date().toISOString(),
              messages: [...c.messages, userMessage],
            }
          : c
      )
    );

    setIsStreaming(true);

    setTimeout(() => {
      const hasMultipleImages = attachments.length >= 2;
      const hasSar = attachments.some((a) => a.sensor?.includes("SAR") || a.name.toLowerCase().includes("sar"));
      const isChangeQuery = content.toLowerCase().includes("change") || hasMultipleImages;

      let assistantResponse: Message;

      if (hasSar || content.toLowerCase().includes("sar") || content.toLowerCase().includes("cloud")) {
        assistantResponse = {
          id: `msg-${Date.now()}-a`,
          role: "assistant",
          content: "Multimodal analysis with Sentinel-1 C-band SAR backscatter resolved ground features despite atmospheric interference.\n\nSpecular surface scattering isolates 285 hectares of high-moisture/water accumulation, while high-dielectric structures indicate preserved infrastructure.",
          timestamp: new Date().toISOString(),
          analysisTrace: {
            task: "Multimodal SAR + Optical Analysis",
            sensor: "Sentinel-1 C-Band SAR + Sentinel-2 MSI",
            models: ["TerraMind", "GeoChat"],
            confidence: 0.91,
            confidenceTier: "High",
            outputType: "SAR Backscatter Calibration + Surface Analysis",
            executionSteps: [
              { name: "Radiometric Sigma0 Calibration", status: "completed", durationMs: 280, description: "Normalized antenna gain and converted complex radar values to decibels." },
              { name: "Speckle Suppression Filter", status: "completed", durationMs: 190, description: "Applied enhanced Lee filter over 5x5 window to sharpen water boundaries." },
              { name: "Multimodal Feature Alignment", status: "completed", durationMs: 420, description: "Coregistered SAR backscatter with optical base layer." }
            ]
          },
          evidence: {
            sourceImage: SATELLITE_IMAGES.sarRadar,
            highlightedImage: SATELLITE_IMAGES.fusedMultimodal,
            metrics: [
              { label: "Detected Zone", value: "285 ha", change: "Quantified" },
              { label: "Confidence", value: "91%", change: "High" }
            ]
          }
        };
      } else if (isChangeQuery) {
        assistantResponse = {
          id: `msg-${Date.now()}-a`,
          role: "assistant",
          content: "Temporal change analysis detected 9.8 hectares of newly altered land surface between the provided imagery acquisitions.\n\nDeep feature difference extraction highlights converted parcels in the northern quadrant, with coregistered accuracy under 0.2 pixels.",
          timestamp: new Date().toISOString(),
          analysisTrace: {
            task: "Bi-Temporal Change Detection",
            sensor: "Sentinel-2 MSI (10m)",
            models: ["Change Detection Model", "GeoChat"],
            confidence: 0.88,
            confidenceTier: "High",
            outputType: "Change Map + Quantification",
            executionSteps: [
              { name: "Sub-pixel Radiometric Coregistration", status: "completed", durationMs: 210, description: "Matched tie-points across both imagery timestamps." },
              { name: "Deep Feature Differential Mapping", status: "completed", durationMs: 540, description: "Extracted persistent structural differences using Change Detection Model." },
              { name: "Area Metric Integration", status: "completed", durationMs: 160, description: "Computed 9.8 ha net spatial transformation." }
            ]
          },
          changeAnalysis: {
            beforeImage: attachments[0]?.url || SATELLITE_IMAGES.puneBefore,
            afterImage: attachments[1]?.url || SATELLITE_IMAGES.puneAfter,
            changeMaskImage: SATELLITE_IMAGES.puneChangeMask,
            beforeDate: attachments[0]?.date || "Acquisition T1",
            afterDate: attachments[1]?.date || "Acquisition T2",
            sensor: "Sentinel-2",
            areaHa: 9.8,
            changeType: "Surface Conversion / Structural Development",
            summary: "9.8 ha net surface expansion localized in northern sector.",
            detectedClasses: [
              { name: "New Built Structures", areaHa: 6.4, percentage: 65 },
              { name: "Ground Clearance / Excavation", areaHa: 3.4, percentage: 35 }
            ]
          },
          evidence: {
            sourceImage: attachments[0]?.url || SATELLITE_IMAGES.puneBefore,
            highlightedImage: SATELLITE_IMAGES.puneChangeMask,
            metrics: [
              { label: "Net Alteration", value: "9.8 ha", change: "Detected" },
              { label: "Confidence", value: "88%", change: "High" }
            ]
          }
        };
      } else {
        assistantResponse = {
          id: `msg-${Date.now()}-a`,
          role: "assistant",
          content: "Inspection of the satellite imagery indicates a mixed landscape with high-density urban developments, agricultural parcels, and active transport corridors.\n\nGeoChat spatial grounding extracted key infrastructure clusters with normalized coordinates. Spectral indices confirm vegetative vigor in adjacent green zones with an estimated mean NDVI of 0.64.",
          timestamp: new Date().toISOString(),
          analysisTrace: {
            task: "Visual Question Answering & Feature Extraction",
            sensor: "Sentinel-2 MSI",
            models: ["GeoChat", "Prithvi-EO"],
            confidence: 0.89,
            confidenceTier: "High",
            outputType: "Grounded Features + Spectral Indices",
            executionSteps: [
              { name: "Spatial Tile Segmentation", status: "completed", durationMs: 160, description: "Segmented AOI into 512x512 sub-tiles for full-resolution attention." },
              { name: "GeoChat Vision-Language Grounding", status: "completed", durationMs: 460, description: "Extracted bounding coordinates for identified infrastructure and land cover classes." }
            ]
          },
          evidence: {
            sourceImage: attachments[0]?.url || SATELLITE_IMAGES.puneBefore,
            boundingBoxes: [
              { id: "b1", label: "Urban Sector", confidence: 0.93, coordinates: [18, 20, 52, 60] },
              { id: "b2", label: "Vegetative Buffer", confidence: 0.88, coordinates: [55, 10, 85, 45] }
            ],
            metrics: [
              { label: "Mean NDVI", value: "0.64", change: "Healthy" },
              { label: "Confidence", value: "89%", change: "High" }
            ]
          }
        };
      }

      setConversations((prev) =>
        prev.map((c) =>
          c.id === targetChatId
            ? {
                ...c,
                updatedAt: new Date().toISOString(),
                messages: [...c.messages, assistantResponse],
              }
            : c
        )
      );
      setIsStreaming(false);
    }, 1200);
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversationId,
        activeConversation,
        setActiveConversationId: handleSetActiveConversationId,
        createNewConversation,
        deleteConversation,
        renameConversation,
        sendMessage,
        isTemporary,
        toggleTemporary,
        isSidebarOpen,
        setIsSidebarOpen,
        shareModalOpen,
        setShareModalOpen,
        evidenceModalData,
        setEvidenceModalData,
        isStreaming,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
