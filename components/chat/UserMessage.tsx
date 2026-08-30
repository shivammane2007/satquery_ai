import React from "react";
import { Message } from "@/lib/types";
import { User, FileText, Image as ImageIcon } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface UserMessageProps {
  message: Message;
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex flex-col items-end gap-2 max-w-3xl ml-auto w-full group">
      {/* Attached Images Chips */}
      {message.attachments && message.attachments.length > 0 && (
        <div className="flex flex-wrap justify-end gap-2 mb-1">
          {message.attachments.map((att) => (
            <div
              key={att.id}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-[#171717] border border-[#2e2e2e] shadow-subtle max-w-[280px]"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#0d0d0d] border border-[#333333] shrink-0">
                <img
                  src={att.url}
                  alt={att.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pr-1">
                <p className="text-xs font-medium text-white truncate">{att.name}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-mono">
                  {att.sensor && <span>{att.sensor}</span>}
                  {att.resolution && <span>• {att.resolution}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Bubble */}
      <div className="bg-[#212121] text-white px-4 py-3 rounded-2xl rounded-tr-sm border border-[#2e2e2e] text-sm leading-relaxed max-w-[85%] sm:max-w-[75%] shadow-subtle">
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>

      <span className="text-[10px] text-[#525252] font-mono pr-1">
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
}
