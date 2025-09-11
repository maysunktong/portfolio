type StatusType = "lia" | "on-lia" | "available" | "employed";

interface StatusIndicatorProps {
  status: StatusType;
}

const statusConfig: Record<
  StatusType,
  {
    label: string;
    colorClasses: { bg: string; ping: string; borderColor: string; textColor: string };
  }
> = {
  lia: {
    label: "Looking for LIA",
    colorClasses: {
      bg: "bg-yellow-400",
      ping: "bg-yellow-400",
      borderColor: "border-yellow-300",
      textColor: "text-yellow-500"
    },
  },
  "on-lia": {
    label: "On LIA (internship)",
    colorClasses: {
      bg: "bg-blue-400",
      ping: "bg-blue-400",
      borderColor: "border-blue-400",
      textColor: "text-blue-400"
    },
  },
  available: {
    label: "Available for hiring",
    colorClasses: {
      bg: "bg-green-500",
      ping: "bg-green-500",
      borderColor: "border-green-400",
      textColor: "text-green-400"
    },
  },
  employed: {
    label: "Hired",
    colorClasses: {
      bg: "bg-gray-500",
      ping: "bg-gray-500",
      borderColor: "border-gray-400",
      textColor: "text-gray-400"
    },
  },
};

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const { label, colorClasses } = statusConfig[status];

  return (
    <div
      className={`flex items-center gap-3 rounded-3xl border-1 border-dotted ${colorClasses.borderColor} py-1 px-3 w-fit`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <span
          className={`absolute inline-block w-full h-full rounded-full opacity-70 animate-ping ${colorClasses.ping}`}
        ></span>
        <span
          className={`relative inline-block w-3 h-3 rounded-full ${colorClasses.bg}`}
        ></span>
      </div>
      <span className={`font-medium ${colorClasses.textColor}`}>{label}</span>
    </div>
  );
}
