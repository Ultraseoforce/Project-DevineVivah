// // import { Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
// // import React, { useRef, useState } from 'react'
// // import { Color } from '../Theme'
// // import { navigationRef } from '../Navigator/Utils'
// // import { moderateScale, scale } from '../Theme/ResposiveSize'
// // import Feather from 'react-native-vector-icons/Feather';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// // import { Typography } from '../Theme/Typography'
// // import { FontSize } from '../Theme/FontSize'
// // import RequestButton from '../Component/Buttons/RequestButton'
// // import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack'

// // const AstrologerProfileView = () => {
// //     const [activeIndex, setActiveIndex] = useState(0);
// //     const flatListRef = useRef(null);
// //     const [isExpanded, setIsExpanded] = useState(false)


// //     const tik = require("../assets/Image/smallTik.png")

// //     const images = [
// //         require('../assets/Image/viewprofile.png'),
// //         require('../assets/Image/viewprofile.png'),
// //         require('../assets/Image/viewprofile.png'),
// //     ];

// //     const toggleExpand = () => {
// //         setIsExpanded(!isExpanded);
// //     };
// //     const onViewRef = React.useRef(({ viewableItems }: any) => {
// //         if (viewableItems.length > 0) {
// //             setActiveIndex(viewableItems[0].index);
// //         }
// //     });
// //     const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

// //     return (
// //         <View style={{ flex: 1 }}>
// //             {/* <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} /> */}
// //             <StatusBar translucent backgroundColor="transparent" />
// //             <ScrollView>
// //                 <View style={{}}>
// //                     <FlatList
// //                         data={images}
// //                         ref={flatListRef}
// //                         horizontal
// //                         pagingEnabled
// //                         showsHorizontalScrollIndicator={false}
// //                         keyExtractor={(item, index) => index.toString()}
// //                         renderItem={({ item }) => (
// //                             <Image source={item} style={styles.image} />
// //                         )}
// //                         onViewableItemsChanged={onViewRef.current}
// //                         viewabilityConfig={viewConfigRef.current}
// //                     />

// //                     <View style={styles.dotContainer}>
// //                         {images.map((_, index) => (
// //                             <View
// //                                 key={index}
// //                                 style={[
// //                                     styles.dot,
// //                                     { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
// //                                 ]}
// //                             />
// //                         ))}
// //                     </View>
// //                     <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", top: scale(27), alignItems: "center", width: "100%" }}>
// //                         <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
// //                             <Feather name="chevron-left" size={35} color={Color.black} />
// //                         </Pressable>

// //                         <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
// //                             <AntDesign name="heart" size={25} color={Color.orange} />
// //                         </Pressable>

// //                     </View>

// //                     <View style={{ gap: 15, marginTop: 10 }}>
// //                         <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "center" }}>
// //                             <Text style={[Typography.large_headings, { fontSize: FontSize.Font31, lineHeight: 35 }]}>Full Name</Text>
// //                             <Image source={tik} style={{ height: 28, width: 28 }} />
// //                         </View>
// //                         <Text style={[Typography.samll_bold, { alignSelf: "center", color: Color.black }]}>INR. 5000<Text style
// //                             ={{ color: Color.chatBg }}>/hour</Text></Text>
// //                         <RequestButton title='Message' />
// //                         <View style={{ marginHorizontal: moderateScale(15) }}>
// //                             <Text style={Typography.samll_bold}>Bio:</Text>
// //                             <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5 }]}>
// //                                 {isExpanded
// //                                     ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint."
// //                                     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit"}
// //                                 <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}> {isExpanded ? "See less..." : "See more..."}</Text>
// //                             </Text>
// //                         </View>

// //                     </View>

// //                     <PersonalDetailTrack heding='Experience' reviews={true} />
// //                 </View>
// //             </ScrollView>
// //         </View>
// //     )
// // }

// // export default AstrologerProfileView

// // const styles = StyleSheet.create({
// //     image: {
// //         height: moderateScale(360),
// //         width: Dimensions.get("screen").width,
// //         alignSelf: "center"
// //     },
// //     back: {
// //         // position: "absolute",
// //         backgroundColor: Color.boxBg,
// //         height: scale(40),
// //         width: scale(40),
// //         borderRadius: scale(50),
// //         margin: scale(15),
// //         alignSelf: 'center',
// //         justifyContent: 'center'
// //         // justifyContent: "center",
// //         // alignItems: "center",
// //     },
// //     heart: {
// //         // position: "absolute",
// //         // alignSelf: "flex-end",
// //         backgroundColor: Color.boxBg,
// //         height: scale(40),
// //         width: scale(40),
// //         borderRadius: scale(50),
// //         margin: scale(15),
// //         right: 3,
// //         justifyContent: "center",
// //         alignItems: "center",
// //     },
// //     icon: {
// //         height: scale(30),
// //         width: scale(30)
// //     },

// //     dotContainer: {
// //         flexDirection: 'row',
// //         justifyContent: 'center',
// //         top: -25,
// //     },
// //     dot: {
// //         height: 10,
// //         width: 10,
// //         borderRadius: 5,
// //         marginHorizontal: 5,
// //     },
// // })

// // import { Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
// // import React, { useRef, useState } from 'react';
// // import { Color } from '../Theme';
// // import { navigationRef } from '../Navigator/Utils';
// // import { moderateScale, scale } from '../Theme/ResposiveSize';
// // import Feather from 'react-native-vector-icons/Feather';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// // import { Typography } from '../Theme/Typography';
// // import { FontSize } from '../Theme/FontSize';
// // import RequestButton from '../Component/Buttons/RequestButton';
// // import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';

// // const AstrologerProfileView = () => {
// //     const [activeIndex, setActiveIndex] = useState(0);
// //     const flatListRef = useRef(null);
// //     const [isExpanded, setIsExpanded] = useState(false);

// //     const tik = require("../assets/Image/smallTik.png");

// //     const images = [
// //         require('../assets/Image/viewprofile.png'),
// //         require('../assets/Image/viewprofile.png'),
// //         require('../assets/Image/viewprofile.png'),
// //     ];

// //     const toggleExpand = () => {
// //         setIsExpanded(!isExpanded);
// //     };

// //     const onViewRef = React.useRef(({ viewableItems }: any) => {
// //         if (viewableItems.length > 0) {
// //             setActiveIndex(viewableItems[0].index);
// //         }
// //     });
// //     const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

// //     return (
// //         <View style={{ flex: 1 }}>
// //             <StatusBar translucent backgroundColor="transparent" />
// //             <FlatList
// //                 data={[]}
// //                 ListHeaderComponent={
// //                     <View>
// //                         {/* FlatList for Images */}
// //                         <FlatList
// //                             data={images}
// //                             ref={flatListRef}
// //                             horizontal
// //                             pagingEnabled
// //                             showsHorizontalScrollIndicator={false}
// //                             keyExtractor={(item, index) => index.toString()}
// //                             renderItem={({ item }) => (
// //                                 <Image source={item} style={styles.image} />
// //                             )}
// //                             onViewableItemsChanged={onViewRef.current}
// //                             viewabilityConfig={viewConfigRef.current}
// //                         />

// //                         {/* Dots Indicator */}
// //                         <View style={styles.dotContainer}>
// //                             {images.map((_, index) => (
// //                                 <View
// //                                     key={index}
// //                                     style={[
// //                                         styles.dot,
// //                                         { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
// //                                     ]}
// //                                 />
// //                             ))}
// //                         </View>

// //                         {/* Header Icons */}
// //                         <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", top: scale(27), alignItems: "center", width: "100%" }}>
// //                             <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
// //                                 <Feather name="chevron-left" size={35} color={Color.black} />
// //                             </Pressable>

// //                             <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
// //                                 <AntDesign name="heart" size={25} color={Color.orange} />
// //                             </Pressable>
// //                         </View>

// //                         {/* Profile Details */}
// //                         <View style={{ gap: 15, marginTop: 10 }}>
// //                             <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "center" }}>
// //                                 <Text style={[Typography.large_headings, { fontSize: FontSize.Font31, lineHeight: 35 }]}>Full Name</Text>
// //                                 <Image source={tik} style={{ height: 28, width: 28 }} />
// //                             </View>
// //                             <Text style={[Typography.samll_bold, { alignSelf: "center", color: Color.black }]}>
// //                                 INR. 5000<Text style={{ color: Color.chatBg }}>/hour</Text>
// //                             </Text>
// //                             <RequestButton title='Message' />
// //                             <View style={{ marginHorizontal: moderateScale(15) }}>
// //                                 <Text style={Typography.samll_bold}>Bio:</Text>
// //                                 <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5 }]}>
// //                                     {isExpanded
// //                                         ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint."
// //                                         : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit"}
// //                                     <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}>
// //                                         {isExpanded ? " See less..." : " See more..."}
// //                                     </Text>
// //                                 </Text>
// //                             </View>
// //                         </View>
// //                     </View>
// //                 }
// //                 ListFooterComponent={<PersonalDetailTrack heding='Experience' reviews={true} />}
// //             />
// //         </View>
// //     );
// // };

// // export default AstrologerProfileView;

// // const styles = StyleSheet.create({
// //     image: {
// //         height: moderateScale(360),
// //         width: Dimensions.get("screen").width,
// //         alignSelf: "center"
// //     },
// //     back: {
// //         backgroundColor: Color.boxBg,
// //         height: scale(40),
// //         width: scale(40),
// //         borderRadius: scale(50),
// //         margin: scale(15),
// //         alignSelf: 'center',
// //         justifyContent: 'center'
// //     },
// //     heart: {
// //         backgroundColor: Color.boxBg,
// //         height: scale(40),
// //         width: scale(40),
// //         borderRadius: scale(50),
// //         margin: scale(15),
// //         right: 3,
// //         justifyContent: "center",
// //         alignItems: "center",
// //     },
// //     dotContainer: {
// //         flexDirection: 'row',
// //         justifyContent: 'center',
// //         top: -25,
// //     },
// //     dot: {
// //         height: 10,
// //         width: 10,
// //         borderRadius: 5,
// //         marginHorizontal: 5,
// //     },
// // });


// import { Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Color } from '../Theme';
// import { navigationRef } from '../Navigator/Utils';
// import { moderateScale, scale } from '../Theme/ResposiveSize';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { Typography } from '../Theme/Typography';
// import { FontSize } from '../Theme/FontSize';
// import RequestButton from '../Component/Buttons/RequestButton';
// import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';

// const AstrologerProfileView = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const flatListRef = useRef(null);
//     const [isExpanded, setIsExpanded] = useState(false);

//     const tik = require("../assets/Image/smallTik.png");

//     const images = [
//         require('../assets/Image/viewprofile.png'),
//         require('../assets/Image/viewprofile.png'),
//         require('../assets/Image/viewprofile.png'),
//     ];

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const onViewRef = React.useRef(({ viewableItems }: any) => {
//         if (viewableItems.length > 0) {
//             setActiveIndex(viewableItems[0].index);
//         }
//     });
//     const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

//     return (
//         <View style={{ flex: 1 }}>
//             <StatusBar translucent backgroundColor="transparent" />
//             <FlatList
//                 data={[]}
//                 ListHeaderComponent={
//                     <View>
//                         {/* FlatList for Images */}
//                         <FlatList
//                             data={images}
//                             ref={flatListRef}
//                             horizontal
//                             pagingEnabled
//                             showsHorizontalScrollIndicator={false}
//                             keyExtractor={(item, index) => `image-${index}`} // Unique key for images
//                             renderItem={({ item, index }) => (
//                                 <Image key={`image-${index}`} source={item} style={styles.image} /> // Add key here for each image
//                             )}
//                             onViewableItemsChanged={onViewRef.current}
//                             viewabilityConfig={viewConfigRef.current}
//                         />

//                         {/* Dots Indicator */}
//                         <View style={styles.dotContainer}>
//                             {images.map((_, index) => (
//                                 <View
//                                     key={`dot-${index}`} // Unique key for each dot
//                                     style={[styles.dot, { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' }]}
//                                 />
//                             ))}
//                         </View>

//                         {/* Header Icons */}
//                         <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", top: scale(27), alignItems: "center", width: "100%" }}>
//                             <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
//                                 <Feather name="chevron-left" size={35} color={Color.black} />
//                             </Pressable>

//                             <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
//                                 <AntDesign name="heart" size={25} color={Color.orange} />
//                             </Pressable>
//                         </View>

//                         {/* Profile Details */}
//                         <View style={{ gap: 15, marginTop: 10 }}>
//                             <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "center" }}>
//                                 <Text style={[Typography.large_headings, { fontSize: FontSize.Font31, lineHeight: 35 }]}>Full Name</Text>
//                                 <Image source={tik} style={{ height: 28, width: 28 }} />
//                             </View>
//                             <Text style={[Typography.samll_bold, { alignSelf: "center", color: Color.black }]}>
//                                 INR. 5000<Text style={{ color: Color.chatBg }}>/hour</Text>
//                             </Text>
//                             <RequestButton title='Message' />
//                             <View style={{ marginHorizontal: moderateScale(15) }}>
//                                 <Text style={Typography.samll_bold}>Bio:</Text>
//                                 <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5 }]}>
//                                     {isExpanded
//                                         ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint."
//                                         : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit"}
//                                     <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}>
//                                         {isExpanded ? " See less..." : " See more..."}
//                                     </Text>
//                                 </Text>
//                             </View>
//                         </View>
//                     </View>
//                 }
//                 ListFooterComponent={<PersonalDetailTrack heding='Experience' reviews={true} />}
//             />
//         </View>
//     );
// };

// export default AstrologerProfileView;

// const styles = StyleSheet.create({
//     image: {
//         height: moderateScale(360),
//         width: Dimensions.get("screen").width,
//         alignSelf: "center"
//     },
//     back: {
//         backgroundColor: Color.boxBg,
//         height: scale(40),
//         width: scale(40),
//         borderRadius: scale(50),
//         margin: scale(15),
//         alignSelf: 'center',
//         justifyContent: 'center'
//     },
//     heart: {
//         backgroundColor: Color.boxBg,
//         height: scale(40),
//         width: scale(40),
//         borderRadius: scale(50),
//         margin: scale(15),
//         right: 3,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     dotContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         top: -25,
//     },
//     dot: {
//         height: 10,
//         width: 10,
//         borderRadius: 5,
//         marginHorizontal: 5,
//     },
// });


import { Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Color } from '../Theme';
import { navigationRef } from '../Navigator/Utils';
import { moderateScale, scale } from '../Theme/ResposiveSize';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import RequestButton from '../Component/Buttons/RequestButton';
import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';

const AstrologerProfileView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const tik = require("../assets/Image/smallTik.png");

    const images = [
        require('../assets/Image/viewprofile.png'),
        require('../assets/Image/viewprofile.png'),
        require('../assets/Image/viewprofile.png'),
    ];

   
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const onViewRef = React.useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <FlatList
                data={[]}
                ListHeaderComponent={
                    <View>
                        {/* FlatList for Images */}
                        <FlatList
                            data={images}
                            ref={flatListRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => `image-${index}`} // Unique key for images
                            renderItem={({ item, index }) => (
                                <Image key={`image-${index}`} source={item} style={styles.image} /> // Add key here for each image
                            )}
                            onViewableItemsChanged={onViewRef.current}
                            viewabilityConfig={viewConfigRef.current}
                        />

                        {/* Dots Indicator */}
                        <View style={styles.dotContainer}>
                            {images.map((_, index) => (
                                <View
                                    key={`dot-${index}`} // Unique key for each dot
                                    style={[styles.dot, { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' }]}
                                />
                            ))}
                        </View>

                        {/* Header Icons */}
                        <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", top: scale(27), alignItems: "center", width: "100%" }}>
                            <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
                                <Feather name="chevron-left" size={35} color={Color.black} />
                            </Pressable>

                            <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
                                <AntDesign name="heart" size={25} color={Color.orange} />
                            </Pressable>
                        </View>

                        {/* Profile Details */}
                        <View style={{ gap: 15, marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "center" }}>
                                <Text style={[Typography.large_headings, { fontSize: FontSize.Font31, lineHeight: 35 }]}>Full Name</Text>
                                <Image source={tik} style={{ height: 28, width: 28 }} />
                            </View>
                            <Text style={[Typography.samll_bold, { alignSelf: "center", color: Color.black }]}>
                                INR. 5000<Text style={{ color: Color.chatBg }}>/hour</Text>
                            </Text>
                            <RequestButton title='Message' />
                            <View style={{ marginHorizontal: moderateScale(15) }}>
                                <Text style={Typography.samll_bold}>Bio:</Text>
                                <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5 }]}>
                                    {isExpanded
                                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint."
                                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit"}
                                    <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}>
                                        {isExpanded ? " See less..." : " See more..."}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                }
                ListFooterComponent={<PersonalDetailTrack heding='Experience' reviews={true} />}
            />
        </View>
    );
};

export default AstrologerProfileView;

const styles = StyleSheet.create({
    image: {
        height: moderateScale(360),
        width: Dimensions.get("screen").width,
        alignSelf: "center"
    },
    back: {
        backgroundColor: Color.boxBg,
        height: scale(40),
        width: scale(40),
        borderRadius: scale(50),
        margin: scale(15),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    heart: {
        backgroundColor: Color.boxBg,
        height: scale(40),
        width: scale(40),
        borderRadius: scale(50),
        margin: scale(15),
        right: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: -25,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    reviewItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
});
