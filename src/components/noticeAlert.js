import React from "react";
import {
  CheckCircleIcon,
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";

const NoticeAlert = ({
  message,
  onClose,
  color = "green",
  icon: Icon = CheckCircleIcon,
}) => {
  const bgColor = classNames({
    "bg-green-50": color === "green",
    "bg-yellow-50": color === "yellow",
    "bg-red-50": color === "red",
  });

  const textColor = classNames({
    "text-green-800": color === "green",
    "text-yellow-800": color === "yellow",
    "text-red-800": color === "red",
  });

  const iconColor = classNames({
    "text-green-400": color === "green",
    "text-yellow-400": color === "yellow",
    "text-red-400": color === "red",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`rounded-md ${bgColor} p-6`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon aria-hidden="true" className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="ml-4">
            <p className={`text-lg font-medium ${textColor}`}>{message}</p>
          </div>
          <div className="ml-auto pl-4">
            <div className="-mx-2 -my-2">
              <button
                type="button"
                className={`inline-flex rounded-md ${bgColor} p-2 ${textColor} hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-${color}-600 focus:ring-offset-2 focus:ring-offset-${color}-50`}
                onClick={onClose}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeAlert;
