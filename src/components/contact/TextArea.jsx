export default function TextArea({label,placeholder,value,onChange,}) {
    return (
        <div>
            <label className="block text-small mb-2">
                {label}
            </label>

            <textarea
                rows={5}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent border border-muted rounded-2xl px-4 py-3 resize-none text-small outline-none focus:border-blue-mid"
            />
        </div>
    );
}