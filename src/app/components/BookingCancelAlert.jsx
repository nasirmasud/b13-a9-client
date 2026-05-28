"use client";

import { fetchTutorBookings } from "@/lib/tutor-bookings-api.client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function BookingCancelAlert({ bookingId, onCancel }) {

  const handleCancelBooking = async () => {
    const toastId = toast.loading("Cancelling booking...");
    try {
      const res = await fetchTutorBookings(`/${bookingId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      window.location.reload()

      if (data.deletedCount > 0) {
        toast.success("Booking cancelled successfully!", { id: toastId });
        setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.error("Failed to cancel booking.", { id: toastId });
      }
    } catch {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}