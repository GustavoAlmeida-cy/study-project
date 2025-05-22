"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/sections/data_table/colum-header";
import { Link as LinkIcon } from "lucide-react";

// Tipo atualizado
export type Course = {
  id: string;
  institution: string;
  course: string;
  quality: "⭐⭐⭐⭐⭐" | "⭐⭐⭐⭐" | "⭐⭐⭐" | "⭐⭐" | "⭐";
  area: string;
  link: string;
};

export const columnsCourses: ColumnDef<Course>[] = [
  {
    accessorKey: "institution",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Instituição" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">
        {row.getValue("institution")}
      </div>
    ),
  },
  {
    accessorKey: "course",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Curso" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("course")}</div>
    ),
  },
  {
    accessorKey: "quality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Qualidade" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("quality")}</div>
    ),
  },
  {
    accessorKey: "area",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Área de Atuação" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("area")}</div>
    ),
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link" />
    ),
    cell: ({ row }) => {
      const url = row.getValue("link") as string;
      return (
        <div className="flex items-center justify-center">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="w-4 h-4 text-blue-600 hover:text-blue-800" />
          </a>
        </div>
      );
    },
  },
];
