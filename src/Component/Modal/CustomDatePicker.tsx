// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   FlatList,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// interface CustomDatePickerProps {
//   isVisible: boolean;
//   onClose: () => void;
//   onDateSelect: (date: string) => void;
// }

// const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
//   isVisible,
//   onClose,
//   onDateSelect,
// }) => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const daysInMonth = (month: number, year: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getDaysArray = () => {
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInCurrentMonth = daysInMonth(month, year);
//     const daysInPrevMonth = daysInMonth(month - 1, year);

//     const daysArray = [];

//     // Previous month's days
//     for (let i = firstDay - 1; i >= 0; i--) {
//       daysArray.push({ day: daysInPrevMonth - i, currentMonth: false });
//     }

//     // Current month's days
//     for (let i = 1; i <= daysInCurrentMonth; i++) {
//       daysArray.push({ day: i, currentMonth: true });
//     }

//     // Next month's days
//     const remainingDays = 42 - daysArray.length; // 6 rows * 7 days
//     for (let i = 1; i <= remainingDays; i++) {
//       daysArray.push({ day: i, currentMonth: false });
//     }

//     return daysArray;
//   };

//   const changeMonth = (increment: number) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(newDate.getMonth() + increment);
//     setCurrentDate(newDate);
//   };

//   const selectDate = (day: number) => {
//     const selectedDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       day
//     );
//     const formattedDate = selectedDate.toISOString().split('T')[0];
//     onDateSelect(formattedDate);
//     onClose();
//   };

//   const renderDay = ({ item }: { item: { day: number; currentMonth: boolean } }) => {
//     const isToday = item.currentMonth && 
//       item.day === currentDate.getDate() &&
//       currentDate.getMonth() === new Date().getMonth() &&
//       currentDate.getFullYear() === new Date().getFullYear();

//     return (
//       <TouchableOpacity
//         style={[
//           styles.dayItem,
//           !item.currentMonth && styles.otherMonthDay,
//           isToday && styles.todayBorder, // Highlight the current date
//         ]}
//         onPress={() => item.currentMonth && selectDate(item.day)}
//         disabled={!item.currentMonth}
//       >
//         <Text
//           style={[
//             styles.dayText,
//             !item.currentMonth && styles.otherMonthDayText,
//           ]}
//         >
//           {item.day}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   return (
//     <Modal visible={isVisible} transparent animationType="fade">
//       <View style={styles.modalContainer}>
//         <View style={styles.datePickerContainer}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>Select DOB</Text>
//             <TouchableOpacity onPress={onClose}>
//               <Ionicons name="close" size={24} color="#FF4D67" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.calendarHeader}>
//             <TouchableOpacity onPress={() => changeMonth(-1)}>
//               <Ionicons name="chevron-back" size={24} color="#FF4D67" />
//             </TouchableOpacity>
//             <Text style={styles.monthYearText}>
//               {currentDate.toLocaleString('default', {
//                 month: 'long',
//                 year: 'numeric',
//               })}
//             </Text>
//             <TouchableOpacity onPress={() => changeMonth(1)}>
//               <Ionicons name="chevron-forward" size={24} color="#FF4D67" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.weekDaysContainer}>
//             {weekDays.map((day) => (
//               <Text key={day} style={styles.weekDayText}>
//                 {day}
//               </Text>
//             ))}
//           </View>
//           <FlatList
//             data={getDaysArray()}
//             renderItem={renderDay}
//             numColumns={7}
//             keyExtractor={(item, index) => index.toString()}
//             scrollEnabled={false}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   datePickerContainer: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     width: '90%',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   calendarHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   monthYearText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#000000',
//   },
//   weekDaysContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   weekDayText: {
//     fontSize: 14,
//     color: '#6A707C',
//     width: 40,
//     textAlign: 'center',
//   },
//   dayItem: {
//     flex: 1,
//     aspectRatio: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dayText: {
//     fontSize: 16,
//     color: '#000000',
//   },
//   otherMonthDay: {
//     opacity: 0.3,
//   },
//   otherMonthDayText: {
//     color: '#6A707C',
//   },
//   todayBorder: {
//     borderWidth: 1,
//     borderColor: '#FF4D67', 
//     borderRadius: 50,
//   },
// });

// export default CustomDatePicker;






import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomDatePickerProps {
  isVisible: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  isVisible,
  onClose,
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysArray = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInCurrentMonth = daysInMonth(month, year);
    const daysInPrevMonth = daysInMonth(month - 1, year);

    const daysArray = [];

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      daysArray.push({ day: daysInPrevMonth - i, currentMonth: false });
    }

    // Current month's days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      daysArray.push({ day: i, currentMonth: true });
    }

    // Next month's days
    const remainingDays = 42 - daysArray.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      daysArray.push({ day: i, currentMonth: false });
    }

    return daysArray;
  };

  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const selectDate = (day: number) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    // Ensure the date is represented in local time
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const date = String(selectedDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${date}`;

    console.log('Selected Date =>>>>>', formattedDate); // Logs the date in the correct local format
    onDateSelect(formattedDate);
    onClose();
  };



  const renderDay = ({ item }: { item: { day: number; currentMonth: boolean } }) => {
    const isToday = item.currentMonth &&
      item.day === currentDate.getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear();

    return (
      <TouchableOpacity
        style={[
          styles.dayItem,
          !item.currentMonth && styles.otherMonthDay,
          isToday && styles.todayBorder, // Highlight the current date
        ]}
        onPress={() => item.currentMonth && selectDate(item.day)}
        disabled={!item.currentMonth}
      >
        <Text
          style={[
            styles.dayText,
            !item.currentMonth && styles.otherMonthDayText,
          ]}
        >
          {item.day}
        </Text>
      </TouchableOpacity>
    );
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.datePickerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Select DOB</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#FF4D67" />
            </TouchableOpacity>
          </View>
          <View style={styles.calendarHeader}>
            <TouchableOpacity onPress={() => changeMonth(-1)}>
              <Ionicons name="chevron-back" size={24} color="#FF4D67" />
            </TouchableOpacity>
            <Text style={styles.monthYearText}>
              {currentDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </Text>
            <TouchableOpacity onPress={() => changeMonth(1)}>
              <Ionicons name="chevron-forward" size={24} color="#FF4D67" />
            </TouchableOpacity>
          </View>
          <View style={styles.weekDaysContainer}>
            {weekDays.map((day) => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>
          <FlatList
            data={getDaysArray()}
            renderItem={renderDay}
            numColumns={7}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 14,
    color: '#6A707C',
    width: 40,
    textAlign: 'center',
  },
  dayItem: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: '#000000',
  },
  otherMonthDay: {
    opacity: 0.3,
  },
  otherMonthDayText: {
    color: '#6A707C',
  },
  todayBorder: {
    borderWidth: 1,
    borderColor: '#FF4D67',
    borderRadius: 50,
  },
});

export default CustomDatePicker;