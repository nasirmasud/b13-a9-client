// "use client";

// import { Button, DateField, Label } from "@heroui/react";
// import { parseDate } from "@internationalized/date";
// import { useState } from "react";
// import { FiCalendar, FiClock, FiDollarSign, FiX } from "react-icons/fi";

// const BookingModal = ({ tutorName, hourlyFee, tutorId, availability, tutorStartDate }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const defaultDateString = tutorStartDate || "2026-05-25";
//   const [selectedDate, setSelectedDate] = useState(parseDate(defaultDateString));

//   const handleConfirmBooking = async () => {
//     if (!selectedDate) {
//       alert("দয়া করে একটি বুকিং ডেট সিলেক্ট করুন!");
//       return;
//     }

//     const formattedDate = new Date(
//       selectedDate.year,
//       selectedDate.month - 1,
//       selectedDate.day
//     );

//     const bookingData = {
//       tutorId,
//       tutorName,
//       fee: hourlyFee,
//       bookingDate: formattedDate,
//     };

//     console.log("Final Booking Data Sent to DB:", bookingData);

//     try {
//       const res = await fetch("http://localhost:5000/booking", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (res.ok) {
//         alert("আপনার অ্যাপয়েন্টমেন্ট বুকিং সফল হয়েছে!");
//         setIsOpen(false);
//       } else {
//         alert("বুকিং ব্যর্থ হয়েছে, আবার চেষ্টা করুন।");
//       }
//     } catch (error) {
//       console.error("Booking Error:", error);
//       alert("সার্ভার কানেকশন পাওয়া যায়নি!");
//     }
//   };

//   return (
//     <>
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-full shadow-lg transition-all"
//       >
//         Book Appointment Now
//       </Button>

//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">

//           {/* 🛠️ থিম ফিক্স: এখানে ফোর্সেড 'light text-black bg-white' ক্লাস দিয়ে দেওয়া হয়েছে যাতে গ্লোবাল থিম কনফ্লিক্ট না করে */}
//           <div className="light relative w-full max-w-md bg-white text-black border border-gray-200 rounded-3xl shadow-2xl overflow-hidden transition-all">

//             {/* ক্লোজ বাটন */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
//             >
//               <FiX className="w-5 h-5" />
//             </button>

//             {/* হেডার */}
//             <div className="p-6 border-b border-gray-100 bg-white">
//               <h3 className="text-xl font-bold text-gray-900">Confirm Your Appointment</h3>
//               <p className="text-xs text-gray-500 font-normal mt-1">Review details and pick your preferred date</p>
//             </div>

//             {/* বডি */}
//             <div className="p-6 space-y-5 bg-white">
//               {/* সামরি কার্ড */}
//               <div className="p-4 bg-gray-50 rounded-2xl space-y-2.5 text-sm border border-gray-100">
//                 <div className="flex justify-between">
//                   <span className="text-gray-500">Tutor Name:</span>
//                   <span className="font-bold text-gray-900">{tutorName}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-500 flex items-center gap-1.5"><FiClock /> Availability:</span>
//                   <span className="font-semibold text-gray-700">{availability}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-500 flex items-center gap-1.5"><FiDollarSign /> Hourly Fee:</span>
//                   <span className="font-bold text-indigo-600">৳{hourlyFee}/hr</span>
//                 </div>
//               </div>

//               {/* 📅 DateField (ফোর্সেড লাইট মোড কালারসহ) */}
//               <div className="space-y-2 flex flex-col bg-white">
//                 <DateField
//                   defaultValue={parseDate(defaultDateString)}
//                   onChange={setSelectedDate}
//                   className="w-full text-gray-900 light"
//                   name="date"
//                   variant="bordered"
//                 >
//                   <Label className="text-sm font-bold text-gray-700 flex items-center gap-1.5 mb-1">
//                     <FiCalendar className="text-indigo-500" /> Session Start Date
//                   </Label>
//                   <DateField.Group className="border border-gray-200 rounded-xl p-2 bg-white text-gray-900">
//                     <DateField.Input>
//                       {(segment) => (
//                         <DateField.Segment
//                           segment={segment}
//                           className="text-gray-900 data-[placeholder=true]:text-gray-400 focus:bg-indigo-50 font-medium"
//                         />
//                       )}
//                     </DateField.Input>
//                   </DateField.Group>
//                 </DateField>
//               </div>
//             </div>

//             {/* ফুটার */}
//             <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
//               <Button
//                 variant="flat"
//                 color="danger"
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300"
//               >
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleConfirmBooking}
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md px-6"
//               >
//                 Confirm Booking
//               </Button>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookingModal;

"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import { FiCalendar, FiClock, FiDollarSign, FiX } from "react-icons/fi";

const BookingModal = ({ tutorName, hourlyFee, tutorId, availability, tutorStartDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // সেশন থেকে ইউজার ডাটা নেওয়া
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const defaultDateString = tutorStartDate || "2026-05-25";
  const [selectedDate, setSelectedDate] = useState(parseDate(defaultDateString));

  const handleConfirmBooking = async () => {
    if (!selectedDate) {
      alert("দয়া করে একটি বুকিং ডেট সিলেক্ট করুন!");
      return;
    }

    if (!user) {
      alert("বুকিং করার জন্য দয়া করে আগে লগইন করুন!");
      return;
    }

    const formattedDate = new Date(
      selectedDate.year,
      selectedDate.month - 1,
      selectedDate.day
    );

    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      tutorId,
      tutorName,
      fee: hourlyFee,
      bookingDate: formattedDate,
    };

    console.log(bookingData);


    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        alert("আপনার অ্যাপয়েন্টমেন্ট বুকিং সফল হয়েছে!");
        setIsOpen(false);
      } else {
        alert("বুকিং ব্যর্থ হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("সার্ভার কানেকশন পাওয়া যায়নি!");
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-full shadow-lg transition-all"
      >
        Book Appointment Now
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">

          {/* 🛠️ ফিক্সড লাইট কন্টেনার: 'light' ক্লাস জোর করে বসানো এবং কোন 'dark:' ক্লাসের অস্তিত্ব নাই */}
          <div className="light relative w-full max-w-md bg-white text-gray-900 border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">

            {/* ক্লোজ বাটন */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* হেডার */}
            <div className="p-6 border-b border-gray-100 bg-white">
              <h3 className="text-xl font-bold text-gray-900">Confirm Your Appointment</h3>
              <p className="text-xs text-gray-500 font-normal mt-1">Review details and pick your preferred date</p>
            </div>

            {/* বডি */}
            <div className="p-6 space-y-5 bg-white">
              {/* সামরি কার্ড */}
              <div className="p-4 bg-gray-50 rounded-2xl space-y-2.5 text-sm border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tutor Name:</span>
                  <span className="font-bold text-gray-900">{tutorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5"><FiClock /> Availability:</span>
                  <span className="font-semibold text-gray-700">{availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5"><FiDollarSign /> Hourly Fee:</span>
                  <span className="font-bold text-indigo-600">৳{hourlyFee}/hr</span>
                </div>
              </div>

              {/* 📅 DateField (পিওর লাইট স্টাইল) */}
              <div className="space-y-2 flex flex-col bg-white">
                <DateField
                  defaultValue={parseDate(defaultDateString)}
                  onChange={setSelectedDate}
                  className="w-full text-gray-900 light"
                  name="date"
                  variant="bordered"
                >
                  <Label className="text-sm font-bold text-gray-700 flex items-center gap-1.5 mb-1">
                    <FiCalendar className="text-indigo-500" /> Session Start Date
                  </Label>
                  <DateField.Group className="border border-gray-200 rounded-xl p-2 bg-white text-gray-900">
                    <DateField.Input>
                      {(segment) => (
                        <DateField.Segment
                          segment={segment}
                          className="text-gray-900 data-[placeholder=true]:text-gray-400 focus:bg-indigo-50 font-medium rounded"
                        />
                      )}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>
            </div>

            {/* ফুটার */}
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/80">
              <Button
                variant="flat"
                onClick={() => setIsOpen(false)}
                className="rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmBooking}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md px-6"
              >
                Confirm Booking
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;