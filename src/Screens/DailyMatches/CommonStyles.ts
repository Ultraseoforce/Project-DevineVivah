import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../../Theme";


const { width } = Dimensions.get('window');

export const Style = StyleSheet.create({
    container: {
        height: width * 1.3,
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal: 16,
        marginVertical: 10
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 16,
      },
      headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
      },
      profileOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: Color.translucentBlack,
      },
      profileInfo: {
        marginBottom: 16,
      },
      nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      nameText: {
        color: Color.white,
        fontSize: 24,
        fontWeight: 'bold',
      },
      ageText: {
        color: Color.white,
        fontSize: 24,
        marginRight: 8,
      },
      detailsRow: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 8,
      },
      distanceContainer: {
        backgroundColor: Color.translucentWhite,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
      },
      distanceText: {
        color: Color.white,
        fontSize: 14,
      },
      membershipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.orange,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
        gap: 8,
      },
      membershipText: {
        color: '#fff',
        fontSize: 14,
      },
      actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
      },
      actionButton: {
        flex: 1,
        height: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      chatButton: {
        backgroundColor: '#FFC10740',
      },
      likeButton: {
        backgroundColor: '#FF5A6080',
      },
   
  });