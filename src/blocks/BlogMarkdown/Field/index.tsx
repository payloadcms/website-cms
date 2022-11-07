import React from 'react';
import Textarea from 'payload/dist/admin/components/forms/field-types/Textarea'
import './index.scss';

export const BlogMarkdownField: React.FC<{ path: string, name: string }> = ({ path, name }) => {

  return (
    <div className="markdown">
      <Textarea path={path} name={name} required />
    </div>
  )
}