"use client";

import React, { useState, useRef, useEffect } from "react";
import { Conversation } from "@/lib/types";
import { useChat } from "@/components/providers/ChatContext";
import { MessageSquare, MoreHorizontal, Pencil, Trash2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
}

export function ConversationItem({ conversation, isActive }: ConversationItemProps) {
  const { setActiveConversationId, renameConversation, deleteConversation } = useChat();
  const [isEditing, setIsEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(conversation.title);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitleInput(conversation.title);
  }, [conversation.title]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleSaveRename = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (titleInput.trim()) {
      renameConversation(conversation.id, titleInput.trim());
    }
    setIsEditing(false);
    setMenuOpen(false);
  };

  const handleCancelRename = () => {
    setTitleInput(conversation.title);
    setIsEditing(false);
    setMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "group relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer select-none",
        isActive
          ? "bg-[#212121] text-white font-medium shadow-subtle"
          : "text-[#a3a3a3] hover:text-[#e5e5e5] hover:bg-[#171717]"
      )}
      onClick={() => {
        if (!isEditing) {
          setActiveConversationId(conversation.id);
        }
      }}
    >
      <MessageSquare className="w-4 h-4 shrink-0 opacity-70" />

      {isEditing ? (
        <form onSubmit={handleSaveRename} className="flex-1 flex items-center gap-1 z-10" onClick={(e) => e.stopPropagation()}>
          <input
            ref={inputRef}
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            className="w-full bg-[#121212] border border-[#333333] rounded px-1.5 py-0.5 text-xs text-white focus:outline-none focus:border-[#888888]"
          />
          <button
            type="submit"
            className="p-1 hover:text-white text-[#a3a3a3]"
            title="Save"
          >
            <Check className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCancelRename}
            className="p-1 hover:text-white text-[#a3a3a3]"
            title="Cancel"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </form>
      ) : (
        <span className="flex-1 truncate text-xs sm:text-sm">
          {conversation.title}
        </span>
      )}

      {!isEditing && (
        <div
          ref={menuRef}
          className="relative shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              "p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-[#303030] text-[#a3a3a3] hover:text-white transition-opacity",
              menuOpen && "opacity-100 bg-[#303030] text-white"
            )}
            title="Options"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-[#171717] border border-[#303030] rounded-lg shadow-card py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-[#d4d4d4] hover:text-white hover:bg-[#262626] transition-colors"
              >
                <Pencil className="w-3 h-3" />
                Rename
              </button>
              <button
                onClick={() => {
                  deleteConversation(conversation.id);
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-[#e57373] hover:text-[#ff8a80] hover:bg-[#262626] transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
