import React from "react";
import "./PreviewItem.css"

export interface PreviewItemInterface {
  title: string;
  description: string;
}

const PreviewItem: React.FC<PreviewItemInterface> = ({ title, description }) => {
  return (
    <div className="previewItemWrapper">
      <span className="title">{title}</span>
      <p className="description">{description}</p>
    </div>
  )
}

export default PreviewItem