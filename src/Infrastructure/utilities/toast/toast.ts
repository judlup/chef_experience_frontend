import { toast, ToastContent } from "react-toastify"

export function toastSuccess(message: string) {
  toast.success(message)
}

export function toastError(message: string) {
  toast.error(message)
}

export function toastWarning(message: string) {
  toast.warning(message)
}

export function toastInfo(message: ToastContent<unknown>) {
  toast.info(message)
}
