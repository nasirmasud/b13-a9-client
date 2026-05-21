"use client";

import { Calendar, GraduationCap, Settings, Star, Stethoscope, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MyTutorsList({ initialTutors }) {
  const [tutors, setTutors] = useState(initialTutors);
  const [editingTutor, setEditingTutor] = useState(null);
  const [deletingTutor, setDeletingTutor] = useState(null);
  const [formData, setFormData] = useState({});

  const openEditModal = (tutor) => {
    setEditingTutor(tutor);
    setFormData({
      tutorName: tutor.tutorName,
      subject: tutor.subject,
      hourlyFee: tutor.hourlyFee,
      availability: tutor.availability,
      teachingMode: tutor.teachingMode,
      district: tutor.district,
      address: tutor.address,
      institution: tutor.institution,
      experienceYears: tutor.experienceYears,
      image: tutor.image,
      totalSlot: tutor.totalSlot,
    });
  };

  const handleUpdate = async () => {
    const toastId = toast.loading("Updating tutor...");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors/${editingTutor._id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        setTutors((prev) =>
          prev.map((t) =>
            t._id === editingTutor._id ? { ...t, ...formData } : t
          )
        );
        setEditingTutor(null);
        toast.success("Tutor updated successfully!", { id: toastId });
      } else {
        toast.error("No changes were made.", { id: toastId });
      }
    } catch {
      toast.error("Failed to update tutor.", { id: toastId });
    }
  };

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting tutor...");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tutors/${deletingTutor._id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        setTutors((prev) => prev.filter((t) => t._id !== deletingTutor._id));
        setDeletingTutor(null);
        toast.success("Tutor deleted successfully!", { id: toastId });
      } else {
        toast.error("Failed to delete tutor.", { id: toastId });
      }
    } catch {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-100 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                {tutor.image ? (
                  <Image src={tutor.image} alt={tutor.tutorName} fill sizes="56px" className="object-cover" />
                ) : (
                  <Stethoscope className="w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                  {tutor.tutorName}
                </h3>
                <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-3.5 h-3.5" /> {tutor.subject || "Medical Expert"}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-zinc-400 sm:items-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Exp: <span className="font-medium text-gray-700 dark:text-zinc-300">{tutor.experienceYears || "2"}+ Years</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Mode: <span className="text-gray-700 dark:text-zinc-300 font-bold">{tutor.teachingMode || "Online"}</span></span>
              </div>
            </div>

            {/* Fee + Buttons */}
            <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50 dark:border-zinc-800/60">
              <div className="text-left sm:text-right">
                <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Hourly Fee</p>
                <p className="text-base font-black text-gray-900 dark:text-white flex items-baseline">
                  ৳{tutor.hourlyFee}<span className="text-[10px] font-medium text-gray-400 dark:text-zinc-500">/hr</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(tutor)}
                  className="flex items-center gap-1.5 text-xs font-bold border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3.5 py-2 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-zinc-700/60 shadow-sm"
                >
                  <Settings className="w-3.5 h-3.5" /> Edit
                </button>
                <button
                  onClick={() => setDeletingTutor(tutor)}
                  className="flex items-center gap-1.5 text-xs font-bold border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 px-3.5 py-2 rounded-xl transition-all hover:bg-red-100 dark:hover:bg-red-950/40 shadow-sm"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingTutor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-gray-100 dark:border-zinc-800">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900 dark:text-white">Update Tutor Info</h2>
              <button onClick={() => setEditingTutor(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Tutor Name", key: "tutorName" },
                { label: "Subject", key: "subject" },
                { label: "Hourly Fee (BDT)", key: "hourlyFee", type: "number" },
                { label: "Experience (Years)", key: "experienceYears", type: "number" },
                { label: "Availability", key: "availability" },
                { label: "Teaching Mode", key: "teachingMode" },
                { label: "District / City", key: "district" },
                { label: "Institution", key: "institution" },
                { label: "Total Slots", key: "totalSlot", type: "number" },
                { label: "Profile Image URL", key: "image" },
              ].map(({ label, key, type = "text" }) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={formData[key] || ""}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm text-gray-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition"
                  />
                </div>
              ))}

              {/* Address full width */}
              <div className="sm:col-span-2 flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">Address</label>
                <input
                  type="text"
                  value={formData.address || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-sm text-gray-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditingTutor(null)}
                className="px-5 py-2.5 text-sm font-bold rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-5 py-2.5 text-sm font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {deletingTutor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 border border-gray-100 dark:border-zinc-800">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-950/30 rounded-2xl flex items-center justify-center">
                <Trash2 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white">Delete Tutor?</h3>
              <p className="text-sm text-gray-400 dark:text-zinc-500 leading-relaxed">
                <span className="font-bold text-gray-700 dark:text-zinc-300">{deletingTutor.tutorName}</span> Are You Sure You Want To Delete
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setDeletingTutor(null)}
                className="px-5 py-2.5 text-sm font-bold rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2.5 text-sm font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/10 transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}