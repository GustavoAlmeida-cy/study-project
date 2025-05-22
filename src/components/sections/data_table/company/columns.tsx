"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/sections/data_table/colum-header";
import { Link as LinkIcon } from "lucide-react";

// Novo tipo baseado nos dados atualizados
export type Company = {
  id: string;
  company: string;
  type:
    | "Pública"
    | "Pública (Sistema S)"
    | "Pública (Estadual)"
    | "Privada"
    | "Privada (Fundação)"
    | "Privada (Banco)"
    | "Privada (Instituição de Ensino)"
    | "Privada (Tecnologia)"
    | "Privada (Plataforma)"
    | "Privado (Privado com bolsas)"
    | "Plataforma Online";
  cost: "Grátis" | "Grátis (via parcerias)" | "Grátis (via PSG)";
  students: string;
  entrances: string;
  quality: "⭐⭐⭐⭐⭐" | "⭐⭐⭐⭐" | "⭐⭐⭐" | "⭐⭐" | "⭐";
  focus: string;
  link: string;
};

export const columnsCompanies: ColumnDef<Company>[] = [
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Instituição" />
    ),
    cell: ({ row }) => (
      <div className="text-start font-medium">{row.getValue("company")}</div>
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
      <DataTableColumnHeader column={column} title="Ingresso" />
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
