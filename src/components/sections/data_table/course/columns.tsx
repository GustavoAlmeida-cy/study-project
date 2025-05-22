"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/sections/data_table/colum-header";
import { Link as LinkIcon } from "lucide-react"; // renomeado para evitar conflito

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type College = {
  id: string;
  college: string;
  type: "Estadual" | "Municipal";
  cost: "Grátis" | "Pago";
  students: string;
  entrances: string;
  quality: "⭐⭐⭐⭐⭐" | "⭐⭐⭐⭐" | "⭐⭐⭐" | "⭐⭐" | "⭐";
  focus: string;
  link: string;
};

export const columns: ColumnDef<College>[] = [
  {
    accessorKey: "college",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Faculdade" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("college")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "cost",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Custo" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("cost")}</div>
    ),
  },
  {
    accessorKey: "students",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estudantes" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("students")}</div>
    ),
  },
  {
    accessorKey: "entrances",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ingressão" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("entrances")}</div>
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
    accessorKey: "focus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Foco" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("focus")}</div>
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
