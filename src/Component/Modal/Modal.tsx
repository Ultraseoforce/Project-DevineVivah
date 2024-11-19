import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';

const ChatModal = ({ isModalVisible, toggleModal }: any) => {
    return (
        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={toggleModal}
        >
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                                <Text style={[styles.modalText, Typography.smallTitle]}>View Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                                <Text style={[styles.modalText, Typography.smallTitle]}>Block</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 55,
        marginRight: 10,
    },
    modalContainer: {
        width: '33%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
    },
    modalOption: {
        paddingVertical: 3,
    },
    modalText: {
        fontSize: 16,
        color: Color.black,
        textAlign: 'left',
    },
});

export default ChatModal;
