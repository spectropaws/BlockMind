import React, { useState } from "react";
import { Upload, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { imageUploadSchema } from "@/zod-schemas/imageUploadSchema";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(imageUploadSchema),
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileURL(URL.createObjectURL(file));
    setValue("image", file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setFileURL(URL.createObjectURL(file));
    setValue("image", file);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <form id="disease-detect-form" onSubmit={handleSubmit(onSubmit)}>
            {selectedFile ? (
              <div>
                <img src={fileURL} alt={"file"} />
              </div>
            ) : (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".jpeg,.jpg,.png,.webp"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-green-600 mb-4" />
                  <p className="text-lg font-semibold mb-2">
                    Drag and drop your image here or click to browse
                  </p>
                  <p className="text-muted-foreground">
                    Supports JPG, PNG, WEBP (max 10MB)
                  </p>
                </label>
              </div>
            )}
            {errors.image && (
              <p className="text-red-500 text-center text-lg my-2">{errors.image.message}</p>
            )}
            <div className="mt-6 text-center">
              {selectedFile ? (
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-muted-foreground">
                    {selectedFile.name}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFile(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <p className="text-muted-foreground">No Image Selected</p>
              )}
            </div>

            <div className="mt-6 text-center">
              <Button
                disabled={!selectedFile}
                className="w-full"
                form="disease-detect-form"
              >
                Detect Plant Disease
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUpload;
