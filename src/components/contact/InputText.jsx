export default function InputText({label,type = "text",placeholder,value,onChange,}) {
    return (
        <div>
            <label className="block text-small mb-2">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent border border-muted rounded-full px-4 py-3 text-small outline-none focus:border-blue-mid"
            />
        </div>
    );
}