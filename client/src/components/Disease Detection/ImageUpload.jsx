import React, { useState } from "react";
import { Upload, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept=".jpg,.png,.webp"
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
            <Button disabled={!selectedFile} className="w-full">
              Detect Plant Disease
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUpload;
