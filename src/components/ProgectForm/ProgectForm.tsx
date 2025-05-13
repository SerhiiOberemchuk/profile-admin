"use client";

import { InputHTMLAttributes, useEffect } from "react";
import { SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form";
import ProgectImage from "./ProgectImage";

export type FormValues = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image_src: string;
  description: string;
  technologies: string[];
  features: string[];
  year: string;
  client: string;
  website_url: string;
  created_at: Date | null | undefined;
  updated_at: Date | null | undefined;
};

export default function ProgectForm({
  id,
  type,
}: {
  id?: number;
  type: "create" | "update";
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: 0,
      slug: "",
      title: "",
      category: "",
      image_src: "",
      description: "",
      technologies: [],
      features: [],
      year: "",
      client: "",
      website_url: "",
      created_at: null,
      updated_at: null,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  useEffect(() => {
    if (type === "create") return;
    try {
      const fetchData = async () => {
        const res = await fetch(`/api/progect/${id}`, { method: "GET" });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const progect = await res.json();
        setValue("id", progect.id);
        setValue("slug", progect.slug);
        setValue("title", progect.title);
        setValue("category", progect.category);
        setValue("image_src", progect.image_src);
        setValue("description", progect.description);
        setValue("technologies", progect.technologies);
        setValue("features", progect.features);
        setValue("year", progect.year);
        setValue("client", progect.client);
        setValue("website_url", progect.website_url);
        setValue("created_at", progect.created_at);
        setValue("updated_at", progect.updated_at);

        console.log(progect);
        return progect;
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 p-4">
      {/* <ProgectImage id={id} image_src={image_src} /> */}
      <div className="flex gap-4">
        <div className="">
          <FormInput
            register={register("title")}
            label="title"
            error={errors.title?.message}
          />
          <FormInput
            type="number"
            disabled={true}
            register={register("id")}
            label="id"
            error={errors.id?.message}
          />
          <FormInput
            register={register("slug")}
            label="slug"
            error={errors.slug?.message}
          />
        </div>
        <div className="flex-1">
          <FormInput
            register={register("year")}
            label="year"
            error={errors.year?.message}
          />
          <FormInput
            register={register("client")}
            label="client"
            error={errors.client?.message}
          />
          <FormInput
            type="url"
            register={register("website_url")}
            label="website_url"
            error={errors.website_url?.message}
          />
        </div>
        <div className="flex-1">
          <FormInput
            register={register("category")}
            label="category"
            error={errors.category?.message}
          />
          <FormInput
            register={register("description")}
            label="description"
            error={errors.description?.message}
          />
          <FormInput
            register={register("technologies")}
            label="technologies"
            error={errors.technologies?.message}
          />
        </div>
      </div>

      <FormInput
        register={register("features")}
        label="features"
        error={errors.features?.message}
      />

      <FormInput
        type="url"
        register={register("image_src")}
        label="image_src"
        error={errors.image_src?.message}
      />
      <div className="flex justify-end">
        <FormInput
          type="url"
          disabled={true}
          register={register("created_at")}
          label="created_at"
        />{" "}
        <FormInput
          type="url"
          disabled={true}
          register={register("updated_at")}
          label="updated_at"
        />
      </div>
      <button
        type="submit"
        className="mt-4 rounded-md border border-green-900 bg-green-300 px-8 py-4 font-bold text-white hover:bg-green-600"
      >
        Save
      </button>
    </form>
  );
}
type FormInputProps = {
  label: string;
  register: UseFormRegisterReturn;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};
export function FormInput({
  label,
  register,
  type = "text",
  placeholder,
  error,
  disabled = false,
}: FormInputProps) {
  return (
    <div className="mt-2 flex flex-col">
      <label className="mr-auto max-w-fit rounded-tl rounded-tr border-t border-r border-l border-gray-500 bg-gray-300 p-1 font-medium">
        {label}
      </label>
      <input
        disabled={disabled}
        {...register}
        type={type}
        placeholder={placeholder}
        className="rounded-r rounded-bl border border-gray-500 px-3 py-2 text-black"
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
