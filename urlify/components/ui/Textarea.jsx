// components/ui/textarea.js

export function Textarea({ placeholder, onChange, value }) {
    return (
      <textarea
        placeholder={placeholder}
        className="w-full p-2 border rounded"
        onChange={onChange}
        value={value}
      />
    );
  }
  