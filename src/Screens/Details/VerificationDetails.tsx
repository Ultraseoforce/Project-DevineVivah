// import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import BackHeader from '../../Component/Header/BackHeader'
// import { moderateScale } from '../../Theme/ResposiveSize'
// import { Color } from '../../Theme'
// import Button from '../../Component/Buttons/Button'
// import { Typography } from '../../Theme/Typography'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import DocumentScanner from 'react-native-document-scanner-plugin'


// const CreationSteps = () => {
//   const [scannedImage, setScannedImage] = useState();

//   const scanDocument = async () => {
//     const { scannedImages } = await DocumentScanner.scanDocument()
//     if (scannedImages.length > 0) {
//       setScannedImage(scannedImages[0])
//     }
//   }

//   console.log("scannedImage", scannedImage)


//   return (
//     <View style={{ flex: 1, backgroundColor: Color.white }}>
//       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
//       <BackHeader />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.container}>
//           <Text style={[styles.heading, Typography.main_heading]}>Upload your Identity proof</Text>
//           <Text style={[styles.text, Typography.body]}>Kindly attach the front, back picture of your national identity card.</Text>
//           <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(15) }}>
//             <View style={styles.cardContainer}>
//               <Pressable onPress={() => scanDocument()} style={styles.redBox}>
//               <MaterialIcons name="add" size={29} color={Color.black} />
//               </Pressable>
//               <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : front</Text>
//             </View>

//             <View style={styles.cardContainer}>
//               <Pressable onPress={() => scanDocument()} style={styles.redBox}>
//               <MaterialIcons name="add" size={29} color={Color.black} />
//               </Pressable>
//               <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : back</Text>
//             </View>
//           </View>
//           <View style={{marginTop: moderateScale(43)}}>
//           <Text style={[Typography.smallTitle, {color: Color.black, paddingVertical: 5}]}>Upload your picture</Text>
//           <View style={styles.cardContainer}>
//               <Pressable style={styles.redBox}>
//               <MaterialIcons name="add" size={29} color={Color.black} />
//               </Pressable>
//               <Text style={[styles.cardText, Typography.smallTitle]}>Take Selfie</Text>
//             </View>
//           </View>
//         </View>
//         <Button title='Next' mainStyle={styles.btn} />
//       </ScrollView>
//     </View>
//   )
// }

// export default CreationSteps

// const styles = StyleSheet.create({
//   container: {
//     padding: moderateScale(16)
//   },
//   heading: {
//     // marginTop: moderateScale(15)
//   },
//   text: {
//     marginTop: moderateScale(20),
//     color: Color.chatBg
//   },
//   btn: {
//     marginTop: moderateScale(80),
//     marginBottom: moderateScale(30),
//     marginHorizontal: moderateScale(10)
//   },

//   cardContainer: {
//     position: 'relative',
//     width: moderateScale(160),
//   },
//   redBox: {
//     backgroundColor: Color.inputBg,
//     height: moderateScale(110),
//     width: '100%',
//     alignItems: "center",
//     borderRadius: 8,
//     justifyContent: "center",
//   },
//   cardText: {
//     position: "absolute",
//     bottom: -35,
//     left: 0,
//     margin: moderateScale(5),
//     fontSize: moderateScale(12),
//     color: Color.black,
//   },

// })
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackHeader from '../../Component/Header/BackHeader';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import Button from '../../Component/Buttons/Button';
import { Typography } from '../../Theme/Typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DocumentScanner from 'react-native-document-scanner-plugin';
import { useGetProfileQuery, useUpdateVerificationDetailsMutation } from '../../Store/profile/ProfileApiSlice';
import CompletedIcon from '../../assets/svg/CompletedIcon.svg';
import Toast from '../../Component/Modal/ToastMessage';
import { navigate } from '../../Navigator/Utils';

const CreationSteps = () => {
  const { showToast } = Toast();
  const [cardType, setCardType] = useState(1);
  const [frontPhoto, setFrontPhoto] = useState<string | null>(null);
  const [backPhoto, setBackPhoto] = useState<string | null>(null);
  const [selfie, setSelfie] = useState<string | null>(null);
  const [updateVerificationDetails, { isLoading, error }] = useUpdateVerificationDetailsMutation();
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const { data: getProfile } = useGetProfileQuery({});

  useEffect(() => {
    if (getProfile?.verification_details === 1) {
      setSelfie(getProfile.selfie);
      setFrontPhoto(getProfile.front_photo);
      setBackPhoto(getProfile.back_photo);
    }
  }, [getProfile]);

  const scanDocument = async (setImage: React.Dispatch<React.SetStateAction<string | null>>) => {
    const { scannedImages } = await DocumentScanner.scanDocument();
    if (scannedImages.length > 0) {
      setImage(scannedImages[0]);
    }
  };

  const validateInputs = () => {
    const errors: { [key: string]: string } = {};
    if (!cardType) {
      errors.cardType = 'Card type is required';
    }
    if (!frontPhoto) {
      errors.frontPhoto = 'Front photo is required';
    }
    if (!backPhoto) {
      errors.backPhoto = 'Back photo is required';
    }
    if (!selfie) {
      errors.selfie = 'Selfie is required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }

    const formData = new FormData();
    formData.append('card_type', cardType.toString());
    if (frontPhoto) {
      formData.append('front_photo', {
        uri: frontPhoto,
        type: 'image/jpeg',
        name: 'front_photo.jpg',
      });
    }
    if (backPhoto) {
      formData.append('back_photo', {
        uri: backPhoto,
        type: 'image/jpeg',
        name: 'back_photo.jpg',
      });
    }
    if (selfie) {
      formData.append('selfie', {
        uri: selfie,
        type: 'image/jpeg',
        name: 'selfie.jpg',
      });
    }

    console.log("formData", formData);

    try {
      const response = await updateVerificationDetails(formData).unwrap();
      showToast(response.message, { type: 'normal' });
      navigate('CreationSteps', {});
    } catch (err) {
      console.error('Error updating verification details:', err);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={[styles.heading, Typography.main_heading]}>Upload your Identity proof</Text>
          <Text style={[styles.text, Typography.body]}>Kindly attach the front, back picture of your national identity card.</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(15) }}>
            <View style={styles.cardContainer}>
              <Pressable onPress={() => scanDocument(setFrontPhoto)} style={styles.redBox}>
                {!frontPhoto ? (
                  <MaterialIcons name="add" size={29} color={Color.black} />
                ) : (
                  <CompletedIcon height={30} width={30} />
                )}
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : front</Text>
              {validationErrors.frontPhoto && <Text style={styles.errorText}>{validationErrors.frontPhoto}</Text>}
            </View>

            <View style={styles.cardContainer}>
              <Pressable onPress={() => scanDocument(setBackPhoto)} style={styles.redBox}>
                {!backPhoto ? (
                  <MaterialIcons name="add" size={29} color={Color.black} />
                ) : (
                  <CompletedIcon height={30} width={30} />
                )}
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : back</Text>
              {validationErrors.backPhoto && <Text style={styles.errorText}>{validationErrors.backPhoto}</Text>}
            </View>
          </View>
          <View style={{ marginTop: moderateScale(43) }}>
            <Text style={[Typography.smallTitle, { color: Color.black, paddingVertical: 5 }]}>Upload your picture</Text>
            <View style={styles.cardContainer}>
              <Pressable onPress={() => scanDocument(setSelfie)} style={styles.redBox}>
                {!selfie ? (
                  <MaterialIcons name="add" size={29} color={Color.black} />
                ) : (
                  <CompletedIcon height={30} width={30} />
                )}
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>Take Selfie</Text>
              {validationErrors.selfie && <Text style={styles.errorText}>{validationErrors.selfie}</Text>}
            </View>
          </View>
          {validationErrors.cardType && <Text style={styles.errorText}>{validationErrors.cardType}</Text>}
          <Button title='Next' mainStyle={styles.btn} onPress={handleSubmit} loading={isLoading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreationSteps;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
  },
  heading: {
    // marginTop: moderateScale(15),
  },
  text: {
    marginTop: moderateScale(20),
    color: Color.chatBg,
  },
  btn: {
    marginTop: moderateScale(80),
    marginBottom: moderateScale(30),
    marginHorizontal: moderateScale(10),
  },
  cardContainer: {
    position: 'relative',
    width: moderateScale(160),
  },
  redBox: {
    backgroundColor: Color.inputBg,
    height: moderateScale(110),
    width: '100%',
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  cardText: {
    position: "absolute",
    bottom: -35,
    left: 0,
    margin: moderateScale(5),
    fontSize: moderateScale(12),
    color: Color.black,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: moderateScale(20),
  },
});