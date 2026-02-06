import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ErrorPopupProps {
    isOpen: boolean
    onClose: () => void
    title: string
    message: string
}

export const ErrorPopup = ({ isOpen, onClose, title, message }: ErrorPopupProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                <Button onClick={onClose}>Close</Button>
            </DialogContent>
        </Dialog>
    )
}